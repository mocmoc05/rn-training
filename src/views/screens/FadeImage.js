import React, { Component } from 'react';
import { View, Text, Animated, SafeAreaView, Image, CameraRoll, FlatList, ScrollView, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window')

class ImageLoad extends Component{
    state = {
        opacity: new Animated.Value(0)
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    render() {
        return (
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[{
                    opacity: this.state.opacity,
                    transform: [{
                        scale: this.state.opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.85, 1]
                        })
                    }]
                }, this.props.style]}
            />
        )
    }
}
export const ImageAnimation = ImageLoad;

export default class FadeImage extends Component {
    state = { 
        photos: [],
        opacity: new Animated.Value(0)
     }
    componentDidMount() {
        this.getPhotos();
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }
    getPhotos = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'All',
            groupTypes: 'All',
        })
            .then(r => {
                // console.log({r})
                this.setState({ photos: r.edges })
            })
    }
    render() {
        // console.log(this.state.photos)
        return (
            <SafeAreaView style={{flex: 1}}>
                <Animated.View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center',
                    opacity: this.state.opacity,
                    transform: [{
                        scale: this.state.opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.85, 1]
                        })
                    }]
                }}>
                    {/* <Text>Fade Image</Text>
                    <ImageLoad
                        source={{ uri: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }}
                        style={{ width: 100, height: 200 }}
                        resizeMode={'contain'}
                    /> */}
                    <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
                        <FlatList
                            data={this.state.photos}
                            renderItem={({ item, index }) => (
                                <Image
                                    key={index}
                                    source={{ uri: item.node.image.uri }}
                                    style={{ width: width/4, height: width/4, borderWidth: 0.5, borderColor: '#fff'}}
                                    // resizeMode={'contain'}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state}
                            numColumns={4}
                        />
                    </ScrollView>
                </Animated.View>
            </SafeAreaView>
        )
    }
}