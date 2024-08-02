import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/ConfigureStore'
import { getProductsData } from '../../redux/selectors/ProductListSelectors'
import { fetchProducts } from '../../redux/actions/ProductListActions'
import ProductCard from '../card/ProductCard'
import { Pagination, Row, Col } from 'antd';


const Products = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products, total, loading } = useSelector(getProductsData)
  const [currentPage, setCurrentPage] = useState(1);
  let [skip, setSkip] = useState(0);

  const handleChange = (page: number) => {
    setCurrentPage(page);
    setSkip(skip += 4)
    dispatch(fetchProducts({ limit: 4, skip }))
  };

  useEffect(() => {
    dispatch(fetchProducts({ limit: 4, skip }))
  }, [])

  return (<div className="card-wrapper" style={{ padding: '20px' }}>
    <Row gutter={[16, 16]}>
      {products.map((product, index) => (
        <Col key={index} span={6}>
          <ProductCard id={product.id} price={product.price} key={product.id} thumbnail={product.thumbnail} title={product.title}
            discounted_price={product.discounted_price} loading={loading} />
        </Col>
      ))}
    </Row>
    <Pagination
      current={currentPage}
      pageSize={4}
      total={total}
      onChange={handleChange}
      style={{ textAlign: 'center', marginTop: '20px' }}
    />
  </div>
  )
}








export default Products