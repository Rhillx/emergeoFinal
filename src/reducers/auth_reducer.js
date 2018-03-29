import {SIGN_IN} from '../actions/auth_actions';

const INT_STATE = {
    email: "",
    password: ""
}

export default (state=INT_STATE, action){
    switch(action.type){
        case SIGN_IN: 
            return action.payload;
        default:
            return state
    }
}