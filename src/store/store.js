import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApiSlice } from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    [loginApiSlice.reducerPath]: loginApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApiSlice.middleware),
  
})

setupListeners(store.dispatch)