import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../slices/RegisterSlice'
import loginReduser from '../slices/LoginSlice'
import categoryReduser from '../slices/Category';
const store = configureStore({
  reducer:{
    register:registerReducer,
    login:loginReduser,
    categories:categoryReduser
  }
})

export default store;