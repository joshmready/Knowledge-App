import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';

function Hello() {
    return (
        <>
            <Text>Hello, Navigation!</Text>
            <Button mode="contained">Hello, Paper!</Button>
        </>
    )
}

const Drawer = createDrawerNavigator();

function NavigationContents() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Hello" component={Hello} />
        </Drawer.Navigator>
    )
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavigationContents />
        </NavigationContainer>
    )
};