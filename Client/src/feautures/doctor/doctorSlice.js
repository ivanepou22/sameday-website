import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doctorService } from "../../services/doctorService";

const initialState = {
  doctors: [],
  doctor: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    reset: (state) => {
      state.doctors = [];
      state.doctor = {};
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createDoctor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createDoctor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
      state.doctors.push(action.payload);
    });
    builder.addCase(createDoctor.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getDoctor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDoctor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    });
    builder.addCase(getDoctor.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getDoctors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDoctors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctors = action.payload.results;
    });
    builder.addCase(getDoctors.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateDoctor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateDoctor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    });
    builder.addCase(updateDoctor.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteDoctor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteDoctor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    });
    builder.addCase(deleteDoctor.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const createDoctor = createAsyncThunk(
  "doctors/createDoctor",
  async (payload, { rejectWithValue }) => {
    try {
      return doctorService.createDoctor(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDoctor = createAsyncThunk(
  "doctors/getDoctor",
  async (payload, { rejectWithValue }) => {
    try {
      return doctorService.getDoctor(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDoctors = createAsyncThunk(
  "doctors/getDoctors",
  async (payload, { rejectWithValue }) => {
    try {
      return doctorService.getDoctors();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateDoctor = createAsyncThunk(
  "doctors/updateDoctor",
  async (payload, { rejectWithValue }) => {
    try {
      return doctorService.updateDoctor(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDoctor = createAsyncThunk(
  "doctors/deleteDoctor",
  async (payload, { rejectWithValue }) => {
    try {
      return doctorService.deleteDoctor(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { reset } = doctorSlice.actions;
export const doctorSelector = (state) => state.doctors;

export default doctorSlice.reducer;
