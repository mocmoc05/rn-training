import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, FlatList, AsyncStorage } from 'react-native';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            token: '',
            users: [],
            number: 0
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleGetUsers = this.handleGetUsers.bind(this)
        console.log('constructor')
    }

    componentDidMount() {
        console.log('did mount')
        // this.handleGetUsers()
    }

    handleLogin(){
        //networking => fetch()
        // Alert.alert('Thong bao', `${this.state.email} ${this.state.password}`)

        const {email, password} = this.state;

        //xu ly voi API fetching: endpoint API(url), data

        const url = 'https://h-chat-backend.herokuapp.com/api/user/login'

        //B1: Tao request
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({email, password})
        })
        .then(response => response.json()) //buoc chuyen du lieu nhan tu server => json
        .then(res => {
            console.log({res})
            if(res.status === 401) {
                alert(res.error.message)
            } else {
                alert(res.message)
                this.setState({token: res.data.token})
                AsyncStorage.setItem('abc', res.data.token) //luu token vao bo nho may
            }
        })
    }

    handleGetUsers() {
        const url = 'https://h-chat-backend.herokuapp.com/api/user/get-users';
        AsyncStorage.getItem('abc').then(token => { //lay token trong bo nho may ra
            fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json',
                    'Authorization': 'Bearer ' + token
                }
                //khong co body
            })
                .then(response => response.json()) //buoc chuyen du lieu nhan tu server => json
                .then(res => {
                    console.log({ res })
                    this.setState({ users: res.data })
                })
        })
        
    }

    render() {
        console.log('render')
        return (
            <SafeAreaView>
                <Text>Hello React Native {this.state.number}</Text>
                <View style={{margin: 20}}>
                    <Text style={{fontSize: 20, marginBottom: 20}}>Login</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        placeholder={'Nhap email'}
                        autoCapitalize={'none'}
                        style={{height: 40, paddingHorizontal: 8, backgroundColor: '#eee', marginBottom: 10, width: '100%'}}
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder={"Nhap mat khau"}
                        style={{ height: 40, paddingHorizontal: 8, backgroundColor: '#eee', width: '100%' }}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={{backgroundColor: 'red', padding: 12, borderRadius: 20, margin: 20}}
                        activeOpacity={0.6}
                        onPress={this.handleLogin}
                    >
                        <Text style={{color: '#fff', textAlign: 'center'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: 'red', padding: 12, borderRadius: 20, margin: 20 }}
                    activeOpacity={0.6}
                    onPress={this.handleGetUsers}
                >
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Get users</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.users}
                    renderItem={({item, index}) => (
                        <Text>{item.email}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                />
            </SafeAreaView>
        )
    }
}