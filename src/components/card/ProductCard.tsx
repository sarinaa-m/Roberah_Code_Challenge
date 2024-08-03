import React, { useEffect, useState } from 'react';
import { ProductWithDiscountedPrice } from '../../interfaces/Products';
import { Card, Button, Skeleton, Image, Typography } from 'antd';
import PriceDisplay from '../shared/PriceDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setBudgetList } from '../../redux/reducers/ProductListSlice';
import { getBudget, getBudgetList } from '../../redux/selectors/ProductListSelectors';

const { Meta } = Card;

const ProductCard: React.FC<ProductWithDiscountedPrice> = ({ id, title, thumbnail, price, loading, discounted_price }
) => {
  const dispatch = useDispatch();
  const budget = useSelector(getBudget);
  const budgetList = useSelector(getBudgetList);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(budgetList.some(item => item.id === id));
  }, [budgetList, id]);

  const handleAdd = () => {
    dispatch(setBudget(budget + 1));
    setIsAdded(true);
    dispatch(setBudgetList([{
      imgUrl: thumbnail,
      title: title,
      price: discounted_price,
      id: id
    }]))
  }

  return (
    <Card
      loading={loading}
      cover={loading ? <Skeleton /> : <Image alt={title} src={thumbnail} />}
      actions={[
        <Button
          onClick={handleAdd}
          block
          type='primary'
          disabled={isAdded}
        >
          {isAdded ? 'Added' : 'Add'}
        </Button>
      ]}
    >
      <Meta
        title={<div className='text-wrapper'>{title}</div>}
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
