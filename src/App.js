import { useEffect } from "react";
import Home from "./routes/home.component";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from './Components/shop-list/shop.components';
import Checkout from "./Components/checkout/checkout.components";
import { onAuthStateChangedListener , createUserDocumentFromAuth } from "./utils/firebase/firebase.util";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(  ()=>{        
    // const unsubscribe = onAuthStateChangedListener( async(user)=>{ 
         onAuthStateChangedListener( async(user)=>{                 
            if(user){
                await createUserDocumentFromAuth(user);                   
            }
            dispatch(setCurrentUser(user));
        })        
        // return unsubscribe;
    //dispatch never changes , so we can pass in dependency if some warning appear
    } , [dispatch]);
    
  return (
    <Routes>      
      <Route path="/" element={<Navigation />}>
        {/* outlet of navigation will display the children */}
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/authenticate" element={<Authentication />}/>
      </Route>
    </Routes>
  );
}

export default App;
