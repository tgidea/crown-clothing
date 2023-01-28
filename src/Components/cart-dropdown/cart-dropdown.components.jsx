import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
// import { CardContext } from '../../context/card.context';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

export const CartDropdown = () => {

    // const {cartItems}  = useContext(CardContext);
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const goToCheckoutHandler = () =>{
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>                
                {cartItems.length>0?cartItems.map( (item)=> (
                    <CartItem key={item.id} cartItem={item}/>
                )) :<span>Your cart is Empty.</span>}
            </div>
            <Button onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
        </div>
    )
}
