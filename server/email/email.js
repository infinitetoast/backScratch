'use strict';

const dbHelpers = require('../../models/user');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'infinitetoast.dev@gmail.com',
    pass: 'YoungBeach69!',
  },
});

const mailOptions = {
  from: 'infinitetoast.dev@gmail.com',
  to: '',
  subject: 'Task Accepted!',
  text: '',
};

const getEmailOptions = (taskId, assigneeId) => {
  const requestorPromise = dbHelpers.getUserByTaskId(taskId);
  const assigneePromise = dbHelpers.getUserById(assigneeId);
  return Promise.all([requestorPromise, assigneePromise])
    .then(results => results.map(result => result[0].user.properties))
    .then(users => ({
      requestor: users[0],
      assignee: users[1],
    }))
    .then(users => ({
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
      ),
    })
    );
};

const sendEmail = (taskId, assigneeId) => {
  getEmailOptions(taskId, assigneeId)
    .then(options => {
      const keys = Object.keys(options);
      keys.forEach(key => {
        transporter.sendMail(options[key], (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(`Message sent: ${info.response}`);
          }
        });
      });
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = sendEmail;
