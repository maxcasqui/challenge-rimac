import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InsuranceStackParamList } from '../navigation/InsuranceNavigator';

type NavProp = NativeStackNavigationProp<InsuranceStackParamList, 'InsuranceSummary'>;

export const InsuranceSummaryScreen = () => {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Insurance Summary Screen</Text>
      <Button title="Back to Validation" onPress={() => navigation.navigate('InsuranceValidation')} />
    </View>
  );
};
