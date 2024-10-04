// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Configura tu transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o cualquier servicio de correo que uses
      auth: {
        user: 'coflipweb@gmail.com', // Your Gmail email address
        pass: 'ulgy iwbf fzsd nouj' // Your Gmail password
      },
    });

    const mailOptions = {
        from: 'coflipweb@gmail.com', // Sender address
        to: 'coflipweb@gmail.com', // tu correo donde recibirás los mensajes
      subject: 'Nuevo suscriptor',
      text: `Alguien se ha registrado con el email: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
