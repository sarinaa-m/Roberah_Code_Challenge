import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/actions/ProductListActions";
import { AppDispatch } from "./redux/ConfigureStore";
import { getProductsData } from "./redux/selectors/ProductListSelectors";
import ProductCard from "./components/card/ProductCard";
import Products from "./components/Products/Products";
import SearchBar from "./components/search/SearchBar";

function App() {
  return (<>
    <SearchBar />
    <Products />
  </>)
}

export default App;
