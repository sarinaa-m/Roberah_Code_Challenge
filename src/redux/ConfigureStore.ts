import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductListSlice";

export const store = configureStore({
  reducer: { product: ProductReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
