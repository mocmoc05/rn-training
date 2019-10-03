import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { styleAuthLoading } from './style';
import { CONST } from '../../../config/const';

export default class AuthLoading extends Component {
    state = {}

    componentDidMount() {
        this.checkAuth()
    }

    async checkAuth() {
        const token = await AsyncStorage.getItem(CONST.STORAGE.TOKEN);
        console.log({token})
        this.timeout = setTimeout(() => {
            if(!token) {
                this.props.navigation.navigate('AuthStack')
            } else {
                this.props.navigation.navigate('HomeNavigation')
            }
        }, 500)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        return (
            <View style={styleAuthLoading.container}>
                <ActivityIndicator animating={true} color={'#F25D50'} size={'small'}/>
            </View>
        )
    }
}