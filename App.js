// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import useTheme from './src/useTheme';

export default function App() {
  // const theme = useTheme();
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

// export default function App() {
//   // const theme = useTheme();
//   return (
//     <>
//       <PaperProvider>
//         <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           header: (props) => <CustomNavigationBar {...props} />,
//         }}
//         >
//           <HelloStack.Screen name="Home" component={HelloScreen1} />
//           <Stack.Screen name="Home" component={HelloScreen2} />
//         </Stack.Navigator>
//       </PaperProvider>
//     </>
//   );
// }


