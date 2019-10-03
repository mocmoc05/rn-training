import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeA from '../../views/screens/HomeA';
import HomeB from '../../views/screens/HomeB';
import HomeC from '../../views/screens/HomeC';
import HomeD from '../../views/screens/HomeD';
import MyModal from '../../views/screens/MyModal';

const StackHome = createStackNavigator({
    HomeA: {screen: HomeA},
    HomeB: {screen: HomeB},
    HomeC: {screen: HomeC},
    HomeD: {screen: HomeD},
    MyModal: {
        screen: MyModal,
        navigationOptions: {
            /**
             * Distance from top to register swipe to dismiss modal gesture. Default (135)
             * https://reactnavigation.org/docs/en/stack-navigator.html#gestureresponsedistance
             */
            gestureResponseDistance: { vertical: 1000 }, // default is 135 },
        },
    }
}, {
        headerMode: 'none',
        mode: 'modal',
        transparentCard: true,
})

export default createAppContainer(StackHome);