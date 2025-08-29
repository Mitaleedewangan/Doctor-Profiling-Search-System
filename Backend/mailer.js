const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'dewanganmitalee94@gmail.com',  // from .env (App Email)
    pass: 'mnhf vsug zsva mcvi'   // from .env (App Password)
  }
});

module.exports = transporter;
