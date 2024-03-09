import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';
import CustomNavigationDrawer from './components/CustomNavigationDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './components/CustomNavigationBar';
import { useNavigation } from '@react-navigation/native';

const HelloStack = createNativeStackNavigator();

const Hello = () => (
    <HelloStack.Navigator
        screenOptions={{
            header: props => <CustomNavigationBar {...props} />
        }}
    >
        <HelloStack.Screen
            name="HelloScreen1"
            component={HelloScreen1}
            options={{title: 'Hello screen 1!'}}
            
        />
        <HelloStack.Screen
            name="HelloScreen2"
            component={HelloScreen2}
            options={{title: 'hello screen 2!'}}
            
        />
    </HelloStack.Navigator>
)

function HelloScreen1() {
    const navigation = useNavigation();
    return (
        <>
            <Text>Hello, screen 1!</Text>
            <Button mode="contained" onPress={() => navigation.navigate('HelloScreen2')}>Go to screen 2</Button>
        </>
    )
}

function HelloScreen2() {
    const navigation = useNavigation();
    return (
        <>
            <Text>Hello, screen 2!</Text>
        </>
    )
}

const SecondStack = createNativeStackNavigator();

const Second = () => (
    <SecondStack.Navigator
        screenOptions={{
            header: props => <CustomNavigationBar {...props} />
        }}
    >
        <SecondStack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{title: 'Well hello there!!'}}
        />
        <SecondStack.Screen
            name="ThirdScreen"
            component={ThirdScreen}
            options={{title: 'Hello screen 3!!'}}
        />
    </SecondStack.Navigator>
)

function SecondScreen() {
    return (
        <>
            <Text>Hello, Navigation!</Text>
            <Button mode="contained">Hello, Paper!</Button>
        </>
    )
}

function ThirdScreen() {
    return (
        <>
            <Text>Hello, 3rd Screen!</Text>
        </>
    )
}



// function Second() {
//     return (
//         <>
//             <Text>Hello, Second option!</Text>
//         </>
//     )
// }

const Drawer = createDrawerNavigator();

function NavigationContents() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
        }}
            drawerContent={props => <CustomNavigationDrawer {...props} />}
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