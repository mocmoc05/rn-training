import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenA from '../../views/screens/ScreenA';
import ScreenB from '../../views/screens/ScreenB';
import ScreenC from '../../views/screens/ScreenC';
import ScreenD from '../../views/screens/ScreenD';

const StackApp = createStackNavigator({
    ScreenA: { screen: ScreenA },
    ScreenB: { screen: ScreenB },
    ScreenC: { screen: ScreenC },
    ScreenD: { screen: ScreenD }
}, {
    initialRouteName: "ScreenA"
});

export default createAppContainer(StackApp);