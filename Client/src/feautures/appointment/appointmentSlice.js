import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appointmentService } from "../../services/appointmentService";

const initialState = {
  appointments: [],
  appointment: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
  page: 0,
  limit: 0,
  totalPages: 0,
  totalResults: 0
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    reset: (state) => {
      state.appointments = [];
      state.appointment = {};
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAppointments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAppointments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointments = action.payload.results;
      state.page = action.payload.page
      state.limit = action.payload.limit
      state.totalPages = action.payload.totalPages
      state.totalResults = action.payload.totalResults
    });
    builder.addCase(fetchAppointments.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    builder.addCase(fetchAppointment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAppointment.fulfilled, (state, action) => {
      state.appointment = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAppointment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    builder.addCase(createAppointment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createAppointment.fulfilled, (state, action) => {
      state.appointments.push(action.payload);
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(createAppointment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateAppointment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateAppointment.fulfilled, (state, action) => {
      state.appointments = state.appointments.map((appointment) => {
        if (appointment._id === action.payload._id) {
          return action.payload;
        }
        return appointment;
      });
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(updateAppointment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteAppointment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteAppointment.fulfilled, (state, action) => {
      state.appointments = state.appointments.filter((appointment) => {
        return appointment._id !== action.payload;
      });
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(deleteAppointment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const fetchAppointments = createAsyncThunk(
  "appointment/fetchAppointments",
  async (payload, { rejectWithValue }) => {
    try {
      const appointments = await appointmentService.getAppointments(payload);
      return appointments;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAppointment = createAsyncThunk(
  "appointment/fetchAppointment",
  async (id, { rejectWithValue }) => {
    try {
      const appointment = await appointmentService.getAppointment(id);
      return appointment;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createAppointment = createAsyncThunk(
  "appointment/createAppointment",
  async (appointment, { rejectWithValue }) => {
    try {
      const newAppointment = await appointmentService.createAppointment(
        appointment
      );
      return newAppointment;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAppointment = createAsyncThunk(
  "appointment/updateAppointment",
  async (appointment, { rejectWithValue }) => {
    try {
      const updatedAppointment = await appointmentService.updateAppointment(
        appointment
      );
      return updatedAppointment;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAppointment = createAsyncThunk(
  "appointment/deleteAppointment",
  async (id, { rejectWithValue }) => {
    try {
      const deletedAppointment = await appointmentService.deleteAppointment(id);
      return deletedAppointment;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { reset } = appointmentSlice.actions;
export const appointmentSelector = (state) => state.appointment;
export default appointmentSlice.reducer;
