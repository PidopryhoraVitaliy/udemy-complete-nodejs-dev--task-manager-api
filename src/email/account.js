const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vpidopryhora@gmail.com',
        subject: 'this is a welcome email',
        text: `Welcome to the Task App ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    console.log('send mail');
    sgMail.send({
        to: email,
        from: 'vpidopryhora@gmail.com',
        subject: 'this is a cancel email',
        text: `Goodbye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}