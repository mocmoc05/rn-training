import React, { Component } from 'react';
import { View, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import TextApp from '../../component/TextApp';
import LinearGradient from 'react-native-linear-gradient';

export default class Category extends Component {
    state = {  }
    render() {
        console.log(this.props)
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={[style.container, {flex: null}]}>
                    <TextApp style={style.title}>Danh mục</TextApp>
                </View>
                <ScrollView style={style.container} contentContainerStyle={{flex: 1}}>
                    <ImageBackground
                        source={require('../../assets/img/chair.png')}
                        style={style.imageBackground}
                        // imageStyle={{ resizeMode: 'contain' }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#111', '#E0E4E8', '#ffffff99']}
                            style={style.gradient}
                        />
                        <View style={{position: 'absolute', top: 20, left: 20}}>
                            <TextApp style={style.textCate}>Ghế</TextApp>
                            <View style={style.after} />
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/img/tu.png')}
                        style={style.imageBackground}
                        // imageStyle={{ resizeMode: 'contain' }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#111', '#E0E4E8', '#ffffff99']}
                            style={style.gradient}
                        />
                        <View style={{position: 'absolute', top: 20, left: 20}}>
                            <TextApp style={style.textCate}>Tủ đứng</TextApp>
                            <View style={style.after} />
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/img/table.png')}
                        style={style.imageBackground}
                        // imageStyle={{ resizeMode: 'contain' }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#111', '#E0E4E8', '#ffffff99']}
                            style={style.gradient}
                        />
                        <View style={{position: 'absolute', top: 20, left: 20}}>
                            <TextApp style={style.textCate}>Bàn</TextApp>
                            <View style={style.after} />
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/img/lamp.png')}
                        style={style.imageBackground}
                        imageStyle={{ resizeMode: 'contain' }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#111', '#E0E4E8', '#ffffff99']}
                            style={style.gradient}
                        />
                        <View style={{position: 'absolute', top: 20, left: 20}}>
                            <TextApp style={style.textCate}>Đèn</TextApp>
                            <View style={style.after} />
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/img/set.png')}
                        style={style.imageBackground}
                        // imageStyle={{ resizeMode: 'cover' }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#111', '#E0E4E8', '#ffffff99']}
                            style={style.gradient}
                        />
                        <View style={{ position: 'absolute', top: 20, left: 20 }}>
                            <TextApp style={style.textCate}>Set Nội thất</TextApp>
                            <View style={style.after} />
                        </View>
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const style = {
    container: {padding: 16, flex: 1},
    title: { color: '#B79962', fontSize: 24,},
    imageBackground: {
        flex: 1, borderRadius: 5, marginBottom: 8, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 3.84,

        elevation: 5, },
    gradient: { flex: 1, opacity: 0.6, borderRadius: 5, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
    textCate: {fontSize: 18, color: '#111', lineHeight: 27},
    after: { backgroundColor: '#B79962', height: 2, borderRadius: 2, width: 20}
}