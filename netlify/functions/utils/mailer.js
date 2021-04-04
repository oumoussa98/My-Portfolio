const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASS,
  },
})
const sendMail = async mailOptions => {
  console.log('\x1B[35m', 'Sending email...')
  await transporter
    .sendMail({
      from: '<oumoussa> OUMOUSSA',
      to: mailOptions.to,
      subject: 'Contact form <oumoussa.tech>',
      text: mailOptions.text,
    })
    .then(res => console.log('\x1B[32m', 'Email sent successfully :)'))
}
module.exports = {
  sendMail,
}
