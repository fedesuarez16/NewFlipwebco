import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  console.log('Received form submission:', req.body);

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

  console.log('Sending email with the following options:', mailOptions);

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Form submission successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
