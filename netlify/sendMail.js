// netlify/functions/sendEmail.js

const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'sakethssdev@gmail.com',
        subject: `New message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' })
        };
    }
};

