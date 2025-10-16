// src/features/insurance/components/ValidationHeader.tsx
import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface ValidationHeaderProps {
    image: any;
}

export const ValidationHeader = ({ image }: ValidationHeaderProps) => {
    return (
        <Container>
            <Left>
                <GradientBox>
                    <GradientBackground
                        colors={['#00F4E2', '#00FF7F']} // 🔹 cyan → verde fuerte
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Title>Seguro Salud Flexible</Title>
                    </GradientBackground>
                </GradientBox>

                <Subtitle>Creado para ti y tu familia</Subtitle>
            </Left>

            <Right>
                <HeaderImage source={image} resizeMode="contain" />
            </Right>
        </Container>
    );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const Left = styled.View`
  flex: 1.3;
  justify-content: center;
`;

const Right = styled.View`
  flex: 1;
  align-items: center;
`;

const GradientBox = styled.View`
  border-radius: 8px;
  overflow: hidden;
  align-self: flex-start;
`;

const GradientBackground = styled(LinearGradient)`
  padding: 6px 10px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;

const Subtitle = styled.Text`
  font-size: 31px;
  font-weight: 800;
  color: #000;
  margin-top: 6px;
`;

const HeaderImage = styled.Image`
  width: 136px;
  height: 160px;
`;
