/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  CameraRoll
} from 'react-native';

import {
  // Header,
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Home from './Home';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      val: ''
    }
    this.getDevice = this.getDevice.bind(this);
    this.onSend = this.onSend.bind(this);
    this.showName = this.showName.bind(this);
  }

  componentDidMount() {
    this.getDevice()
  }

  getDevice() {
    fetch('https://service.ibeau.vn:3000/users/device', {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ devices: res.devices })
      })
  }

  onSend() {
    //b1: lay ra gia tri ban dau devices va val cua input
    let {devices, val} = this.state;
    //b2: send => set state devices
    devices.unshift({
      name: val
    })
    //b3: hien thi
    // doi voi 1 obj neu key va val tuong duong nhau: {name: name} <=> {name}
    this.setState({devices, val: ''});
  }

  showName(name){
    alert(name);
  }

  render() {
    const arr = [1,2,3,4];
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{backgroundColor: Colors.lighter, flex: 1}}>
            <Home 
              devices={this.state.devices}
              name={'Hoan'}
              showName={this.showName}
            />
            {/* children */}
          </View>
          <View style={{backgroundColor: "#fff", padding: 8, flexDirection: 'row', alignItems: 'center'}}>
              <TextInput 
                style={{padding: 8, backgroundColor:"#ddd", flex: 1, marginHorizontal: 8, borderRadius: 20}}
                placeholder="Nhập tên người dùng"
                value={this.state.val}
                onChangeText={(val) => this.setState({val})}
              />
              <Text onPress={this.onSend}>Send</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    fontStyle: 'italic'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
