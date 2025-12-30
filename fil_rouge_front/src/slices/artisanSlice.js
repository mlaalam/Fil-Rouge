import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { approve, getAllArtisan, getOneArtisan, supprProfile, suspend, updateArtisan } from "../services/artisanApi";



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
// ------------------------
export const editProfile = createAsyncThunk(
  'artisans/editProfile',
  async({id,nom_complet,image,propos,secteur,ville,jours_de_travail,heures_par_jour,role,numero,password},{rejectWithValue})=>{
    try{
      const res = await updateArtisan(id,nom_complet,image,propos,secteur,ville,jours_de_travail,heures_par_jour,role,numero,password);
      return res
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);
// --------------------delete----
export const deleteProfile = createAsyncThunk(
  'artisans/deleteProfile',
  async(id,{rejectWithValue}) =>{
    try{
        await supprProfile(id);
        return id;
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
);
// -----------------approve profile---
export const approveProfil = createAsyncThunk(
  'artisans/approveProfil',
  async(id,{rejectWithValue}) =>{
    try{
        const res = await approve(id);
        return res
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
)
// -----------------suspend profile---
export const suspendProfil = createAsyncThunk(
  'artisans/suspendProfil',
  async(id,{rejectWithValue}) =>{
    try{
        const res = await suspend(id);
        return res
    }catch(err){
      return rejectWithValue({ message: err.response?.data?.message || err.message });
    }
  }
)

const initialState = {
  loading: false,
  successMessage:null,
  data:[],
  profil: {},
  loadingEdit:false,
  fieldErrors: {},
  error: null,
}

const ArtisanSlice = createSlice({
  name:'artisans',
  initialState,
  reducers:{},
  extraReducers:(builder) =>{
    builder
    .addCase(getArtisan.pending,(state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(getArtisan.fulfilled,(state,action)=>{
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(getArtisan.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    })

    // show artisan 
    .addCase(showArtisan.pending,(state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(showArtisan.fulfilled,(state , action)=>{
      state.loading = false;
      state.profil = action.payload;
    })
    .addCase(showArtisan.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
    // update profile
    .addCase(editProfile.pending,(state)=>{
      state.loadingEdit = true
    })
    .addCase(editProfile.fulfilled , (state,action)=>{
      state.loadingEdit = false;
      state.profil = action.payload;
      state.data = state.data.map((artisan) =>
          artisan.id === action.payload.id ? action.payload : artisan
        );
    })
    .addCase(editProfile.rejected , (state,action)=>{
      state.loadingEdit = false;
      state.fieldErrors = action.payload.fieldErrors
    })
    // =========delete user -----
    .addCase(deleteProfile.pending ,(state)=>{
      state.loading = true
    })
    .addCase(deleteProfile.fulfilled,(state , action)=>{
      state.loading = false;
      state.data = state.data.filter((p)=>
        p.id !== action.payload
      );
      state.successMessage = 'Utilisateur supprimé avec succès';
    })
    .addCase(deleteProfile.rejected , (state ,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
    // --------------approve
    .addCase(approveProfil.pending,(state)=>{
      state.loading = true;
    })
    .addCase(approveProfil.fulfilled,(state,action)=>{
      state.loading = false;
      const updated = action.payload;
      state.data = state.data.map((artisan) =>
        artisan.id === updated.id ? { ...artisan, ...updated } : artisan
      );
    })
    .addCase(approveProfil.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
    // --------------suspend
    .addCase(suspendProfil.pending,(state)=>{
      state.loading = true;
    })
    .addCase(suspendProfil.fulfilled,(state,action)=>{
      state.loading = false;
      const updated = action.payload;
      state.data = state.data.map((artisan) =>
        artisan.id === updated.id ? { ...artisan, ...updated } : artisan
      );
    })
    .addCase(suspendProfil.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default ArtisanSlice.reducer;