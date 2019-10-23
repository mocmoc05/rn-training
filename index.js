/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import StackHome from './src/navigation/test/Stack';
import TabApp from './src/navigation/test/Tabs';
import Demo from './src/views/screens/Demo';
import Users from './test/Users'

// import StackApp from './src/navigation/test/StackApp';
import StackApp from './test/Stack';
// import ScreenA from './test/ScreenA';

AppRegistry.registerComponent(appName, () => StackApp);
