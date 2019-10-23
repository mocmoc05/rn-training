import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';

const StackApp = createStackNavigator({
    A: {screen: ScreenA},
    B: {screen: ScreenB},
    C: {screen: ScreenC}
}, {
    initialRouteName: 'A'
})

export default createAppContainer(StackApp)