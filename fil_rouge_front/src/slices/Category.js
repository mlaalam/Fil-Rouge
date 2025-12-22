import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategory } from "../services/category";



export const getCategory = createAsyncThunk(
  'category/categories',
  async (_, { rejectWithValue }) => {
    try{
      const res = await getAllCategory();
      return res;
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
    
  }
)

const initialState ={
  loading: false,
  data:[],
  error: null,
}

const CategorySlice = createSlice({
  name:'categories',
  initialState,
  reducers:{},

  extraReducers: (builder) =>{
    builder.addCase(getCategory.pending , (state)=>{
      state.loading = true;
      state.error = null
    });
    builder.addCase(getCategory.fulfilled , (state,action)=>{
      state.loading = false;
      state.data = action.payload
    });
    builder.addCase(getCategory.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.payload;
    })
  }
})

export default CategorySlice.reducer;