import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ordersService } from "../../services/ordersService";

const initialState = {
  orders: [],
  order: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  page: 0,
  limit: 0,
  totalPages: 0,
  totalResults: 0
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    reset: (state) => {
      state.orders = [];
      state.order = {};
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.results;
      state.page = action.payload.page
      state.limit = action.payload.limit
      state.totalPages = action.payload.totalPages
      state.totalResults = action.payload.totalResults
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(createOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders.push(action.payload);
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.order = action.payload;
      state.orders = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          return action.payload;
        }
        return order;
      });
    });
    builder.addCase(updateOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = state.orders.filter((order) => order.id !== action.payload);
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const getOrders = createAsyncThunk("orders/getOrders", async (payload, thunkAPI) => {
  try {
    const orders = await ordersService.getOrders(payload);
    return orders;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createOrder = createAsyncThunk("orders/createOrder", async (order, thunkAPI) => {
  try {
    const newOrder = await ordersService.createOrder(order);
    return newOrder;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateOrder = createAsyncThunk("orders/updateOrder", async (order, thunkAPI) => {
  try {
    const updatedOrder = await ordersService.updateOrder(order);
    return updatedOrder;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteOrder = createAsyncThunk("orders/deleteOrder", async (id, thunkAPI) => {
  try {
    await ordersService.deleteOrder(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getOrder = createAsyncThunk("orders/getOrder", async (id, thunkAPI) => {
  try {
    const order = await ordersService.getOrder(id);
    return order;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const { reset } = ordersSlice.actions;
export const ordersSelector = (state) => state.orders;
export default ordersSlice.reducer;
