import React from 'react';

import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Example from './screens/Example';

const FeedStack = createStackNavigator({
    Feed: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Feed',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

const SearchStack = createStackNavigator({
    Search: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Search',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Discover',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

const MainTabs = createBottomTabNavigator({
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: <Icon name="home" size={18} color="#999" />
        },
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: <Icon name="search" size={18} color="#999" />
        },
    },
    Discover: {
        screen: DiscoverStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: <Icon name="gear" size={18} color="#999" />
        },
    },
});

const SettingsStack = createStackNavigator({
    SettingsList: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Settings List',
        },
    },
    Profile: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Profile',

        },
    },
});

const MainDrawer = createDrawerNavigator({
    MainTabs: {
        screen: MainTabs,
        navigationOptions: {
            drawerLabel: 'Menu',
            drawerIcon: <Icon name="bars" size={18} color="#999" />
        }
    },
    Settings:{
        screen: SettingsStack,
        navigationOptions: {
            drawerLabel: 'Settings',
            drawerIcon: <Icon name="gear" size={18} color="#999" />
        }
    },
});

const AuthStack = createStackNavigator({
    Landing: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Landing',
        },
    },
    SignIn: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Sign In',
        },
    },
    CreateAccount: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Create Account',
        },
    },
    ForgotPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Forgot Password',
        },
    },
    ResetPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Reset Password',
        },
    },
});

const AppModalStack = createStackNavigator(
    {
        App: MainDrawer,
        Promotion: {
            screen: Example,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const App = createSwitchNavigator({
    Loading: {
        screen: Example,
    },
    Auth: {
        screen: AuthStack,
    },
    App: {
        screen: AppModalStack,
    },
});

export default createAppContainer(App);
