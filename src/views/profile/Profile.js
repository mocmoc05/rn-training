import React, { Component } from 'react';
import { View, TouchableOpacity, SafeAreaView, Button, AsyncStorage, Image } from 'react-native';
import TextApp from '../../component/TextApp';
import {CONST} from '../../config/const';
import LinearGradient from 'react-native-linear-gradient';
import { Ultils } from '../../config/ultils';

export default class Profile extends Component {
    state = {}

    componentDidMount() {
        
    }

    logout() {
        AsyncStorage.removeItem(CONST.STORAGE.TOKEN, () => {
            this.props.navigation.navigate('AuthStack')
        })
    }

    render() {
        return (
            <SafeAreaView style={{justifyContent: 'space-between', flex: 1}}>
                <View style={{alignItems: 'center'}}>
                    <TextApp style={{ textAlign: 'center' }}>Trang cá nhân</TextApp>
                    <Image source={require('../../assets/img/avatar.png')} style={{width: Ultils.dimensions.width / 4, height: Ultils.dimensions.width / 4}}/>
                    <TextApp style={{fontSize: 18, fontWeight: '400', marginVertical: 12,}}>Vu Minh Hoan</TextApp>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['#F2BB77', '#F25D50']}
                        style={styles.buttonEdit}
                    >
                        <TouchableOpacity style={{}}>
                            <TextApp style={{ color: '#fff', textAlign: 'center' }}>Chỉnh sửa trang cá nhân</TextApp>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <Button title={'Log out'} onPress={this.logout.bind(this)}/>
            </SafeAreaView>
        )
    }
}

const styles = {
    buttonEdit: {padding: 8, borderRadius: 20, marginHorizontal: 16}
}