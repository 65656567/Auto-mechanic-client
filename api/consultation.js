import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, date } = req.body || {};

  if (!name || !email || !date) {
    return res.status(400).json({ message: "Missing name, email, or date" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // Gmail account
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  // Default company email to EMAIL_USER if COMPANY_EMAIL isn’t set
  const companyEmail = process.env.COMPANY_EMAIL || process.env.EMAIL_USER;

  try {
    // Send email to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: companyEmail,
      subject: "New appointment",
      text: `New appointment from ${name} (${email}) on ${date}`,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your appointment",
      text: `Hi ${name}, thanks for booking an appointment on ${date}. We'll see you soon!`,
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      message: "Error sending email",
      error: error.message,
    });
  }
}

     
