import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InsuranceValidationScreen } from '../screens/InsuranceValidationScreen';
import { InsuranceSelectionScreen } from '../screens/InsuranceSelectionScreen';
import { InsuranceSummaryScreen } from '../screens/InsuranceSummaryScreen';
import { ReactElement } from 'react';

export type InsuranceStackParamList = {
  InsuranceValidation: ReactElement;
  InsuranceSelection: ReactElement;
  InsuranceSummary: ReactElement;
};

const Stack = createNativeStackNavigator<InsuranceStackParamList>();

export const InsuranceNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="InsuranceValidation" component={InsuranceValidationScreen} />
    <Stack.Screen name="InsuranceSelection" component={InsuranceSelectionScreen} />
    <Stack.Screen name="InsuranceSummary" component={InsuranceSummaryScreen} />
  </Stack.Navigator>
);
