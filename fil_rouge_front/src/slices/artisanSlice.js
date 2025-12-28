import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllArtisan, getOneArtisan } from "../services/artisanApi";



export const getArtisan = createAsyncThunk(
  'artisans/getArtisan',
  async(_ ,{rejectWithValue}) =>{
    try{
      const res = await getAllArtisan();
      return res;
    }catch(err){
        return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);
export const showArtisan = createAsyncThunk(
  'artisans/showArtisan',
  async(id ,{rejectWithValue}) =>{
    try{
      const res = await getOneArtisan(id);
      return res
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);

const initialState = {
  loading: false,
  data:[],
  error: null,
}

const ArtisanSlice = createSlice({
  name:'artisans',
  initialState,
  reducers:{},
  extraReducers:(builder) =>{
    builder.addCase(getArtisan.pending,(state)=>{
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getArtisan.fulfilled,(state,action)=>{
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getArtisan.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    });

    // show artisan 
    builder.addCase(showArtisan.pending,(state)=>{
      state.loading = true;
      state.error = null;
    });
    builder.addCase(showArtisan.fulfilled,(state , action)=>{
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(showArtisan.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default ArtisanSlice.reducer;