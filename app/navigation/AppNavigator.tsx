import { createStackNavigator } from '@react-navigation/stack';
import { InsuranceNavigator } from '../../features/insurance/navigation/InsuranceNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const AppNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Insurance" component={InsuranceNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
