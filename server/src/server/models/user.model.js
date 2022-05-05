import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { toJson, paginate } from "./plugins";
import { roles } from "../config/roles.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: "Invalid Email address" });
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate: (value) => {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error({
            error: "Password must contain atleast one letter and one number",
          });
        }
      },
      private: true,
    },
    role: {
      type: String,
      enum: roles,
      default: "user",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
      private: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugins
userSchema.plugin(toJson);
userSchema.plugin(paginate);

// check if email is taken
userSchema.statics.isEmailTaken = async (email, excludeUserId) => {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

// check if password matches user password
userSchema.methods.isPasswordMatch = async (password) => {
  return await bcrypt.compare(password, this.password);
};


userSchema.pre('save', async next => {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})

const User = mongoose.model("User", userSchema);

export default User;