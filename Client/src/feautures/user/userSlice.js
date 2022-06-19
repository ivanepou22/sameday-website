import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
  page: 0,
  limit: 0,
  totalPages: 0,
  totalResults: 0,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.users = [];
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.results;
      state.isLoading = false;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.totalPages = action.payload.totalPages;
      state.totalResults = action.payload.totalResults;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      return await userService.createUser(payload)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const users = await userService.getUsers(payload);
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user, { rejectWithValue }) => {
    try {
      const updatedUser = await userService.updateUser(user);
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id, { rejectWithValue }) => {
  try {
    await userService.deleteUser(id);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const { reset } = userSlice.actions;
export const userSelector = (state) => state.users;
export default userSlice.reducer;
