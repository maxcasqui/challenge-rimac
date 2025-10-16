import React from 'react';
import { Container, Line } from './Divider.styles';

interface DividerProps {
    color?: string;
    paddingTop?: number;
    paddingBottom?: number;
    width?: string;
}

export const Divider: React.FC<DividerProps> = ({
    color = '#E0E0E0',
    paddingTop = 0,
    paddingBottom = 0,
    width = '100%',
}) => {
    return (
        <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
            <Line color={color} width={width} />
        </Container>
    );
};
