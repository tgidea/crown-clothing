import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
// import { useContext } from 'react';
// import { CardContext } from '../../context/card.context';
import { useSelector , useDispatch} from 'react-redux';
import {selectIsCartOpen, cartItemCount} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    // const {isCartOpen , setIsCartOpen , cartCount} = useContext(CardContext); 
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(cartItemCount);
    const dispatch = useDispatch();
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}