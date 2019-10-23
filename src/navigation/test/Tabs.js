import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Newsfeed from '../../views/newsfeed/Newsfeed';
import Users from '../../views/users/Users';
import Messages from '../../views/messages/Messages';
import Profile from '../../views/profile/Profile';
import Stack from './Stack';
import BottomTab from './BottomTab';
import Icon from 'react-native-vector-icons/FontAwesome5'

//khoi tao tab: co cac tabs o trong

const TabApp = createBottomTabNavigator({
    Newsfeed: {
        screen: Stack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="newspaper" color={tintColor} />
        }
    },
    Users: {
        screen: Users,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="newspaper" color={tintColor} />
        }
    },
    Messages: {
        screen: Messages,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="newspaper" color={tintColor} />
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="newspaper" color={tintColor} />
        }
    }
}, {
        tabBarComponent: BottomTab,
        tabBarOptions: {
            activeTintColor: "#4F4F4F",
            inactiveTintColor: "#ddd"
        }
})

export default createAppContainer(TabApp);