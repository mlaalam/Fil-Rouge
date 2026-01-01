import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategory, saveCategory, updateCategory } from "../services/category";



export const getCategory = createAsyncThunk(
  'categories/getCategory',
  async (_, { rejectWithValue }) => {
    try{
      const res = await getAllCategory();
      return res;
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
    
  }
);
export const storeCategory = createAsyncThunk(
  'categories/storeCategory',
  async({title,icon} , {rejectWithValue})=>{
    try{
        const res = await saveCategory(title , icon);
        return res;
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);
export const editCategory = createAsyncThunk(
  'categories/editCategory',
  async({id ,title,icon} , {rejectWithValue})=>{
    try{
        const res = await updateCategory(id , title , icon);
        return res;
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);

const initialState ={
  loading: false,
  // loadingSav: false,
  data:[],
  error: null,
}

const CategorySlice = createSlice({
  name:'categories',
  initialState,
  reducers:{},

  extraReducers: (builder) =>{
    builder
    .addCase(getCategory.pending , (state)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(getCategory.fulfilled , (state,action)=>{
      state.loading = false;
      state.data = action.payload
    })
    .addCase(getCategory.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.payload;
    })
    // store category
    .addCase(storeCategory.pending,(state)=>{
      state.loading = true;
    })
    .addCase(storeCategory.fulfilled,(state,action)=>{
      state.loading = false;
      state.data.unshift(action.payload);
    })
    .addCase(storeCategory.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
    // Edit category
    .addCase(editCategory.pending,(state)=>{
      state.loading = true;
    })
    .addCase(editCategory.fulfilled,(state,action)=>{
      state.loading = false;
      state.data = action.data.map((c)=>
      c.id === action.payload.id ? action.payload : c
      );
    })
    .addCase(editCategory.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
  }
})

export default CategorySlice.reducer;