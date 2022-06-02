import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async (file) => {
  const config = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  };
  cloudinary.config(config);
  const result = await cloudinary.uploader.upload(file, {
    folder: "cafe-app",
    public_id: `${Date.now()}`,
    resource_type: "auto",
  });
  return result.url;
};
