const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'your_email@gmail.com', // replace with your email
        pass: 'your_password' // replace with your password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Mouhamed amine" <your_email@gmail.com>', // sender address
    to: 'recipient_email@example.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
