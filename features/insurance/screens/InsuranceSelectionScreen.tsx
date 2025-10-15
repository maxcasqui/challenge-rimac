import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InsuranceStackParamList } from '../navigation/InsuranceNavigator';

type NavProp = NativeStackNavigationProp<InsuranceStackParamList, 'InsuranceSelection'>;

export const InsuranceSelectionScreen = () => {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Insurance Selection Screen</Text>
      <Button title="Go to Summary" onPress={() => navigation.navigate('InsuranceSummary')} />
    </View>
  );
};
