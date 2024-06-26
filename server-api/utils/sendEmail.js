// utils/sendEmail.js

const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
  service: config.email.service,
  auth: {
    user: config.email.username,
    pass: config.email.password,
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: config.email.username,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
