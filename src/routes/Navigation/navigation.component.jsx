import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.jsx";
import { UserContext } from "../../context/user.context";
import { CardContext } from "../../context/card.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.util";
import { CartIcon } from "../../Components/cart-icon/cart-icon.components";
import {CartDropdown} from '../../Components/cart-dropdown/cart-dropdown.components';
import { NavigationContainer , NavLink ,NavLinks , LogoContainer } from "./navigation.styles.jsx";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);  
  const {isCartOpen} = useContext(CardContext);
  const signOutHandler = async () => {
    await signOutAuthUser();
    // setCurrentUser(null);
  };
  return (
    // fragment is used when you don't want div to be placed.
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (

            // as this is span with class name "nav-link" so us 'as'
            <NavLink as={'span'} onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/authenticate">
              Authenticate
            </NavLink>
          )}
          <CartIcon/>
          {isCartOpen && <CartDropdown/>}
        </NavLinks>
      </NavigationContainer> 
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
