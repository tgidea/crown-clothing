import { createContext , useState , useEffect} from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.util";

export const UserContext = createContext({
    
});

export const UserProvider = ({children}) => {
    const [currentUser , setCurrentUser] = useState(null);    
    const value = {currentUser,setCurrentUser};    
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