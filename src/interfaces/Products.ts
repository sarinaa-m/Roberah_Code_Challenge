export interface IProductList {
  loading: boolean;
  error: null | string | undefined;
  data: IProductListData;
  search: string;
  budget: number;
  budgetList: IBudgetList[];
}
export interface IBudgetList {
  imgUrl: string;
  title: string;
  price: string;
  id: number;
}

export interface IProductListData {
  products: ProductWithDiscountedPrice[];
  total: number;
  skip: number;
  limit: number;
}
export interface IProduct {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  description: string;
}

export type IProductListDataResponseApi = Omit<IProductListData, "products"> & {
  products: IProduct[];
};

export type ProductWithDiscountedPrice = Omit<
  IProduct,
  "discountPercentage" | "description"
> & {
  discounted_price: number;
  loading: boolean;
};
