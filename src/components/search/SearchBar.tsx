import { Badge, Col, Flex, Input, Popover, Row } from 'antd'
import { debounce } from "lodash";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/ConfigureStore';
import { fetchProducts } from '../../redux/actions/ProductListActions';
import { setSearchValue } from '../../redux/reducers/ProductListSlice';
import { HeartOutlined } from '@ant-design/icons';
import { getBudget } from '../../redux/selectors/ProductListSelectors';
import BudgetList from '../shared/BudgetList';


const { Search } = Input

const SearchBar = ({onSearchItem}:any) => {
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
                        onSearchItem()
                    }}
                    onChange={(e) => {
                        debounceOnSearch(e)
                        onSearchItem()
                    }}
                    
                    allowClear
                    placeholder='Search your product'
                />
            </Col>
            <Col span={8}>
                <Flex justify='flex-end'>
                    <Popover
                        trigger="click"
                        content={<BudgetList />}
                        placement='bottomLeft'
                    >
                        <Badge size='small' count={budget}>
                            <div>
                                <HeartOutlined style={{ cursor: "pointer" }} />
                            </div>
                        </Badge>
                    </Popover>
                </Flex>
            </Col>
        </Row>
    )
}

export default SearchBar