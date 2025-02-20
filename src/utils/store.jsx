import { configureStore } from '@reduxjs/toolkit';
import appslice from "./appSlice.jsx";
const store = configureStore({
  reducer: {
    app:appslice ,
    
  }
});

export default store; 