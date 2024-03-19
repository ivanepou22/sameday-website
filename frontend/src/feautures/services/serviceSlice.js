import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceService } from "../../services/serviceService";

const initialState = {
  isLoading: false,
  isError: false,
  services: [],
  service: {},
  errorMessage: "",
  page: 0,
  limit: 0,
  totalPages: 0,
  totalResults: 0
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.services = [];
      state.service = {};
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createService.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.service = action.payload;
      state.services.push(action.payload);
    });
    builder.addCase(createService.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getServices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.services = action.payload.results;
      state.page = action.payload.page
      state.limit = action.payload.limit
      state.totalPages = action.payload.totalPages
      state.totalResults = action.payload.totalResults
    });
    builder.addCase(getServices.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getService.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.service = action.payload;
    });
    builder.addCase(getService.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateService.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.service = action.payload;
      state.services = state.services.map((service) => {
        if (service.id === action.payload.id) {
          return action.payload;
        }
        return service;
      });
    });
    builder.addCase(updateService.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteService.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.services = state.services.filter((service) => service.id !== action.payload);
    });
    builder.addCase(deleteService.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const createService = createAsyncThunk(
  "service/createService",
  async (service, { rejectWithValue }) => {
    try {
      const res = await serviceService.createService(service);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getServices = createAsyncThunk(
  "service/getServices",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await serviceService.getServices(payload);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getService = createAsyncThunk(
  "service/getService",
  async (id, { rejectWithValue }) => {
    try {
      const res = await serviceService.getServiceNoAuth(id);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateService = createAsyncThunk(
  "service/updateService",
  async (service, { rejectWithValue }) => {
    try {
      const res = await serviceService.updateService(service);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteService = createAsyncThunk(
  "service/deleteService",
  async (id, { rejectWithValue }) => {
    try {
      const res = await serviceService.deleteService(id);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const { reset } = serviceSlice.actions;
export const serviceSelector = (state) => state.service;
export default serviceSlice.reducer;
