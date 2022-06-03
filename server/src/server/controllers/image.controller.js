import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync.js";
import { imageService } from "../services/index.js";


const createImage = catchAsync(async (req, res) => {
    console.log(req.file);
    const image = await imageService.createImage(req.file);
    res.status(httpStatus.CREATED).send(image);
})


export { createImage };