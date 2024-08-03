import React from 'react'
import { ProductWithDiscountedPrice } from '../../interfaces/Products';
import { Card, Button, Skeleton, Image, Typography } from 'antd';
import PriceDisplay from '../shared/PriceDisplay';
const { Meta } = Card;

const { Text } = Typography;
const ProductCard: React.FC<ProductWithDiscountedPrice> = ({ title, thumbnail, price, loading, discounted_price }) => {
  return (
    <Card
      // hoverable
      loading={loading}
      cover={loading ? <Skeleton /> : <Image alt={title} src={thumbnail} />}
      actions={[<Button block type='primary'>add</Button>]}
    >
      <Meta
        title={<div className='card-title'>{title}</div>}
        description={
          <PriceDisplay
            originalPrice={price}
            discountedPrice={discounted_price}
          />}
      />
    </Card>
  );
}
export default ProductCard




