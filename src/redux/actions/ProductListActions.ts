import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductListData } from "../../interfaces/Products";
import DataProvider from "../../api/DataProvider";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, thunkAPI: any) => {
    try {
      const result: IProductListData = await DataProvider.getList(`products`);
      debugger;
      return {
        products: [
          ...result?.products.map((product) => ({
            title: product.title,
            thumbnail: product.thumbnail,
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
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message
      );
    }
  }
);
