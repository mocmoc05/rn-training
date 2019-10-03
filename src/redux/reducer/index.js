import {combineReducers} from 'redux';

import screenReducer from './screenReducer'
//
import homeReducer from './homeReducer';
import home2Reducer from './home2Reducer';


const rootReducer = combineReducers({
    screenReducer,
    home2Reducer,
    homeReducer
});

export default rootReducer;