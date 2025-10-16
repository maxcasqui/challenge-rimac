import styled from 'styled-components/native';

export const CardContainer = styled.Pressable<{ checked: boolean }>`
  position: relative;
  border-width: ${({ checked }) => (checked ? '3px' : '1px')};
  border-color: ${({ checked }) => (checked ? '#141938' : '#E0E0E0')};
  border-radius: 16px;
  padding: 40px 24px;
  margin-bottom: 16px;
  background-color: #fff;
`;

export const RadioButton = styled.View<{ checked: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: ${({ checked }) => (checked ? '0px' : '2px')};
  border-color: ${({ checked }) => (checked ? 'transparent' : '#C4C4C4')};
  background-color: ${({ checked }) => (checked ? '#389E0D' : '#FFFFFF')};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: flex-start;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const IconImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #141938;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #5e6488;
  margin-top: 4px;
  line-height: 20px;
`;
