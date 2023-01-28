import "../checkout-items/checkout-item.styles.scss";
// import { CardContext } from "../../context/card.context";
// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearItemToCart, removeItemToCart, addItemToCart} from '../../store/cart/cart.action';
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // const { addItemToCart, removeItemToCart, clearItemToCart } =
    // useContext(CardContext);
  const clearItemHandler = () => dispatch(clearItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={removeItemHandler}
        >
          &#10094;
        </div>
        <span className="value">{quantity} </span>
        <div
          className="arrow"
          onClick={addItemHandler}
        >
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <span
        onClick={clearItemHandler}
        className="remove-button"
      >
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;
