import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../../views/authen/login/Login';
import Register from '../../views/authen/register/Register';
import ForgotPassword from '../../views/authen/forgot-password/ForgotPassword';

const stackAuth = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    ForgotPassword: {
        screen: ForgotPassword
    }
})

export default createAppContainer(stackAuth);