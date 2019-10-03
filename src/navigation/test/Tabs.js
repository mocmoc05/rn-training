import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Newsfeed from '../../views/newsfeed/Newsfeed';
import Users from '../../views/users/Users';
import Messages from '../../views/messages/Messages';
import Profile from '../../views/profile/Profile';
import Stack from './Stack';

//khoi tao tab: co cac tabs o trong

const TabApp = createBottomTabNavigator({
    Newsfeed: {screen: Stack},
    Users: {screen: Users},
    Messages: {screen: Messages},
    Profile: {screen: Profile}
})

export default createAppContainer(TabApp);