import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Newsfeed } from '../../views/newsfeed';
import { Group } from '../../views/group';
import { Messages } from '../../views/messages';
import { Users } from '../../views/users';
import { Profile } from '../../views/profile';
import homeStack from '../stack/homeStack';
import Category from '../../views/category';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabHome = createAppContainer(createBottomTabNavigator({
    Newsfeed: {
        screen: homeStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={'newspaper'} light size={18} color={tintColor} />
        }
    },
    Group: {
        screen: Group,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={'layer-group'} light size={18} color={tintColor} />
        }
    },
    Category: {
        screen: Category,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={'shopping-cart'} light size={18} color={tintColor} />
        }
    },
    Messages: {
        screen: Messages,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={'comments'} solid size={18} color={tintColor} />
        }
    },
    Users: {
        screen: Users,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={'users'} solid size={18} color={tintColor} />
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={'user'} solid size={18} color={tintColor} />
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
}))

export default class Home extends React.Component{
    constructor(){
        super();
        this.socket = 'hello'
    }
    render() {
        return <TabHome screenProps={this.socket} />
    }
}