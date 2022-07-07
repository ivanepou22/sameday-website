import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync.js";
import { emailService } from "../services/email.service.js";

const sendContactEmail = catchAsync(async (req, res) => {
  const { name, email, message, subject } = req.body;
  const text = {
    name,
    email,
    message,
  };
  await emailService.sendContactEmail(subject, text);
  res.status(httpStatus.OK).send({
    message: "Message sent, we will get back to you soon",
  });
});

export default {
  sendContactEmail,
};
