import React, { Component } from 'react';
import { 
    View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput, FlatList,
    Animated, Dimensions, Keyboard, UIManager, TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import FadeImage from './FadeImage';

const { State: TextInputState } = TextInput;

/**Component ButtonOptions: change button when input is focus */
const ButtonOptions = ({ isFocus, length, openSticker, openGalery, style, styleSend }) => {
    if (isFocus && length > 0) return (
        <Animated.View style={styleSend}>
            <Icon light name={'paper-plane'} size={24} color={'#000'} style={{ marginHorizontal: 8 }} onPress={() => alert(11)} />
        </Animated.View>
    )
    return (
        <React.Fragment>
            <Animated.View style={style}>
                <Icon name={'smile-wink'} size={24} color={'#000'} onPress={openSticker}/>
            </Animated.View>
            <Animated.View style={[{ marginHorizontal: 8 }, style]}>
                <Icon name={'image'} size={24} color={'#000'} onPress={openGalery}/>
            </Animated.View>
        </React.Fragment>
    )
}

/**Component Typing: shown when input typing */
const Typing = ({isTyping}) => {
    if(isTyping) return (
        <Image
            style={{ width: 100, height: 50, backgroundColor: '#ddd'}}
            resizeMode={'contain'}
            source={{ uri: 'https://cdn.dribbble.com/users/97383/screenshots/2055128/loading-white-d.gif'}}
        />
    )
    return null
}

/**Component Chat */

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shift: new Animated.Value(0),
            isGalery: false,
            isFocus: false,
            keyboardHeight: 0,
            text: '',
            opacity: new Animated.Value(0),
            opacitySend: new Animated.Value(0),
            currentlyFocusedField: 0,
            isTyping: false
        }
        console.disableYellowBox = true
    }
    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardWillShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardWillHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField() === null ? this.state.currentlyFocusedField : TextInputState.currentlyFocusedField();
        
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight) - 14;
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 0,
                    useNativeDriver: true,
                }
            ).start();
        });
        this.setState({ keyboardHeight, currentlyFocusedField })
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }
        ).start();
    }

    openGalery = () => {
        const {isGalery, keyboardHeight} = this.state;
        console.log({ keyboardHeight }, this.keyboardDidShowSub);
        this.setState({isGalery: !isGalery}, () => {
            Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow)
            Keyboard.dismiss()
        })
    }

    openSticker = () => {
        
    }

    setInput = text => {
        if(text.length === 0) {
            this.setState({ opacitySend: new Animated.Value(0), text, isTyping: true})
        } else {
            this.setState({ text, isTyping: true })
            Animated.timing(this.state.opacitySend, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start()
        }
    }

    onSelectionChange = event => {
        console.log(event.nativeEvent)
    }

    onEndEditing = () => {
        console.log('end submitting')
        this.timeoutEndEditing = setTimeout(() => {
            this.setState({isTyping: false})
        }, 2000)
    }

    onFocus = (event) => {
        this.setState({ isGalery: false, isFocus: true }, () => {
            this.keyboardDidShowSub = Keyboard.addListener('keyboardWillShow', this.handleKeyboardDidShow);
            this.keyboardDidHideSub = Keyboard.addListener('keyboardWillHide', this.handleKeyboardDidHide);
        })
    }

    onBlur = (event) => {
        console.log('on blur')
        if(this.state.text.length > 0) {
            this.setState({ isFocus: true })
        } else {
            this.setState({ isFocus: false })
        }
    }

    render() {
        const arr = new Array(100);
        const {shift, isFocus} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={[{flex: 1}, styles.header]}>
                        <Image source={require("../../assets/img/avatar.png")} style={{ width: 40, height: 40, borderRadius: 20 }} />
                        <View>
                            <Text style={styles.name}>Vũ Minh Hoàn</Text>
                            <Text style={styles.active}>Hoạt động cách đây 30 phút</Text>
                        </View>
                    </View>
                    <View style={[styles.header, {}]}>
                        <TouchableOpacity>
                            <Icon name={"video"} size={20} light style={{ padding: 8 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 8 }}>
                            <Icon name={"info-circle"} size={20} light style={{ padding: 8 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps='always'
                    keyboardDismissMode='on-drag'
                >
                    <FlatList
                        data={[]}
                        renderItem={() => (
                            <Text> Hello {Math.random()}</Text>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
                    />
                </ScrollView>
                <View style={{ backgroundColor: '#fff', padding: 8 }}>
                    <View>
                        <Typing isTyping={this.state.isTyping} />
                    </View>
                    <Animated.View style={[
                        {
                            opacity: this.state.opacity,
                            transform: [{
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.85, 1]
                                })
                            }]
                        },{
                        transform: [{ 
                            translateY: shift
                        }]},
                        styles.footer]
                    }>
                        <LinearGradient
                            start={{ x: -1, y: 0.9 }}
                            end={{ x: 0, y: 0.1 }}
                            colors={['#faf8d0', '#ffff99', '#f9a471']}
                            style={{ width: 36, height: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 18, marginLeft: 8 }}
                        >
                            <Icon name={'camera-retro'} size={20} color={'#fff'} />
                        </LinearGradient>
                        <TextInput
                            style={[styles.input]}
                            placeholder={"Nhắn tin..."}
                            textAlignVertical={'top'}
                            multiline={true}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            value={this.state.text}
                            onChangeText={this.setInput}
                            onSelectionChange={this.onSelectionChange}
                            onEndEditing={this.onEndEditing}
                        />
                        {/* <Animated.View onPress={this.openSticker} style={{
                            opacity: this.state.opacity,
                            transform: [{
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.6, 1]
                                })
                            }]
                        }}>
                            <Icon name={'smile-wink'} size={24} color={'#000'} />
                        </Animated.View>
                        <TouchableOpacity style={{ marginHorizontal: 8 }} onPress={this.openGalery}>
                            <Icon name={'image'} size={24} color={'#000'} />
                        </TouchableOpacity> */}
                        <ButtonOptions
                            isFocus={this.state.isFocus}
                            length={this.state.text.length}
                            openGalery={this.openGalery}
                            openSticker={this.openSticker}
                            style={{
                                opacity: this.state.opacity,
                                transform: [{
                                    scale: this.state.opacity.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.6, 1]
                                    })
                                }]
                            }}
                            styleSend={{
                                opacity: this.state.opacitySend,
                                transform: [{
                                    scale: this.state.opacitySend.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.6, 1]
                                    })
                                }]
                            }}
                        />
                    </Animated.View>
                    {
                        this.state.isGalery? 
                        <View style={{ height: this.state.keyboardHeight }}>
                            <FadeImage/>
                        </View>
                        :
                        null
                    }
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: {flexDirection: 'row', alignItems: 'center', padding: 8, backgroundColor: '#eee'},
    name: {fontWeight: '500', fontSize: 15},
    active: {color: '#999', fontSize: 12},
    footer: { flexDirection: 'row', alignItems: 'center', borderColor: '#888', borderWidth: 1, padding: 4, backgroundColor: '#fff', borderRadius: 30 },
    input: { flex: 1, padding: 4}
})