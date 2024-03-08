import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';
import CustomNavigationDrawer from './components/CustomNavigationDrawer';

function Hello() {
    return (
        <>
            <Text>Hello, Navigation!</Text>
            <Button mode="contained">Hello, Paper!</Button>
        </>
    )
}

function Second() {
    return (
        <>
            <Text>Hello, Second option!</Text>
        </>
    )
}

const Drawer = createDrawerNavigator();

function NavigationContents() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: true,
        }}
        drawerContent = {props => <CustomNavigationDrawer {...props} />}
        >
            <Drawer.Screen name="Hello" component={Hello} />
            <Drawer.Screen name="Second" component={Second} />
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