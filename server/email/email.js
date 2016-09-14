const dbhelpers = require('../../models/user');
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
  // requestor's email
  let requestorOptions = mailOptions;
  dbhelpers.getUserByTaskId(taskId).then((res) => {
    const email = res[0].user.properties.email;
    console.log('taskId: ', taskId);
    console.log('requestorEmail: ', email);
    return Object.assign({}, requestorOptions, {to: email, text: 'Hello from backScratch! Someone has accepted your task. Please open the backScratch app for more information.'});
  }).then((requestorOptions) => {
    transporter.sendMail(requestorOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log('Message sent: ' + info.response);
      };
    });
  })
  // assignee's email
  let assigneeOptions = mailOptions;
  dbhelpers.getUserById(assigneeId).then((res) => {
    const email = res[0].user.properties.email;
    console.log('assigneeId: ', assigneeId);
    console.log('assigneeEmail: ', email);
    return Object.assign({}, assigneeOptions, {to: email, text: 'Hello from backScratch! You\'ve accepted Someone\'s task! Please open the backScratch app for more information.'});
  }).then((assigneeOptions) => {
    transporter.sendMail(assigneeOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log('Message sent: ' + info.response);
      };
    });
  })
};

module.exports = sendEmail;
