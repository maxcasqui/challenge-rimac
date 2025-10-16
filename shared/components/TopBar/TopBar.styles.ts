import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  background-color: transparent;
`;

export const LeftSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const RightSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 6px 0;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 32px;
`;

export const PhoneText = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: #000;
  padding-start: 10px;
`;
