import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styleLogin } from './style';
import { Service } from '../../../service/services';
import { CONST } from '../../../config/const';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false
        }
        this.goToRegister = this.goToRegister.bind(this)
        this.goToForgotPassword = this.goToForgotPassword.bind(this)
        this.login = this.login.bind(this)
    }

    goToRegister() {
        this.props.navigation.navigate('Register')
    }

    goToForgotPassword() {
        this.props.navigation.navigate('ForgotPassword')
    }

    // async login() {
    //     this.setState({loading: true})
    //     const {email, password} = this.state;
    //     let {data, error, message} = await Service.login({email, password});
    //     if(error) {
    //         alert(message)
    //     } else {
    //         console.log(data.token)
    //         AsyncStorage.setItem(CONST.STORAGE.TOKEN, data.token)
    //         this.props.navigation.navigate('HomeNavigation')
    //     }
    //     this.setState({loading: false})
    // }

    login() {
        //để đẩy dữ liệu, nhận dữ liệu lên server bằng api thì dùng hàm: fetch() => Promise
        let url = "https://h-chat-backend.herokuapp.com/api/user/login"
        let options = {
            method: 'POST',
            headers: {
                Accept: 'Application/json',
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }
        
        fetch(url, options)
            .then(response => response.json())
            .then(res => {
                //data response
                console.log({res});
                AsyncStorage.setItem(CONST.STORAGE.TOKEN, res.data.token)
                this.props.navigation.navigate('HomeNavigation')
            })
            .catch(e => {
                
            })
    }


    render() {
        return (
            <ImageBackground
                source={require('../../../assets/img/background_login.png')}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styleLogin.container}>
                    <Text style={styleLogin.titleLogin}>Login</Text>
                    <View style={styleLogin.form}>
                        <TextInput
                            style={styleLogin.input}
                            placeholder={'Email'}
                            placeholderTextColor={'#F2BB77'}
                            onChangeText={email => this.setState({email})}
                            autoCapitalize={'none'}
                        />
                        <TextInput
                            style={styleLogin.input}
                            placeholder={'Password'}
                            placeholderTextColor={'#F2BB77'}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({password})}
                        />
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#F2BB77', '#F25D50']}
                            style={styleLogin.linearGradient}
                        >
                            <TouchableOpacity onPress={this.login}>
                                {
                                    this.state.loading ?
                                        <View style={{padding: 8}}>
                                            <ActivityIndicator animating={this.state.loading} color={'#fff'} size={'small'} />
                                        </View>
                                        :
                                        <Text style={styleLogin.buttonText}>
                                            Login
                                        </Text>
                                }
                            </TouchableOpacity>
                        </LinearGradient>
                        <Text style={styleLogin.textForgot} onPress={this.goToForgotPassword}>Forgot password?</Text>
                        <View flexDirection={'row'} alignItems='center' marginTop={16}>
                            <Text style={styleLogin.textHaveAccount}> Do not have an account?? </Text>
                            <Text 
                                style={[styleLogin.textForgot, { marginTop: 0 }]}
                                onPress={this.goToRegister}
                            >
                                Registration
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}