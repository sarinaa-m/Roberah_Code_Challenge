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
  budget: 0,
  budgetList: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload;
    },
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
    setBudgetList: (state, action) => {
      state.budgetList = [...state.budgetList, ...action.payload];
    },
    RemoveFromBudgetList: (state, action: PayloadAction<{ id: number }>) => {
      const budgetList = [...state.budgetList];
      const index = budgetList.findIndex((x) => x.id === action.payload.id);
      if (index > -1) {
        budgetList.splice(index, 1);
      }
      state.budgetList = budgetList;
      state.budget = state.budget - 1;
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

export const {
  setSearchValue,
  setBudget,
  setBudgetList,
  RemoveFromBudgetList,
} = productSlice.actions;

export default productSlice.reducer;
