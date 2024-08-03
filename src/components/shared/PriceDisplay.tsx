// PriceDisplay.tsx
import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface PriceDisplayProps {
    originalPrice: number;
    discountedPrice: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ originalPrice, discountedPrice }) => {
    return (
        <div>
            <Text delete>${originalPrice.toFixed(2)}</Text>
            <Text strong style={{ marginLeft: 8 }}>${discountedPrice.toFixed(2)}</Text>
        </div>
    );
};

export default PriceDisplay;
