import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "../../services/contactService";

const initialState = {
  contact: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    reset: (state) => {
      state.contact = {};
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contact = action.payload;
    });
    builder.addCase(createContact.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const createContact = createAsyncThunk(
  "contact/createContact",
  async (data, { rejectWithValue }) => {
    try {
      const res = await contactService.createContact(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const { reset } = contactSlice.actions;
export const contactSelector = (state) => state.contact;
export default contactSlice.reducer;
