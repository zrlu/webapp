import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer =  (history) => combineReducers({
    login:{},
    router: connectRouter(history),
});

export default rootReducer;