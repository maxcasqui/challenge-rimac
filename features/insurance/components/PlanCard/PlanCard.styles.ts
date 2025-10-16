import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: 300px;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  margin-right: 16px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 3;
`;

export const HeaderSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftSection = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #141938;
  margin-bottom: 4px;
`;

export const LabelText = styled.Text`
  font-size: 14px;
  color: #5E6488;
`;

export const PriceText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #141938;
  margin-top: 4px;
`;

export const IconImage = styled.Image`
  width: 48px;
  height: 48px;
  margin-left: 12px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #E0E0E0;
  margin-vertical: 16px;
`;

export const DetailsSection = styled.View`
  flex: 1;
  margin-bottom: 24px;
`;

export const DetailRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const DetailText = styled.Text`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  color: #5E6488;
  line-height: 20px;
`;

export const ActionButton = styled.Pressable`
  background-color: #FF1C44;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

export const ActionButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
