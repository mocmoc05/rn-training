/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground
} from 'react-native';

import {
  // Header,
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Home from './Home';
import StackApp from './src/navigation/test/StackApp';
import StackHome from './src/navigation/test/StackHome';
import AppNavigation from './src/navigation/switch';
import FadeImage from './src/views/screens/FadeImage';
import TabApp from './src/navigation/test/Tabs';
import ListUsers from './src/views/screens/ListUsers'

import A from './test/ComponentA';
import {ComponentB, ComponentC} from './test/ComponentB';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PropsComponent} from './test/PropsComponent';
import Chat from './src/views/screens/Chat';

// class App extends React.Component{
//   a = 1;
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//       text: ''
//     }
//     this.changeNumber = this.changeNumber.bind(this)
//     this.onChangeText = this.onChangeText.bind(this)
//   }

//   changeNumber() {
//     this.setState({number: 1000})
//     console.log(this)
//   }

//   onChangeText(text){
//     this.setState({text})
//   }

//   render() {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         {/* <A></A> */}
//         <TextInput 
//           style={{ height: 32, backgroundColor: '#eee', color: '#000' }}
//           value={this.state.text}
//           onChangeText={this.onChangeText}
//           placeholder={'Nhap ten'}
//         />
//         <PropsComponent display={true} style={{backgroundColor: '#efe'}} >
//           <Text>React Native</Text>
//         </PropsComponent>
//         <PropsComponent display={true} style={{ backgroundColor: '#efe' }} >
//           Hoan
//         </PropsComponent>
//         <ImageBackground source={require('./src/assets/img/background_login.png')} style={{ width: 100, height: 300 }}>
//           <Text>Hello</Text>
//         </ImageBackground>
//       </SafeAreaView>
//     );
//   }
// }
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
        {/* <ListUsers/> */}
        {/* <FadeImage/> */}
        {/* <Chat/> */}
        {/* <StackApp/> */}
      </Provider>
    );
  }
}
export default App;
