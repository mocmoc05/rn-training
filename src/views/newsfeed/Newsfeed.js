import React, { Component } from 'react';
import { View, ScrollView, SafeAreaView , TextInput, FlatList} from 'react-native';
import WriteStory from './WriteStory';
import { styles } from './style';
import LinearGradient from 'react-native-linear-gradient';
import TextApp from '../../component/TextApp';
import ItemNewsfeed from './item/ItemNewsfeed';

export default class Newsfeed extends Component {
    static navigationOptions = ({navigation, state}) => {
        return {
            header: () => {
                return (
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2BB77' }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#F2BB77', '#F25D50']}
                            style={styles.linearGradient}
                        >
                            <TextInput
                                style={{ flex: 1, padding: 8, backgroundColor: '#eee', marginVertical: 6, marginHorizontal: 16, borderRadius: 25 }}
                                placeholder={'Tìm kiếm'}
                            />
                            <View style={[styles.gallery, {marginLeft: 4}]}></View>
                        </LinearGradient>
                    </SafeAreaView>
                )
            }
        }
    }

    state = {  }

    render() {
        const {navigation} = this.props;
        const list = new Array(10)
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{backgroundColor: '#EEE', flex: 1}}>
                    <ScrollView style={{ flex: 1 }}>
                        <WriteStory navigation={navigation} />
                        <FlatList
                            data={list}
                            renderItem={({item, index}) => (
                                <ItemNewsfeed />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}