import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styleForgotPassword } from './style';

export default class ForgotPassword extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {

        }
        this.goToLogin = this.goToLogin.bind(this)
    }

    goToLogin() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <ImageBackground
                source={require('../../../assets/img/background_login.png')}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styleForgotPassword.container}>
                    <Text style={styleForgotPassword.titleLogin}>Forgot password</Text>
                    <View style={styleForgotPassword.form}>
                        <TextInput
                            style={styleForgotPassword.input}
                            placeholder={'Email'}
                        />
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#F2BB77', '#F25D50']}
                            style={styleForgotPassword.linearGradient}
                        >
                            <TouchableOpacity onPress={() => { }}>
                                <Text style={styleForgotPassword.buttonText}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <View flexDirection={'row'} alignItems='center' marginTop={16}>
                            <Text style={styleForgotPassword.textHaveAccount}> Do not have an account?? </Text>
                            <Text
                                style={[styleForgotPassword.textForgot, { marginTop: 0 }]}
                                onPress={this.goToLogin}
                            >
                                Login
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}