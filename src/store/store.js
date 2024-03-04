import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./services/ApiService";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [ApiService.reducerPath]: ApiService.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});
