import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/posts_slice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
