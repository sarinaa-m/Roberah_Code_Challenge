import React, { useState } from 'react';
import { ProductWithDiscountedPrice } from '../../interfaces/Products';
import { Card, Button, Skeleton, Image, Typography } from 'antd';
import PriceDisplay from '../shared/PriceDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setBudgetList } from '../../redux/reducers/ProductListSlice';
import { getBudget } from '../../redux/selectors/ProductListSelectors';

const { Meta } = Card;
const { Text } = Typography;

const ProductCard: React.FC<ProductWithDiscountedPrice> = ({ id, title, thumbnail, price, loading, discounted_price }) => {
  const dispatch = useDispatch();
  const budget = useSelector(getBudget);
  const [isAdded, setIsAdded] = useState(false); // state to track if item is added to budget
  console.log(id, "id");

  return (
    <Card
      loading={loading}
      cover={loading ? <Skeleton /> : <Image alt={title} src={thumbnail} />}
      actions={[
        <Button
          onClick={() => {
            dispatch(setBudget(budget + 1));
            setIsAdded(true);
            dispatch(setBudgetList([{
              imgUrl: thumbnail,
              title: title,
              price: discounted_price,
              id: id
            }]))
            // disable the button after adding to budget
          }}
          block
          type='primary'
          disabled={isAdded} // disable button if item is already added
        >
          {isAdded ? 'Added' : 'Add'}
        </Button>
      ]}
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
};

export default ProductCard;
