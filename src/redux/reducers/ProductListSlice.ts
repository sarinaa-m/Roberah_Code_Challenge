import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/ProductListActions";
import { IProductList, IProductListData } from "../../interfaces/Products";

const initialState: IProductList = {
  loading: true,
  error: null,
  data: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
  search: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProductListData>) => {
          state.data.products = action.payload.products;
          state.data.limit = action.payload.limit;
          state.data.skip = action.payload.skip;
          state.data.total = action.payload.total;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export const { setSearchValue } = productSlice.actions;

export default productSlice.reducer;
