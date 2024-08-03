import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/ConfigureStore'
import { getProductsData, getSearchData } from '../../redux/selectors/ProductListSelectors'
import { fetchProducts } from '../../redux/actions/ProductListActions'
import ProductCard from '../card/ProductCard'
import { Pagination, Row, Col, Spin, Flex } from 'antd';
import EmptyScreen from '../shared/EmptyScreen'
import SearchBar from '../search/SearchBar'



const Products = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products, total, loading } = useSelector(getProductsData)
  const searchValue = useSelector(getSearchData)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [skipCount, setSkipCount] = useState<number>(1);


  const handleChange = (page: number) => {
    if (page < currentPage) {
      const previousPage = skipCount - (6 * (currentPage - page))
      setSkipCount(previousPage)
      dispatch(fetchProducts({ search: searchValue, limit: 6, skip: previousPage }))
    } else {
      const NextPage = (6 * page) - 6
      setSkipCount(NextPage)
      dispatch(fetchProducts({ search: searchValue, limit: 6, skip: NextPage }))

    }
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchProducts({ search: searchValue, limit: 6, skip: skipCount }))

  }, [skipCount])

  const onSearch = () => {
    setCurrentPage(1)
  }


  return (
    <>
      <SearchBar onSearchItem={onSearch} />
      <div className="card-wrapper" style={{ padding: '20px' }}>
        {loading
          ?
          <Flex className='spin-container' align='center' justify='center'>
            <Spin size='large' />
          </Flex>
          : total > 0 ?
            <>
              <Row gutter={[16, 16]}>
                {products.map((product, index) => (
                  <Col key={index} span={4}>
                    <ProductCard id={product.id} price={product.price} key={product.id} thumbnail={product.thumbnail} title={product.title}
                      discounted_price={product.discounted_price} loading={loading} />
                  </Col>
                ))}
              </Row>
              <Pagination
                current={currentPage}
                pageSize={6}
                total={total}
                onChange={(page) => handleChange(page)}
                showSizeChanger={false}
                className='pagination'
              />
            </>
            :
            <EmptyScreen />

        }

      </div>
    </>

  )
}








export default Products