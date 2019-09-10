/* Class Component => Stateful component */
import React, {Component} from 'react'; //import thu vien React cua react => yeu cau bat buoc de compile duoc code JSX

import {TextInput, View, Text, FlatList} from 'react-native'; // import component cua React Native

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//     }

//     render(){
//         const {devices, showName, children} = this.props;
//         return (
//             <View style={{flex: 1}}>
//                 <View style={{backgroundColor: '#fff', padding: 8}}>
//                     <Text style={{ color: '#444', fontSize: 18, textAlign: 'center' }}>{this.props.name} detail</Text>
//                 </View>
//                 {children}
//                 <FlatList
//                     data={devices}
//                     renderItem={({item, index}) => {
//                         let name = item.name;
//                         return (
//                             <Text 
//                                 onPress={() => showName(name)}
//                                 style={{ padding: 16, textAlign: index % 2 ? 'right' : 'left', backgroundColor: index % 2 ? '#EDEDED' : '#FDDF9E', margin: 8, borderRadius: 20 }}>
//                                 {name}
//                             </Text>
//                         )
//                     }}
//                     extraData={this.props}
//                     keyExtractor={(item, index) => index.toString()}
//                 />
//             </View>
//         )
//     }
// }

const Home = ({ devices, name, showName }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#fff', padding: 8 }}>
                <Text style={{ color: '#444', fontSize: 18, textAlign: 'center' }}>{name} detail</Text>
            </View>
            <FlatList
                data={devices}
                renderItem={({ item, index }) => {
                    let name = item.name;
                    return (
                        <Text
                            onPress={() => showName(name)}
                            style={{ padding: 16, textAlign: index % 2 ? 'right' : 'left', backgroundColor: index % 2 ? '#EDEDED' : '#FDDF9E', margin: 8, borderRadius: 20 }}>
                            {name}
                        </Text>
                    )
                }}
                extraData={this.props}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}


export default Home;