import { AppNavigator } from "./app/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { InsuranceProvider } from "./features/insurance/context/InsuranceContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <InsuranceProvider>
        <AppNavigator />
      </InsuranceProvider>
    </SafeAreaProvider>
  );
}
