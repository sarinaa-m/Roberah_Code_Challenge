export interface IProductList {
  loading: boolean;
  error: null | string | undefined;
  data: IProductListData;
}

export interface IProductListData {
  products: ProductWithDiscountedPrice[];
  total: number;
  skip: number;
  limit: number;
}
export type IProductListDataResponseApi = Omit<IProductListData, "products"> & {
  products: IProduct[];
};

export interface IProduct {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  description: string;
}

interface IProductResponseApi {}

export type ProductWithDiscountedPrice = Omit<
  IProduct,
  "discountPercentage" | "description"
> & {
  discounted_price: number;
  loading: boolean;
};
