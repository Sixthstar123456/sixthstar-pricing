// pages/api/plan-contact.js
import { transporter, mailOptions } from "../../config/nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.setHeader("Allow", ["POST"]).status(405).end()

  const data = req.body
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Quote Request: ${data.planName} (${data.region})`,
      text: `
Name: ${data.firstname} ${data.lastname}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Plan: ${data.planName} (${data.region})
Features: ${data.features.join(", ")}
      `,
      html: `
<h2>Quote Request</h2>
<p><strong>Name:</strong> ${data.firstname} ${data.lastname}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Phone:</strong> ${data.phone}</p>
<p><strong>Company:</strong> ${data.company}</p>
<p><strong>Plan:</strong> ${data.planName} (${data.region})</p>
<p><strong>Features:</strong><br/>• ${data.features.join("<br/>• ")}</p>
      `
    })
    res.status(200).json({ message: "Quote email sent" })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Server error" })
  }
}
