import React from 'react';
import { ScrollView } from 'react-native';
import { ValidationHeader } from '../components/InsuranceValidationHeader';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IMAGES } from '../../../assets';
import { InsuranceValidationForm } from '../components/InsuranceValidationForm';
import { TopBar, Divider, Footer } from '../../../shared';

export const InsuranceValidationScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Container insets={insets}>
        <TopBar logo={IMAGES.logoRed} />
        <ValidationHeader image={IMAGES.family} />
        <Divider color="#BDBDBD" paddingTop={24} paddingBottom={24} />

        <Description>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.
        </Description>

        <InsuranceValidationForm />
      </Container>

      <Footer />
    </ScrollView>
  );
};

/* Styled Components */

const Container = styled.View<{ insets: any }>`
  flex: 1;
  padding-top: ${({ insets }) => insets.top}px;
  padding-bottom: ${({ insets }) => insets.bottom}px;
  padding-horizontal: 24px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 16px;
  font-weight: 600;
`;
