import { Pressable } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled(Pressable)<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#A0A0A0' : '#03050F')};
  padding-vertical: 16px;
  border-radius: 36px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const ButtonLabel = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;
