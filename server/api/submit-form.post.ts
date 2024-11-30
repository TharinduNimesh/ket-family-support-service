import { sendEmail } from '../utils/mailer';
import { generateFormSubmissionEmail } from '../utils/emailTemplates';

export default defineEventHandler(async (event) => {
  try {
    const formData = await readBody(event);

    // Generate email content
    const emailContent = generateFormSubmissionEmail(formData);

    // Send email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL as string,
      subject: emailContent.subject,
      html: emailContent.html,
    });

    // Send confirmation email to participant
    await sendEmail({
      to: formData.participantDetails.email,
      subject: 'Thank you for your enquiry - KET Family Support Service',
      html: `
        <h1>Thank you for your enquiry</h1>
        <p>Dear ${formData.participantDetails.firstName},</p>
        <p>We have received your enquiry and will contact you shortly.</p>
        <p>If you have any urgent questions, please contact us at ${process.env.ADMIN_EMAIL}.</p>
        <br>
        <p>Best regards,</p>
        <p>KET Family Support Service Team</p>
      `,
    });

    return {
      success: true,
      message: 'Form submitted successfully',
    };
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to submit form',
    });
  }
});
