import { createContext  , useEffect , useReducer} from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.util";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    
});
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : "SET_CURRENT_USER" 
}
const userReducer =  (state, action) => {
    const {type , payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser : null
}
export const UserProvider = ({children}) => {
    // const [currentUser , setCurrentUser] = useState(null);    
    // const value = {currentUser,setCurrentUser};  

    const [state , dispatch] = useReducer(userReducer , INITIAL_STATE);
    // whenever dispatch called we pass action object , in order to userReducer to 
    // receive an action , we have to call dispatch and dispatch will take that action
    // and then pass it to switch statement... .
    const {currentUser} = state;

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));        
    }
    const value = { currentUser ,  setCurrentUser};

    useEffect(  ()=>{        
        // const unsubscribe = onAuthStateChangedListener( async(user)=>{ 
             onAuthStateChangedListener( async(user)=>{                 
                if(user){
                    await createUserDocumentFromAuth(user);                   
                }
                setCurrentUser(user);
            } )        
            // return unsubscribe;
        } , []);
    return <UserContext.Provider value ={value}>{children}</UserContext.Provider>;
}                     
