import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';

// export default class PropsComponent extends Component {
//     state = {  }
//     render() {
//         console.log(this)
//         return (
//             <SafeAreaView>
//                 <TouchableOpacity
//                     disabled={this.props.onChangeNumber ? false : true}
//                     onPress={() => this.props.onChangeNumber()}
//                     style={{flexDirection: 'row', alignItems: 'center', borderBottomColor: '#333', borderBottomWidth: 1}}>
//                     <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}} style={{width: 50, height: 50}} resizeMode={'contain'}/>
//                     {this.props.display && <Text>{this.props.name}</Text>}
//                     <Text> {this.props.number}</Text>
//                 </TouchableOpacity>
//             </SafeAreaView>
//         )
//     }
// }

export function PropsComponent(props) {
    return(
        <SafeAreaView style={{flex: 1}}>
            {/* <View style={{ height: 60, backgroundColor: '#ddd' }}></View>
            <View style={{ flex: 1, backgroundColor: '#000' }}></View>
            <View style={{ height: 20, backgroundColor: '#444' }}></View> */}
            <TouchableOpacity
                disabled={props.onChangeNumber ? false : true}
                onPress={() => props.onChangeNumber()}
                style={[{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#333', backgroundColor: 'red', borderBottomWidth: 1 }, props.style]}>
                <Image 
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} 
                    style={{ width: 50, height: 50 }} 
                    resizeMode={'contain'} 
                />
                <Image
                    source={ require('../src/assets/img/avatar.png') }
                    style={{ width: 50, height: 50 }}
                    resizeMode={'contain'}
                />
                <Text>{props.name}</Text>
                <Text> {props.number}</Text>
                <Text>{props.children}</Text>
            </TouchableOpacity>
            {/* <Button title={'Click'}/> */}
        </SafeAreaView>
    )
}