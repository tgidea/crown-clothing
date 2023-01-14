import "../checkout/checkout.styles.scss";
import { useContext } from "react";
import { CardContext } from "../../context/card.context";
import CheckoutItem from '../checkout-items/checkout-items.components'

const Checkout = () => {
  const { cartItems , totalCost } =
    useContext(CardContext);
    
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        );
      })}
      <span className="total">Total : {totalCost}</span>
    </div>
  );
};
export default Checkout;
