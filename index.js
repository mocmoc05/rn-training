/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import StackHome from './src/navigation/Stack'

AppRegistry.registerComponent(appName, () => StackHome);
