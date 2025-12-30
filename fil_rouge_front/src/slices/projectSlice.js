import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProject, finProject, getAllProject, getUserProject, storeProject, updateProject } from "../services/projectApi";
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
export const editProject = createAsyncThunk(
  "projects/editProject",
  async ({ id, title, description, image, category }, { rejectWithValue }) => {
    try {
      return await updateProject(id, title, description, image, category);
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
export const doneProject = createAsyncThunk(
  'projects/doneProject',
  async(id,{rejectWithValue}) =>{
    try{
      const res = await finProject(id);
      return res
    }catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
)

export const supprProject = createAsyncThunk(
  'projects/supprProject',
  async(id,{rejectWithValue})=>{
    try{
      await deleteProject(id);
      return id;
    }catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
)

const initialState = {
  loading:false,
  loadingSave:false,
  data:[],
  error:null,
  loadingDone:false,
  loadingDel:false,
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
      })
    // get All project 
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
      })
    // create project 
    
      .addCase(saveProject.pending, (state) => {
        state.loadingSave = true;
        state.error = null;
      })
      .addCase(saveProject.fulfilled, (state, action) => {
        state.loadingSave = false;
        state.data.unshift(action.payload);
      })
      .addCase(saveProject.rejected, (state, action) => {
        state.loadingSave = false;
        state.fieldErrors = action.payload.fieldErrors
      })
    // update project 
    .addCase(editProject.pending, (state) => {
        state.loadingSave = true;
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.loadingSave = false;
        state.data = state.data.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      })
      .addCase(editProject.rejected, (state) => {
        state.loadingDone = false;
      })
      // project done
      .addCase(doneProject.pending, (state) => {
        state.loadingDone = true;
      })
      .addCase(doneProject.fulfilled, (state, action) => {
        state.loadingDone = false;
        state.data = state.data.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      })
      .addCase(doneProject.rejected, (state) => {
        state.loadingDone = false;
      })
      // project delete
      .addCase(supprProject.pending, (state) => {
        state.loadingDel = true;
      })
      .addCase(supprProject.fulfilled, (state, action) => {
        state.loadingDel = false;
        state.data = state.data.filter((p)=>p.id !== action.payload)
      })
      .addCase(supprProject.rejected, (state) => {
        state.loadingDel = false;
      });
  },
})

export default ProjectSlice.reducer;