import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Newsfeed } from '../../views/newsfeed';

const HomeStack = createStackNavigator({
    Home: {screen: Newsfeed}
})

export default createAppContainer(HomeStack)