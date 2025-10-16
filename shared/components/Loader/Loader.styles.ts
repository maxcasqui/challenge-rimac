import styled from 'styled-components/native';

export const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
`;

export const IndicatorContainer = styled.View`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 8px;
  elevation: 6;
`;

export const LoaderText = styled.Text`
  color: #333;
  margin-top: 12px;
  font-size: 15px;
  font-weight: 500;
`;
