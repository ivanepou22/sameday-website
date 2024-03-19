import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isAuthenticated: !!user,
  user: user ? user : null,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(logoutAdmin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logoutAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    });
    builder.addCase(logoutAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(loginAdmin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const login = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
  try {
    const response = await authService.login(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (payload, thunkAPI) => {
  try {
    const response = await authService.logout();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutAdmin = createAsyncThunk("auth/logoutAdmin", async (payload, thunkAPI) => {
  try {
    const response = await authService.logoutAdmin();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const register = createAsyncThunk("auth/register", async (payload, thunkAPI) => {
  try {
    const response = await authService.register(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginAdmin = createAsyncThunk("auth/loginAdmin", async (payload, thunkAPI) => {
  try {
    const response = await authService.adminLogin(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const { reset } = authSlices.actions;
export const authSelector = (state) => state.auth;
export default authSlices.reducer;
