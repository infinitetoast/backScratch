'use strict';

const dbHelpers = require('../../models/user');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'infinitetoast.dev@gmail.com',
    pass: 'YoungBeach69!'
  }
});

let mailOptions = {
  from: 'infinitetoast.dev@gmail.com',
  to: '',
  subject: 'Task Accepted!',
  text: ''
};

const sendEmail = (taskId, assigneeId) => {
  const getEmailOptions = (taskId, assigneeId) => {
    let requestorPromise = dbHelpers.getUserByTaskId(taskId);
    let assigneePromise = dbHelpers.getUserById(assigneeId);
    return Promise.all([requestorPromise, assigneePromise])
      .then(results => results.map(result => result[0].user.properties))
      .then(users => {
        return {
          requestor: users[0],
          assignee: users[1]
        };
      })
      .then(users => {
        return {
          requestor: Object.assign(
            {},
            mailOptions,
            {
              to: users.requestor.email,
              text: `Hello from backScratch! ${users.assignee.username} has accepted your task. You can contact them at ${users.assignee.email} Please open the backScratch app for more information.`
            } 
          ),
          assignee: Object.assign(
            {},
            mailOptions,
            {
              to: users.assignee.email,
              text: `Hello from backScratch! You've accepted ${users.requestor.username} task! You can contact them at ${users.requestor.email} Please open the backScratch app for more information.`
            } 
          )
        };
      });
  };
  getEmailOptions(taskId, assigneeId)
    .then(options => {
      for (option in options) {
        transporter.sendMail(options[option], (error, info) => {
          if (error) {
            console.log(error);
          }
          else {
            console.log('Message sent: ' + info.response);
          };
        });
      }
    })
    .catch(err => {
      console.error(err);
    })
}

module.exports = sendEmail;
