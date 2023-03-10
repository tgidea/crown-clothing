import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.jsx";
// import { CardContext } from "../../context/card.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.util";
import { CartIcon } from "../../Components/cart-icon/cart-icon.components";
import {CartDropdown} from '../../Components/cart-dropdown/cart-dropdown.components';
import { NavigationContainer , NavLink ,NavLinks , LogoContainer } from "./navigation.styles.jsx";
import { useSelector } from "react-redux";
import { setCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
const Navigation = () => {
  // const { currentUser } = useContext(UserContext); 
  const currentUser = useSelector( setCurrentUser );

  // const {isCartOpen} = useContext(CardContext);
  const isCartOpen = useSelector(selectIsCartOpen);

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
              {currentUser.displayName}
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
