import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigation />
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
