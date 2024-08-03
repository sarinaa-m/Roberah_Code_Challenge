import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/ConfigureStore'
import { getProductsData, getSearchData, getSkipCount } from '../../redux/selectors/ProductListSelectors'
import { fetchProducts } from '../../redux/actions/ProductListActions'
import ProductCard from '../card/ProductCard'
import { Pagination, Row, Col, Spin, Flex } from 'antd';
import EmptyScreen from '../shared/EmptyScreen'
import { setSkipCount } from '../../redux/reducers/ProductListSlice'



const Products = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products, total, loading } = useSelector(getProductsData)
  const searchValue = useSelector(getSearchData)
  const skipCount = useSelector(getSkipCount)
  const [currentPage, setCurrentPage] = useState(1);


  const handleChange = (page: number) => {
    if (page < currentPage) {
      const previousPage = skipCount - (4 * (currentPage - page))
      dispatch(setSkipCount(previousPage))
      dispatch(fetchProducts({ search: searchValue, limit: 4, skip: previousPage }))
    } else {
      const NextPage = (4 * page) - 4
      dispatch(setSkipCount(NextPage))
      dispatch(fetchProducts({ search: searchValue, limit: 4, skip: NextPage }))

    }
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchProducts({ search: searchValue, limit: 4, skip: skipCount }))
  }, [])


  return (<div className="card-wrapper" style={{ padding: '20px' }}>
    {loading
      ?
      <Flex style={{ height: "calc(100vh - 121px)" }} align='center' justify='center'>
        <Spin size='large' />
      </Flex>
      : total > 0 ?
        <>
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
            onChange={(page) => handleChange(page)}
            showSizeChanger={false}
          // style={{ textAlign: 'center', marginTop: '20px' }}
          />
        </>
        :
        <EmptyScreen />

    }

  </div>
  )
}








export default Products