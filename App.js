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
} from 'react-native';

import {
  // Header,
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Home from './Home';
import StackApp from './src/navigation/test/StackApp';
import StackHome from './src/navigation/test/StackHome';
import AppNavigation from './src/navigation/switch'

import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          {/* <StackHome /> */}
          <AppNavigation/>
        </Provider>
      </View>
    );
  }
}

export default App;
