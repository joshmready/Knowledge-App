import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from 'react-native-paper';

// const ICON_FOR_ROUTE = {
//     Available: 'clock-outline',
//     Tomorrow: 'weather-night',
//     Future: 'calendar-blank',
//     Completed: 'checkbox-marked',
//     Deleted: 'delete',
//     Categories: 'tag',
// };

// const IS_WEB = platform.OS === 'web';

export default function CustomNavigationDrawer({ theme, ...navProps }) {
    const { state, navigation } = navProps;

    const isActive = index => index === state.index;

    return (
        <DrawerContentScrollView {...navProps}>
            {state.routes.map((route, index) => (
                <Drawer.Item
                    key={route.key}
                    label={route.name}
                    accessibilityLabel={route.name}
                    active={isActive(index)}
                    onPress={() => navigation.navigate(route.name)}
                />
            ))}
        </DrawerContentScrollView>
    );
}
