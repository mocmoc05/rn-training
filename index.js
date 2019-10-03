/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import StackHome from './src/navigation/test/Stack';
import TabApp from './src/navigation/test/Tabs';
import Demo from './src/views/screens/Demo';

import StackApp from './src/navigation/test/StackApp';

AppRegistry.registerComponent(appName, () => App);
