import { createAppContainer } from 'react-navigation'; // import navigation container

import { createStackNavigator } from 'react-navigation-stack'; //import create stack

import App from '../../../App';
import Detail from '../../views/screens/Detail';
import Home from '../../../Home';

// declare screens that need to navigate
const StackHome = createStackNavigator({
    Home: {screen: App},
    Detail: {
        screen: Detail,
        navigationOptions: {
            // header: null
            // gesturesEnabled: true
        }
    }
}, {
    initialRouteName: 'Home'
})

export default createAppContainer(StackHome);
