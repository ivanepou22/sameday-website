import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService"

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendPassReset.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sendPassReset.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(sendPassReset.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const sendPassReset = createAsyncThunk(
  "password/sendPassReset",
  async (email, { rejectWithValue }) => {
    try {
      const data = await authService.sendPassReset(email);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { reset } = passwordSlice.actions;
export const passwordSelector = (state) => state.password;
export default passwordSlice.reducer;
