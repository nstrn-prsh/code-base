// @ts-nocheck //fix: 
import { configureStore } from "@reduxjs/toolkit";
import { planetApi } from "./services/planet";
import { applicantSlice } from "./slices/applicant";

export const store = configureStore({
   reducer: {
      // Add Slice Reducers to the Store
      applicant: applicantSlice,
      // Add the generated reducer as a specific top-level slice
      [planetApi.reducerPath]: planetApi.reducer,
   },
   // Adding the api middleware enables caching, invalidation, polling,
   // and other useful features of `rtk-query`.
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         planetApi.middleware,
      ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
