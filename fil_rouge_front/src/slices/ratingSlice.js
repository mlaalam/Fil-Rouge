import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRating, saveRating } from "../services/artisanApi";


export const  getRatings = createAsyncThunk(
  'ratings/getRatings',
  async(id , {rejectWithValue})=>{
    try{
      const res = await getRating(id);
      return res;
    }catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

export const storeRatin = createAsyncThunk(
  'ratings/storeRating',
  async({id,rating , comment} ,{rejectWithValue})=>{
    try{
    const res = await saveRating(id,rating,comment);
    return res;
    }catch (err) {
        return rejectWithValue(err.response?.data);
      }
  }
)



const initialState = {
  ratings:[],
  average:0,
  loading:false,
  loadingRat:false,
  error:null
}

const RatingSlice = createSlice({
  name:'ratings',
  initialState,
  reducers:{},

  extraReducers:(builder)=>{
    builder
      .addCase(getRatings.pending , (state)=>{
        state.loading = true;
        state.error = null
      })
      .addCase(getRatings.fulfilled , (state,action)=>{
        state.loading = false;
        state.ratings = action.payload.ratings
        state.average = action.payload.average
      })
      .addCase(getRatings.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload
      })
      // save ratings
      .addCase(storeRatin.pending , (state)=>{
        state.loadingRat = true;
        state.error = null
      })
      .addCase(storeRatin.fulfilled , (state,action)=>{
        state.loadingRat = false;
        state.ratings.unshift(action.payload.rating);
        state.average = action.payload.average
      })
      .addCase(storeRatin.rejected , (state,action)=>{
        state.loadingRat = false;
        state.error = action.payload
      })
  }
});

export default RatingSlice.reducer