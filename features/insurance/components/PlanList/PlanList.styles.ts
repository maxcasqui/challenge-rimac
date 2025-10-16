import styled from 'styled-components/native';

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 32px;
`;

export const CircleButton = styled.Pressable<{ disabled?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border-width: 1px;
  border-color: #141938;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

export const PaginationText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #141938;
`;
