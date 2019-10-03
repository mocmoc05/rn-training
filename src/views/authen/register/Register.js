import React, { Component } from 'react';
import { View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styleRegister} from './style';
import { Service } from '../../../service/services';

export default class Register extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
        this.goToLogin = this.goToLogin.bind(this)
        this.register = this.register.bind(this)
    }

    goToLogin() {
        this.props.navigation.goBack()
    }

    async register() {
        const {username, email, password} = this.state;
        let {data, error, message} = await Service.register({username, email, password});
        if (error) {
            alert(message)
        } else {
            Alert.alert('Success', message, [{text: 'OK', onPress: () => this.props.navigation.goBack()}])
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../../../assets/img/background_login.png')}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styleRegister.container}>
                    <Text style={styleRegister.titleLogin}>Register</Text>
                    <View style={styleRegister.form}>
                        <TextInput
                            style={styleRegister.input}
                            placeholder={'Email'}
                            placeholderTextColor={'#F2BB77'}
                            autoCapitalize='none'
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput
                            style={styleRegister.input}
                            placeholder={'Username'}
                            placeholderTextColor={'#F2BB77'}
                            autoCapitalize='none'
                            onChangeText={username => this.setState({ username })}
                        />
                        <TextInput
                            style={styleRegister.input}
                            placeholder={'Password'}
                            placeholderTextColor={'#F2BB77'}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                        />
                        <TextInput
                            style={styleRegister.input}
                            placeholder={'Confirm password'}
                            placeholderTextColor={'#F2BB77'}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                        />
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#F2BB77', '#F25D50']}
                            style={styleRegister.linearGradient}
                        >
                            <TouchableOpacity onPress={this.register}>
                                <Text style={styleRegister.buttonText}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <View flexDirection={'row'} alignItems='center' marginTop={16}>
                            <Text style={styleRegister.textHaveAccount}> Already have an account? </Text>
                            <Text
                                style={[styleRegister.textForgot, { marginTop: 0 }]}
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