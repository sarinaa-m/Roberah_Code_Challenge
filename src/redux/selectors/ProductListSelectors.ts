import { createSelector } from "reselect";
import { RootState } from "../ConfigureStore";

// export const getBreadcrumbList = (state: RootState) => state.app.breadcrumb;
const productSlice = (state: RootState) => state.product;

export const getProductsData = createSelector(
  productSlice,
  (product: RootState["product"]) => ({
    products: product.data.products,
    limit: product.data.limit,
    total: product.data.total,
    loading: product.loading,
  })
);
export const getSearchData = createSelector(
  productSlice,
  (product: RootState["product"]) => product.search
);

export const getBudget = createSelector(
  productSlice,
  (product: RootState["product"]) => product.budget
);
export const getBudgetList = createSelector(
  productSlice,
  (product: RootState["product"]) => product.budgetList
);
