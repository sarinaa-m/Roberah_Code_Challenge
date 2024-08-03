import { Badge, Col, Flex, Input, Popover, Row } from 'antd'
import { debounce } from "lodash";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/ConfigureStore';
import { fetchProducts } from '../../redux/actions/ProductListActions';
import { setSearchValue } from '../../redux/reducers/ProductListSlice';
import { HeartTwoTone } from '@ant-design/icons';
import { getBudget } from '../../redux/selectors/ProductListSelectors';
import BudgetList from '../shared/budgetList';

const { Search } = Input

const SearchBar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const budget = useSelector(getBudget)
    const debounceOnSearch = debounce((e: any) => {
        const searchValue = typeof e === "string" ? e : e.target.value;
        dispatch(setSearchValue(searchValue))
        dispatch(fetchProducts({ search: searchValue, limit: 4, skip: 0 }))
    }, 500)
    return (
        <Row className='searchBar-wrapper'>
            <Col span={16}  >
                <Search
                    onSearch={(e) => {
                        debounceOnSearch(e)
                    }}
                    onChange={(e) => {
                        debounceOnSearch(e)
                    }}
                    allowClear
                    placeholder='Search your product'
                />
            </Col>
            <Col span={8}>
                <Flex justify='flex-end'>
                    <Popover
                        trigger="click"
                        content={<BudgetList />} //list of majors
                        placement='bottomLeft'
                    >
                        <Badge count={budget}>
                            <HeartTwoTone />
                        </Badge>
                    </Popover>
                </Flex>
            </Col>
        </Row>
    )
}

export default SearchBar