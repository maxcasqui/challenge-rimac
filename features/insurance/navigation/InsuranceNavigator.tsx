import { InsuranceValidationScreen } from '../screens/InsuranceValidationScreen';
import { InsuranceSelectionScreen } from '../screens/InsuranceSelectionScreen';
import { InsuranceSummaryScreen } from '../screens/InsuranceSummaryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const InsuranceNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator>
        <Stack.Screen name="InsuranceValidation" component={InsuranceValidationScreen} />
        <Stack.Screen name="InsuranceSelection" component={InsuranceSelectionScreen} />
        <Stack.Screen name="InsuranceSummary" component={InsuranceSummaryScreen} />
    </Stack.Navigator>
    );
};
