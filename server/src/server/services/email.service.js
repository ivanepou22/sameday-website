import nodemailer from 'nodemailer';
import config from '../config/config.js';
import logger from '../config/logger.js';

const transport = nodemailer.createTransport({
    host: 'localhost',
    port: 25,
    auth: {
        user: 'admin@localhost',
        pass: 'admin',
    },
});
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

const sendEmail = async (to, subject, text) => {
    const msg = { from: config.email.from, to, subject, text };
    await transport.sendMail(msg);
  };


  const sendResetPasswordEmail = async (to, token) => {
    const subject = 'Reset password';
    // replace this url with the link to the reset password page of your front-end app
    const resetPasswordUrl = `http://localhost:5000/reset-password?token=${token}`;
    const text = `Dear user,
  To reset your password, click on this link: ${resetPasswordUrl}
  If you did not request any password resets, then ignore this email.`;
    await sendEmail(to, subject, text);
  };

  const sendVerificationEmail = async (to, token) => {
    const subject = 'Email Verification';
    // replace this url with the link to the email verification page of your front-end app
    const verificationEmailUrl = `http://localhost:5000/api/v1/auth/verify-email?token=${token}`;
    const text = `Dear user,
  <button>Verify Email</button>
  To verify your email, click on this link: ${verificationEmailUrl}
  If you did not create an account, then ignore this email.`;
    await sendEmail(to, subject, text);
  };

  export const emailService = { sendEmail, sendResetPasswordEmail, sendVerificationEmail };