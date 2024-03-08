import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <>
      <PaperProvider>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </SafeAreaProvider>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
