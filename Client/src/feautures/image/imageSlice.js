import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { uploadImage } from "../../utils/upload";

const initialState = {
  imageUrl: null,
  imageLoading: false,
  imageError: null,
  isError: false,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UploadImage.pending, (state) => {
      state.imageLoading = true;
    });
    builder.addCase(UploadImage.fulfilled, (state, action) => {
      state.imageLoading = false;
      state.imageUrl = action.payload;
    });
    builder.addCase(UploadImage.rejected, (state, action) => {
      state.imageLoading = false;
      state.imageError = action.payload;
      state.isError = true;
    });
  },
});

export const UploadImage = createAsyncThunk(
  "image/uploadImage",
  async (file, { rejectWithValue }) => {
    try {
      const imageUrl = await uploadImage(file);
      return imageUrl;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { setImageUrl } = imageSlice.actions;
export const imageSelector = (state) => state.image;
export default imageSlice.reducer;
