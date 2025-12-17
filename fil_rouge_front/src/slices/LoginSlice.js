import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../services/auth"; // Make sure auth.login exists

export const LoginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await auth.login(email, password);
      if (res?.data?.token) {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("role", res.data.user.role);
      }
      return res.data;
    } catch (err) {
      // Field errors from backend
      if (err.response?.data?.errors) {
        return rejectWithValue({ fieldErrors: err.response.data.errors });
      }
      // General message
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
  fieldErrors: {},
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.userInfo = null;
      state.userToken = null;
      state.fieldErrors = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.fieldErrors = {};
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user || action.payload;
        state.userToken = action.payload.token || null;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || null;
        state.fieldErrors = action.payload?.fieldErrors || {};
      });
  },
});

export const { resetLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
