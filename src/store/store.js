import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./services/ApiService";
import { LanguageSlice } from "./globalState/LanguageSlice";

export const store = configureStore({
  reducer: {
    language: LanguageSlice.reducer,
    [ApiService.reducerPath]: ApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});
