import React from 'react'
import "./Card.css";
import { IProduct } from '../../interfaces/Products';


const ProductCard:React.FC<IProduct> = ({title,thumbnail,price}) => {
  return (
    <div className="card">
      {thumbnail ? <img src={thumbnail} alt={title} /> : null}
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{price}</p>
    </div>
  );
}

export default ProductCard




