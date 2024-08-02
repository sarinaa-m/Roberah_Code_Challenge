import { Col, Input, Row } from 'antd'
import React from 'react'
import { debounce } from "lodash";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/ConfigureStore';
import { fetchProducts } from '../../redux/actions/ProductListActions';
import { setSearchValue } from '../../redux/reducers/ProductListSlice';
const { Search } = Input

const SearchBar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const debounceOnSearch = debounce((e: any) => {
        dispatch(setSearchValue(e.target.value))
        dispatch(fetchProducts({ search: e.target.value, limit: 4, skip: 0 }))
    }, 500)
    return (
        <Row>
            <Col span={24} style={{ borderBottom: '1px solid black', padding: '24px' }}>
                <Search
                    onSearch={(e) => {
                        debounceOnSearch(e)
                    }}
                    onChange={(e) => {
                        debounceOnSearch(e)
                    }}
                />
            </Col>

        </Row>
    )
}

export default SearchBar