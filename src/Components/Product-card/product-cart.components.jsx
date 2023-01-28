import "./product-card.styles.scss";
import Button from "../button/button.component";
// import { CardContext } from "../../context/card.context";
// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;  
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // const {addItemToCart} = useContext(CardContext);

  const addProductToCart = () =>{
      dispatch(addItemToCart(cartItems, product));
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" onClick={addProductToCart} buttonType={"inverted"}>
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
