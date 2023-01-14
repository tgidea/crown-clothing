import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CardContext } from '../../context/card.context';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    const {isCartOpen , setIsCartOpen , cartCount} = useContext(CardContext); 
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}