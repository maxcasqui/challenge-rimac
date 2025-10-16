import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InsuranceStackParamList } from '../navigation/InsuranceNavigator';
import { Divider, StepIndicator, TopBar } from '../../../shared';
import { IMAGES } from '../../../assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { useInsurance } from '../context/InsuranceContext';

type NavProp = NativeStackNavigationProp<InsuranceStackParamList, 'InsuranceSummary'>;

export const InsuranceSummaryScreen = () => {
  const navigation = useNavigation<NavProp>();
  const insets = useSafeAreaInsets();

  const { userData, selectedPlan } = useInsurance();

  if (!userData || !selectedPlan) return null;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Container insets={insets}>

        <TopBar logo={IMAGES.logoRed} />

        <StepIndicator currentStep={2} totalSteps={2} />

        <Divider color='#A9AFD9' />

        <Title>Resumen del seguro</Title>

        <CardContainer>
          <SectionTitle>PRECIOS CALCULADOS PARA:</SectionTitle>

          <IconRow>
            <IconImage source={IMAGES.usersIcon} />
            <InfoText>
              {userData.name} {userData.lastName}
            </InfoText>
          </IconRow>

          <Divider paddingTop={16} paddingBottom={16} />

          <SectionTitle>Responsable de pago</SectionTitle>
          <InfoRow>
            <InfoLabel>{userData.documentType}:</InfoLabel>
            <InfoText>{userData.documentNumber}</InfoText>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Celular:</InfoLabel>
            <InfoText>{userData.phoneNumber}</InfoText>
          </InfoRow>

          <Divider paddingTop={16} paddingBottom={16} />

          <SectionTitle>Plan elegido</SectionTitle>
          <InfoRow>
            <InfoText>{selectedPlan.name}</InfoText>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Costo del plan:</InfoLabel>
            <InfoText>${selectedPlan.price} al mes</InfoText>
          </InfoRow>
        </CardContainer>


      </Container>
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

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #141938;
  margin-bottom: 24px;
  text-align: center;
`;

const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 16px;
  padding: 24px 32px;
  border-width: 1px;
  border-color: #e0e0e0;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 2;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #141938;
  margin-bottom: 8px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;
`;

const InfoLabel = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #5e6488;
`;

const InfoText = styled.Text`
  font-size: 15px;
  color: #141938;
`;

const IconRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const IconImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

