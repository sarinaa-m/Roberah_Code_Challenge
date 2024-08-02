import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IProductListData,
  IProductListDataResponseApi,
} from "../../interfaces/Products";
import DataProvider from "../../api/DataProvider";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (
    payload: { limit: number; skip: number; search: string },
    thunkAPI: any
  ) => {
    try {
      const result: IProductListDataResponseApi = await DataProvider.getList(
        `products/search?q=${payload.search}&limit=${payload.limit}&skip=${payload.skip}`
      );

      return {
        products: [
          ...result?.products.map((product) => ({
            title: product.title,
            thumbnail: product.thumbnail,
            description: product.description,
            price: product.price,
            discounted_price: +(
              product.price *
              (1 - product.discountPercentage / 100)
            ).toFixed(2),
          })),
        ],
        total: result.total,
        skip: result.skip,
        limit: result.limit,
      };
      debugger;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message
      );
    }
  }
);
