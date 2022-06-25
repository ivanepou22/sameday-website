import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import config from '../config/config.js';
import logger from '../config/logger.js';


const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    config.google.clientId,
    config.google.clientSecret,
    config.google.redirectUri,
  );
  oauth2Client.setCredentials({
    refresh_token: config.google.refreshToken,
  });
  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: config.google.email,
      accessToken,
      clientId: config.google.clientId,
      clientSecret: config.google.clientSecret,
      refreshToken: config.google.refreshToken,
    },
  }
  );

  return transporter;
}

//const transport = createTransporter();

/* istanbul ignore next */
// if (process.env.NODE_ENV !== 'test') {
//   transport
//     .verify()
//     .then(() => logger.info('Connected to email server'))
//     .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
// }

const sendEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, text };
  //await transport.sendMail(msg);
  try {
    const transporter = await createTransporter();
    await transporter.sendMail(msg);
  }
  catch (err) {
    logger.error(err);
  }
};



const sendResetPasswordEmail = async (to, token, origin) => {
  const subject = 'Reset password';
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `${origin}/reset-password?token=${token}`;
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