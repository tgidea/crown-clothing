import "../checkout-items/checkout-item.styles.scss";
import { CardContext } from "../../context/card.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CardContext);

  const clearItemHandler = () => clearItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
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
