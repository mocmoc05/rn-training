import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, AsyncStorage, Image } from 'react-native';
import { CONST } from '../../config/const';
import { Ultils } from '../../config/ultils';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            listUsers: []
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    async getUsers() {
        let token = await AsyncStorage.getItem(CONST.STORAGE.TOKEN);
        let url = 'https://h-chat-backend.herokuapp.com/api/user/get-users';
        let options = {
            method: 'GET',
            headers: {
                'Accept': 'Application/json',
                'Content-type': 'Application/json',
                'Authorization': 'Bearer ' + token
            },
            // get khong co body
        }
        fetch(url, options)
            .then(response => response.json())
            .then(res => {
                console.log({res})
                this.setState({listUsers: res.data})
            })
            .catch(e => {
                console.log({e})
            })
    }

    render() {
        const {listUsers} = this.state;
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    // scrollEnabled={true}
                    data={listUsers}
                    renderItem={({ item, index }) => (
                        <View style={{flexDirection: 'row', alignItems:"center", borderBottomColor: '#ede', borderBottomWidth: 1, paddingVertical: 8}}>
                            <Image source={require('../../assets/img/avatar.png')} style={{width: Ultils.dimensions.width / 10, height: Ultils.dimensions.width / 10, marginHorizontal: 8}}/>
                            <Text>{item.email}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    ListEmptyComponent={
                        <Text>Khong co du lieu</Text>
                    }
                    ListHeaderComponent={
                        <Text>Users online</Text>
                    }
                />
            </SafeAreaView>
        )
    }
}