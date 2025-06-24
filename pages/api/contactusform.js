import { transporter , mailOptions } from "../../config/nodemailer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Cloud Contact form',
        text: data.message,
          html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>First Name:</strong> ${data.firstname}</p>
          <p><strong>Last Name:</strong> ${data.lastname}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Message:</strong><br/> ${data.message}</p>
        `,
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
