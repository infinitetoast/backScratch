const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'infinitetoast.dev@gmail.com',
    pass: 'YoungBeach69!'
  }
});

let text = 'Hello World!';
let mailOptions = {
  from: 'infinitetoast.dev@gmail.com',
  to: 'neal.taylorjr@gmail.com',
  subject: 'Hello World',
  text: text
};

const sendEmail = () => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Message sent: ' + info.response);
    };
  });
};

module.exports = sendEmail;
