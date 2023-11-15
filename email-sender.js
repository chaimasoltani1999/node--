const nodemailer = require("nodemailer");

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Replace with your Gmail email
    pass: "your-password", // Replace with your Gmail password
  },
});

// Define email options
const mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient@example.com", // Replace with the recipient's email
  subject: "Test Email",
  text: "Hello from Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});