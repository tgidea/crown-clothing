import {USER_ACTION_TYPES} from './user.types';

const INITIAL_STATE = {
    currentUser : null
}
// as we not using useReducer hook so we have to define initial state
// similarly in context reducer dispatch function just dispatch action to associated reducer funciton only
// but in redux every single reducer recieve every single action
export const userReducer =  (state = INITIAL_STATE, action) => {
    const {type , payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        // so as every single reducer recieve action , if it not matched to any switch case
        // that means , action is not for this, so simply return the state
        // and object not changed so the re-rendering
        default:
            return state;
    }
}
