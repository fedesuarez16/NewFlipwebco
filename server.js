// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, number, company, query } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'coflipweb@gmail.com', // Your Gmail email address
            pass: 'ulgy iwbf fzsd nouj' // Your Gmail password
        }
    });

    // Configure email options
    const mailOptions = {
        from: 'coflipweb@gmail.com', // Sender address
        to: 'coflipweb@gmail.com', // List of recipients
        subject: 'New Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Number: ${number}
            Company: ${company}
            Query: ${query}
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Form submission successful');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
