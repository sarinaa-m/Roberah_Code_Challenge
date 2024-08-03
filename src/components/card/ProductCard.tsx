import React from 'react'
import "./Card.css";
import { ProductWithDiscountedPrice } from '../../interfaces/Products';
import { Card, Button, Skeleton, Image } from 'antd';
const { Meta } = Card;


const ProductCard: React.FC<ProductWithDiscountedPrice> = ({ title, thumbnail, price, loading, discounted_price }) => {
  return (
    <Card
      hoverable
      loading={loading}
      cover={loading ? <Skeleton /> : <Image alt={title} src={thumbnail} />}
      actions={[<Button block type='primary'>add</Button>]}
    >
      <Meta title={title} description={`${price}  - ${discounted_price}`} />
    </Card>
  );
}
export default ProductCard




