import styled from 'styled-components/native';

export const Container = styled.View<{ paddingTop: number; paddingBottom: number }>`
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  align-items: center;
`;

export const Line = styled.View<{ color: string; width: string }>`
  height: 1px;
  width: ${({ width }) => width};
  background-color: ${({ color }) => color};
`;
