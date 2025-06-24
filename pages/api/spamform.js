import { transporter , mailOptions } from "../../config/nodemailer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Spam Filter Contact Form',
        text: data.message,
        html: `
          <h1>Spam Filter Contact Form</h1>
          <p>Name: ${data.fullName} </p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
<p>Selected Service: ${data.services}</p>        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
