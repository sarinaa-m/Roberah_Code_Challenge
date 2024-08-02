import { createSelector } from "reselect";
import { RootState } from "../ConfigureStore";

// export const getBreadcrumbList = (state: RootState) => state.app.breadcrumb;
const productSlice = (state: RootState) => state.product;

export const getProductsData = createSelector(
  productSlice,
  (app: RootState["product"]) => ({
    products: app.data.products,
    limit: app.data.limit,
    total: app.data.total,
    loading: app.loading,
  })
);
