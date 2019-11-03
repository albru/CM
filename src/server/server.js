require("dotenv").config();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

let mailOptions = {
  from: "cetus-media_client@gmail.com",
  to: "bryukhanovspb@gmail.com",
  subject: "asdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  text: "text",
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    return console.log(err);
  } else {
    return;
  }
});

