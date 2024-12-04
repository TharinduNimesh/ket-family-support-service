import { defineEventHandler, readBody } from 'h3'
import { sendEmail } from '../utils/mailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { firstName, lastName, email, phone, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: { error: 'All fields are required' }
      }
    }

    // Create email content
    const emailContent = {
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    // Send email to admin
    await sendEmail(emailContent)

    // Send confirmation email to user
    const userConfirmation = {
      to: email,
      subject: 'Thank you for contacting KET Family Support Service',
      html: `
        <h2>Thank you for your message</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <hr>
        <p>${message}</p>
        <hr>
        <p>Best regards,</p>
        <p>KET Family Support Service Team</p>
      `
    }

    await sendEmail(userConfirmation)

    return {
      statusCode: 200,
      body: { message: 'Email sent successfully' }
    }

  } catch (error) {
    console.error('Error sending email:', error)
    
    return {
      statusCode: 500,
      body: { error: 'Failed to send email' }
    }
  }
})
