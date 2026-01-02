import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../slices/RegisterSlice'
import loginReducer from '../slices/LoginSlice'
import categoryReducer from '../slices/Category';
import artisanReducer from '../slices/artisanSlice';
import projectReducer from '../slices/projectSlice';
import ratingReducer from '../slices/ratingSlice';

const store = configureStore({
  reducer:{
    register:registerReducer,
    login:loginReducer,
    categories:categoryReducer,
    artisans:artisanReducer,
    projects:projectReducer,
    ratings:ratingReducer,
  }
})

export default store;