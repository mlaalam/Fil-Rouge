import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../services/auth";

export const RegisterUser = createAsyncThunk(
  'auth/register',
  async({nom_complet, email, role, numero, password ,passwordConfirm},{rejectWithValue})=>{
    try{
      const res = await auth.register({
        nom_complet,
        email,
        role,
        numero,
        password,
        password_confirmation: passwordConfirm, 
      });
      if(res?.data?.token){
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("role", res.data.user);
      }
      return res.data;
    }catch (err) {
       if (err.response?.data?.errors) {
        return rejectWithValue({ fieldErrors: err.response.data.errors });
      }
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
)

const initialState ={
  loading: false,
  userInfo:null,
  userToken: null,
  error: null,
  fieldErrors: {},

}
const RegisterSlice = createSlice({
  name:'register',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
      builder.addCase(RegisterUser.pending,(state)=>{
        state.loading = true,
        state.error = null
      });
      builder.addCase(RegisterUser.fulfilled ,(state , action) =>{
        state.loading = false,
        state.userInfo = action.payload.user || action.payload,
        state.userToken = action.payload.token || null;
      });
      builder.addCase(RegisterUser.rejected ,(state , action)=>{
        state.loading = false,
        // state.error = action.payload,
        state.fieldErrors = action.payload.fieldErrors || {};
      })
  }
})

export default RegisterSlice.reducer;