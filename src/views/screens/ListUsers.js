import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TextInput, Button, Image, Keyboard, Animated, Dimensions, UIManager, Alert } from 'react-native';
import {SafeAreaView} from 'react-navigation';

const { State: TextInputState } = TextInput;

export default class ListUsers extends Component {
    state = { 
        listUsers: [],
        total: 0,
        page: 1,
        shift: new Animated.Value(0),
        user: {}
    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    async componentDidMount() {
        this.getListUser()
    }



    async getListUser() {
        const { page } = this.state;
        const response = await fetch(`https://service.ibeau.vn:3000/api/get-list-users?page=${parseInt(page)}&size=10`, {
            method: 'get',
            headers: {
                'Accept': 'Application/json',
                'Content-type': 'Application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2VydmljZS5pYmVhdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU3MTEyOTAzOSwiZXhwIjoxNTcxOTkzMDM5LCJuYmYiOjE1NzExMjkwMzksImp0aSI6IjF4djlheWUxYW9oT0x4SzAiLCJzdWIiOjU3MywicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.JkX_q2bW4zrGPhOCpYQr6U63SOE7Sw6jZTjqP7Wcs_U'
            }
        });
        const data = await response.json();
        console.log({ data })
        this.setState({ listUsers: data.data, page: data.next_page !== null ? data.next_page : this.state.page, total: data.total_page })
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 20,
                    useNativeDriver: true,
                }
            ).start();
        });
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 20,
                useNativeDriver: true,
            }
        ).start();
    }

    async deleteToken(user, token){
        
    }

    async checkToken(token){
        try {
            let url = `https://iid.googleapis.com/iid/info/${token}?details=true`;
            const response = await fetch(url, {
                method: 'get',
                headers: {
                    "Authorization": "key=AIzaSyB9GFBrRPJwqnoZgcgCvFRntM_V3fDnfmw",
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            })
            const res = await response.json();
            const { applicationVersion, connectDate, platform, error } = res;
            if(error) {
                Alert.alert(
                    'Thông báo',
                    `${error}`
                )
            } else {
                Alert.alert(
                    'Thông báo',
                    `Version App: ${applicationVersion}\nConnect Date: ${connectDate}\nPlatform: ${platform}`
                )
            }
            console.log({ res })
            return { applicationVersion, connectDate, platform, error }
            
        } catch (error) {
            console.log({error})
        }
    }

    render() {
        const { shift } = this.state;
        return (
            <SafeAreaView  style={{flex: 1}}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <FlatList
                        data={this.state.listUsers}
                        renderItem={({ item, index }) => (
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#666', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, marginLeft: 8}}>
                                <Image source={{ uri: 'https://ibeau.s3.ap-southeast-1.amazonaws.com/' + item.avatar}} style={{width: 50, height: 50, borderRadius: 25}}/>
                                <Text onPress={()=>this.setState({user: item})} style={styles.name}>{item.first_name && item.last_name ? item.first_name +' '+ item.last_name  : item.user_name }</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={
                            <Animated.View style={{ marginTop: 16, transform: [{ translateY: shift }]}}>
                                <TextInput
                                    value={this.state.page}
                                    onChangeText={(page) => this.setState({page})}
                                    style={{flex: 1, backgroundColor: '#ddd', padding: 12}}
                                    placeholder={'Nhap vao so trang'}
                                    keyboardType={'numeric'}
                                />
                                <Button title="Get Users" onPress={() => this.getListUser()}/>
                                <Text>Total page: {this.state.total}</Text>
                            </Animated.View>
                        }
                    />
                </ScrollView>
                <View style={{marginTop: 12, flex: 1, borderTopWidth: 1, borderTopColor: '#111'}}>
                    <FlatList
                        data={this.state.user.token_device}
                        renderItem={({ item, index }) => (
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#666', flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}>
                                <Text numberOfLines={1} style={styles.token}>{item}</Text>
                                <Button title="Delete" onPress={this.deleteToken.bind(this, this.state.user, item)}/>
                                <Button title="Check" onPress={this.checkToken.bind(this, item)}/>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={
                            <Text>List tokens of user: {this.state.user.user_name} - {this.state.user.token_device?.length}</Text>
                        }
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const styles = {
    name: {fontSize: 20, fontWeight: 'bold', paddingHorizontal: 8},
    token: {flex: 1, fontWeight: '500', paddingVertical: 16, paddingHorizontal: 8},
}