import { sendEmail } from '../utils/mailer';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate required fields
    if (!body.to || !body.subject || (!body.text && !body.html)) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields',
      });
    }

    // Send email
    const info = await sendEmail({
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to send email',
    });
  }
});
