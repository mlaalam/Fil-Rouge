import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProject, getUserProject, storeProject } from "../services/projectApi";
import { MdTitle } from "react-icons/md";


// get my project 
export const getMyProject = createAsyncThunk(
  'projects/getMyProject',
  async(_ ,{ rejectWithValue })=>{
    try{
        const res = await getUserProject();
        return res;
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);
// get all project 
export const  getProject = createAsyncThunk(
  'projects/getProject',
  async( _ , {rejectWithValue}) =>{
    try{
        const res = await getAllProject();
        return res;
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);
// store project 
export const saveProject = createAsyncThunk(
  'projects/saveProject',
  async({title,description,image,category},{rejectWithValue}) =>{
    try{
      const res = await storeProject(title,description,image,category);
      return res
    }catch (err) {
       if (err.response?.data?.errors) {
        return rejectWithValue({ fieldErrors: err.response.data.errors });
      }
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
)


const initialState = {
  loading:false,
  data:[],
  error:null,
  fieldErrors: {},
}
const ProjectSlice = createSlice({
  name:'projects',
  initialState,
  reducers:{},

extraReducers: (builder) => {
    builder
      .addCase(getMyProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMyProject.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMyProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // get All project 
    builder
      .addCase(getProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // create project 
    builder
      .addCase(saveProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveProject.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(saveProject.rejected, (state, action) => {
        state.loading = false;
        state.fieldErrors = action.payload.fieldErrors
      });
  },
})

export default ProjectSlice.reducer;