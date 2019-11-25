import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import loginReducer from './loginReducer'
import registrationReducer from './registrationReducer';



export default combineReducers({
    servicesReducer,
    loginReducer,
    registrationReducer
})