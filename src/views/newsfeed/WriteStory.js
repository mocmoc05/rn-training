import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {styles} from './style'
import TextApp from '../../component/TextApp';

export default class WriteStory extends Component {

    state = {  }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatar}></View>
                <TextApp style={{flex: 1}} children={'Bạn đang nghĩ gì?'} />
                <View style={styles.gallery}></View>
            </View>
        )
    }
}