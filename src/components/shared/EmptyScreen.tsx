import { Flex, Result } from 'antd'
import React from 'react'
import { FrownTwoTone } from '@ant-design/icons';
const EmptyScreen = () => {
    return (
        <Flex style={{height:"calc(100vh - 121px)"}} align='center' justify='center'>
            <Result
                icon={<FrownTwoTone />}
                title="No Data Found!"
                className='empty-wrapper'
            />
        </Flex>

    )
}

export default EmptyScreen