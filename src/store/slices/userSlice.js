import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, get_access_token, Register } from "../../services/userService";

export const login_proccess = createAsyncThunk(
  "accounts/login",
  async (user_data) => {
    return login(user_data);
  },
);

export const getting_access_token = createAsyncThunk(
  "accounts/token/refresh",
  async (refresh_token) => {
    return get_access_token(refresh_token);
  },
);

export const register_proccess = createAsyncThunk(
  "accounts/register",
  async (user_data) => {
    return Register(user_data);
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    error: null,
    refresh_token: "",
    access_token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login_proccess.pending, (state) => {
        state.loading = true;
      })
      .addCase(login_proccess.fulfilled, (state, action) => {
        state.loading = false;
        state.refresh_token = action.payload.refresh;
        state.access_token = action.payload.access;
      })
      .addCase(login_proccess.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to login ";
      });
  },
});

const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: {
    loading: false,
    error: null,
    access_token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getting_access_token.pending, (state) => {
        state.loading = true;
      })
      .addCase(getting_access_token.fulfilled, (state, action) => {
        state.loading = false;
        state.access_token = action.payload.access;
      })
      .addCase(getting_access_token.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to refresh access token ";
      });
  },
});

const registerSlice = createSlice({
  name: "register",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register_proccess.pending, (state) => {
        state.loading = true;
      })
      .addCase(register_proccess.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(register_proccess.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to register ";
      });
  },
});

export const accessTokenReducer = accessTokenSlice.reducer;
export const loginReducer = loginSlice.reducer;
export const registerReducer = registerSlice.reducer;
