import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InsuranceNavigator } from '../../features/insurance/navigation/InsuranceNavigator';
import { ReactElement } from 'react';

export type RootStackParamList = {
  Insurance: ReactElement;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Insurance" component={InsuranceNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
