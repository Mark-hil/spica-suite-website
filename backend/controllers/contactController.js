const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactMessage = async (req, res) => {
  // Validate inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }

  const { name, email, phone, service, message } = req.body;

  try {
    // Email to Spica Suite
    await transporter.sendMail({
      from: `"Spica Suite Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Enquiry: ${service} — ${name}`,
      html: `
        <h2 style="color:#1a3fa8">New Contact Form Submission</h2>
        <table cellpadding="8" cellspacing="0">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
          <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
        </table>
        <h3>Message</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Auto-reply to client
    await transporter.sendMail({
      from: `"Spica Suite Consult" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your message — Spica Suite Consult',
      html: `
        <h2 style="color:#1a3fa8">Thank you, ${name}!</h2>
        <p>We've received your enquiry about <strong>${service}</strong> and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to reach us at:</p>
        <p>📞 +233 (0) 553386282 | +233 (0) 542172880</p>
        <p><em>... Creating Unforgettable and Magical Moments</em></p>
        <p>— Team Spica Suite Consult</p>
      `,
    });

    res.json({ success: true, message: 'Your message has been sent. We will contact you shortly!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
};

module.exports = { sendContactMessage };
