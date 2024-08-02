import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/actions/ProductListActions";
import { AppDispatch } from "./redux/ConfigureStore";
import { getProductsData } from "./redux/selectors/ProductListSelectors";
import ProductCard from "./components/card/ProductCard";

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { limit, products, total, loading } = useSelector(getProductsData)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return products.map((product) => (
    <ProductCard
      price={product.price} key={product.id} thumbnail={product.thumbnail} title={product.title}
      discounted_price={product.discountPercentage}></ProductCard>

  ));
}

export default App;
