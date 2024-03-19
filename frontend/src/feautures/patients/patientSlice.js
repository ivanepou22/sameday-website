import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { patientService } from "../../services/patientService";

const initialState = {
  patients: [],
  patient: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
  page: 0,
  limit: 0,
  totalPages: 0,
  totalResults: 0
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    reset: (state) => {
      state.patients = [];
      state.patient = {};
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPatient.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createPatient.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patient = action.payload;
      state.patients.push(action.payload);
    });
    builder.addCase(createPatient.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    });

    builder.addCase(getPatients.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPatients.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patients = action.payload.results;
      state.page = action.payload.page
      state.limit = action.payload.limit
      state.totalPages = action.payload.totalPages
      state.totalResults = action.payload.totalResults
    });
    builder.addCase(getPatients.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    });
    builder.addCase(getPatient.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPatient.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patient = action.payload;
    });
    builder.addCase(getPatient.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    });
    builder.addCase(updatePatient.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePatient.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patient = action.payload;
    });
    builder.addCase(updatePatient.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    });
    builder.addCase(deletePatient.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deletePatient.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patient = action.payload;
    });
    builder.addCase(deletePatient.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    });
  },
});

export const createPatient = createAsyncThunk(
  "patient/createPatient",
  async (patient, thunkAPI) => {
    try {
      const data = await patientService.createPatient(patient);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPatients = createAsyncThunk(
  "patient/getPatients",
  async (payload, thunkAPI) => {
    try {
      const data = await patientService.getPatients(payload);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPatient = createAsyncThunk(
  "patient/getPatient",
  async (id, thunkAPI) => {
    try {
      const data = await patientService.getPatient(id);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePatient = createAsyncThunk(
  "patient/updatePatient",
  async (patient, thunkAPI) => {
    try {
      const data = await patientService.updatePatient(patient);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePatient = createAsyncThunk(
  "patient/deletePatient",
  async (id, thunkAPI) => {
    try {
      const data = await patientService.deletePatient(id);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const { reset } = patientSlice.actions;
export const patientSelector = (state) => state.patient
export default patientSlice.reducer;