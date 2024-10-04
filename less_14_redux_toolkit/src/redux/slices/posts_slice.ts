import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPostState } from "../../interfaces/IPostState";
import { IAction } from "../../interfaces/IAction";

const initialState: IPostState = {
  posts: [],
  status: "",
  error: "",
};

export const getAllPosts: any = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      if (!response.ok) {
        throw Error("Server error");
      }
      const data = await response.json();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state: IPostState, action: IAction) => {
        state.status = "loading";
      })
      .addCase(getAllPosts.rejected, (state: IPostState, action: IAction) => {
        state.error = "error";
        state.status = action.payload;
      })
      .addCase(getAllPosts.fulfilled, (state: IPostState, action: IAction) => {
        state.posts = action.payload;
        state.status = "done";
      });
  },
});
export default postsSlice.reducer;
