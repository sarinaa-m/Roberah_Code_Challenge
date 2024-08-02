export interface IProductList {
  loading: boolean;
  error: null | string | undefined;
  data: IProductListData;
}
export interface IProductListData {
  products: Array<{
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    discountPercentage: number;
  }>;
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  title: string;
  thumbnail: string;
  price: number;
  discounted_price: number;
}


