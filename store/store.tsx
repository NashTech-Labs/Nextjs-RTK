import { configureStore } from "@reduxjs/toolkit";
import { photosApi } from "../api/photosData";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [photosApi.reducerPath]: photosApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(photosApi.middleware),
})