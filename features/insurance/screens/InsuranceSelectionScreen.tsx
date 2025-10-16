import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InsuranceStackParamList } from '../navigation/InsuranceNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IMAGES } from '../../../assets';
import { Divider, Loader, PlanList, SelectableCard, StepIndicator, TopBar } from '../../../shared';
import styled from 'styled-components/native';
import { useInsurance } from '../context/InsuranceContext';
import { useEffect, useState } from 'react';
import { useFetchPlans } from '../hooks/useFetchPlans';
import { Plan } from '../types/Plan';

type NavProp = NativeStackNavigationProp<InsuranceStackParamList, 'InsuranceSelection'>;

export const InsuranceSelectionScreen = () => {
  const { userData, setSelectedPlan } = useInsurance();
  const navigation = useNavigation<NavProp>();
  const insets = useSafeAreaInsets();
  const [selectedOption, setSelectedOption] = useState<'me' | 'other' | null>(null);
  const { fetchPlans, plans, loading } = useFetchPlans();

  useEffect(() => {
    if (selectedOption && userData?.age) {
      fetchPlans(userData.age, selectedOption === 'other');
    }
  }, [selectedOption]);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    navigation.navigate('InsuranceSummary');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Container insets={insets}>

        <TopBar logo={IMAGES.logoRed} />

        <StepIndicator currentStep={1} totalSteps={2} />

        <Divider color='#A9AFD9' />

        <HeaderContainer>
          <HeaderTitle>
            {userData?.name
              ? `${userData.name}, ¿Para quién deseas cotizar?`
              : '¿Para quién deseas cotizar?'}
          </HeaderTitle>

          <HeaderSubtitle>
            Selecciona la opción que se ajuste más a tus necesidades.
          </HeaderSubtitle>
        </HeaderContainer>

        <Divider color='transparent' paddingTop={16} />

        <SelectableCard
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          icon={IMAGES.userIcon}
          checked={selectedOption === 'me'}
          onPress={() => setSelectedOption('me')}
        />

        <SelectableCard
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          icon={IMAGES.familyIcon}
          checked={selectedOption === 'other'}
          onPress={() => setSelectedOption('other')}
        />

        <Loader visible={loading} message="Cargando planes..." />

        {/* Lista de planes */}
        {plans.length > 0 && (
          <PlanList plans={plans} onSelectPlan={handleSelectPlan} icons={[IMAGES.homeIcon, IMAGES.hospitalIcon]} />
        )}
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


const HeaderContainer = styled.View`
  margin-top: 32px;
  margin-bottom: 24px;
`;

const HeaderTitle = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #03050f;
`;

const HeaderSubtitle = styled.Text`
  font-size: 16px;
  color: #5e6488;
  margin-top: 8px;
`;