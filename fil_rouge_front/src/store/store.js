import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../slices/RegisterSlice'
import loginReduser from '../slices/LoginSlice'
const store = configureStore({
  reducer:{
    register:registerReducer,
    login:loginReduser
  }
})

export default store;