import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createImage = async (file) => {
  try {
    const { secure_url } = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return secure_url;
  } catch (error) {
    console.log(error);
  }
};

export const imageService = {
  createImage,
};
