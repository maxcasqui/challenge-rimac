import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  background-color: #03050f;
  align-items: center;
  justify-content: center;
  padding-vertical: 24px;
`;

export const FooterLogo = styled.Image`
  width: 138px;
  height: 20px;
  margin-bottom: 12px;
`;

export const DividerLine = styled.View`
  width: 80%;
  height: 1px;
  background-color: #ffffff33; /* un gris suave sobre el fondo oscuro */
  margin-vertical: 12px;
`;

export const FooterText = styled.Text`
  color: #fff;
  font-size: 13px;
  opacity: 0.8;
`;
