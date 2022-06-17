import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logsService } from "../../services/logsService";

const initialState = {
  logs: [],
  log: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    reset: (state) => {
      state.logs = [];
      state.log = {};
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createLog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createLog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.logs.push(action.payload);
      state.log = action.payload;
    });
    builder.addCase(createLog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(fetchLogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.logs = action.payload.results;
    });
    builder.addCase(fetchLogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(fetchLog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.log = action.payload;
    });
    builder.addCase(fetchLog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateLog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateLog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.log = action.payload;
    });
    builder.addCase(updateLog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteLog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteLog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.log = action.payload;
    });
    builder.addCase(deleteLog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const createLog = createAsyncThunk(
  "logs/createLog",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await logsService.createLog(payload);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLogs = createAsyncThunk(
  "logs/fetchLogs",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await logsService.getLogs();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLog = createAsyncThunk("logs/fetchLog", async (payload, { rejectWithValue }) => {
  try {
    const res = await logsService.getLog(payload);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateLog = createAsyncThunk(
  "logs/updateLog",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await logsService.updateLog(payload);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteLog = createAsyncThunk(
  "logs/deleteLog",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await logsService.deleteLog(payload);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { reset } = logsSlice.actions;
export const logsSelector = (state) => state.logs;
export default logsSlice.reducer;
