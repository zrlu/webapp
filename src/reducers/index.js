import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from '../components/pages/Login/reducer';
import SignupReducer from '../components/pages/Signup/reducer';

const rootReducer =  (history) => combineReducers({
    login:loginReducer,
    signup:SignupReducer,
    router: connectRouter(history),
});

export default rootReducer;