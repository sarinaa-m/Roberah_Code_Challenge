import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBudgetList } from '../../redux/selectors/ProductListSelectors'
import { Avatar, List } from 'antd'
import DeleteButton from './DeleteButton'
import { RemoveFromBudgetList } from '../../redux/reducers/ProductListSlice'

const BudgetList = () => {
    const dispatch = useDispatch()
    const budgetList = useSelector(getBudgetList)

    const onDeleteBudgetItem = (id: number) => {
        dispatch(RemoveFromBudgetList({ id }))
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={budgetList}
            renderItem={(item: any, index) => (
                <List.Item
                    actions={
                        [<DeleteButton
                            item={item.id}
                            onDeleteConfirm={() => {
                                onDeleteBudgetItem(item.id);
                            }}
                        />]}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.imgUrl} />}
                        title={<div className='text-wrapper'>{item.title}</div>}
                        description={`$${item.price}`}
                    />
                </List.Item>
            )}
        />

    )
}

export default BudgetList