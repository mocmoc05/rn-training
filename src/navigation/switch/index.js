import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthLoading from '../../views/authen/auth-loading/AuthLoading';
import authStack from '../stack/authStack';
import TabHome from '../tab/TabHome';

const AppNavigation = createSwitchNavigator({
    AuthLoading: {
        screen: AuthLoading
    },
    AuthStack: {
        screen: authStack
    },
    HomeNavigation: {
        screen: TabHome
    }
})

export default createAppContainer(AppNavigation);