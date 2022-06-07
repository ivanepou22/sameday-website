import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { visitService } from "../../services/visitService";

const initialState = {
  isLoading: false,
  isError: false,
  visits: [],
  visit: {},
  errorMessage: "",
};

export const visitSlice = createSlice({
  name: "visit",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.visits = [];
      state.visit = {};
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createVisit.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createVisit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.visit = action.payload;
      state.visits.push(action.payload);
    });
    builder.addCase(createVisit.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getVisits.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getVisits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.visits = action.payload;
    });
    builder.addCase(getVisits.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getVisit.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getVisit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.visit = action.payload;
    });
    builder.addCase(getVisit.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateVisit.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateVisit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.visit = action.payload;
      state.visits = state.visits.map((visit) => {
        if (visit.id === action.payload.id) {
          return action.payload;
        }
        return visit;
      });
    });
    builder.addCase(updateVisit.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteVisit.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteVisit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.visits = state.visits.filter((visit) => visit.id !== action.payload);
    });
    builder.addCase(deleteVisit.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const createVisit = createAsyncThunk(
  "visit/createVisit",
  async (visit, { rejectWithValue }) => {
    try {
      const res = await visitService.createVisit(visit);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getVisits = createAsyncThunk("visit/getVisits", async (_, { rejectWithValue }) => {
  try {
    const res = await visitService.getVisits();
    return res;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const getVisit = createAsyncThunk("visit/getVisit", async (id, { rejectWithValue }) => {
  try {
    const res = await visitService.getVisit(id);
    return res;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const updateVisit = createAsyncThunk(
  "visit/updateVisit",
  async (visit, { rejectWithValue }) => {
    try {
      const res = await visitService.updateVisit(visit);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteVisit = createAsyncThunk(
  "visit/deleteVisit",
  async (id, { rejectWithValue }) => {
    try {
      const res = await visitService.deleteVisit(id);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const { reset } = visitSlice.actions;
export const visitSelector = (state) => state.visit;
export default visitSlice.reducer;
