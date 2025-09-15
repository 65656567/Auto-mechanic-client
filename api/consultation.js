import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Extract form data
  const { name, email, date } = req.body || {};

  if (!name || !email || !date) {
    return res.status(400).json({ message: "Missing name, email, or date" });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // your Gmail or app password
      pass: process.env.EMAIL_PASS, // your Gmail app password
    },
  });

  try {
    // Send email to company
    await transporter.sendMail({
      from: `"Website Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // <-- company email from env
      subject: `New appointment from ${name}`,
      text: `New appointment from ${name} (${email}) on ${date}`,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Mesa Automotive LLC" <${process.env.EMAIL_USER}>`,
      to: email, // user's email
      subject: "Appointment Confirmation",
      text: `Hi ${name},\n\nThanks for booking an appointment on ${date}. We'll see you soon!\n\n- Mesa Automotive LLC`,
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Error sending email", error: error.message });
  }
}

     
