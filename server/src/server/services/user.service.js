import httpStatus from "http-status";
import { User } from "../models/index.js";
import ApiError from "../utils/ApiError.js";

const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.CONFLICT, "Email is already taken");
  }
  return User.create(userBody)
};

const getUserById = async (id) => {
  return User.findById(id);
};

const getuserByEmail = async (email) => {
  return User.findOne({ email });
};

const updateUserById = async (id, userBody) => {
  const user = await getUserById(id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  if (userBody.email && (await User.isEmailTaken(userBody.email))) {
    throw new ApiError(httpStatus.CONFLICT, "Email is already taken");
  }

  Object.assign(user, userBody);
  await user.save();
  return user;
};

const deleteUserById = async (id) => {
  const user = await getUserById(id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.remove();
  return user;
};

export const userService = {
    createUser,
    getUserById,
    getuserByEmail,
    updateUserById,
    deleteUserById,
};