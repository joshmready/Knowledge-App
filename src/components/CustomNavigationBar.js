import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
// import * as React from 'react';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function CustomNavigationBar({ navigation, options, back }) {

    // const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

    return (
        <Appbar.Header>
            {back && (
                <Appbar.BackAction
                    onPress={navigation.goBack}
                    accessibilityLabel="Back"
                />
            ) }
            <Appbar.Content title={options.title} />
            {/* <Appbar.Action icon={MORE_ICON} onPress={navigation.toggleDrawer} /> */}
            <Appbar.Action
                accessibilityLabel="Menu"
                mode="contained"
                onPress={navigation.toggleDrawer}
            />
        </Appbar.Header>
    )
};