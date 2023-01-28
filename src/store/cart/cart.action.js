import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPE } from './cart.types';

const addCartItem = (cartItems, productToAdd) => {
    const existingCardItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCardItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
    return cartItems
        .map((cartItem) =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
};
const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);

export const clearItemToCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const removeItemToCart = (cartItems,cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const addItemToCart = (cartItems,cartItemToAdd) => {
    const newCartItems = addCartItem(cartItems, cartItemToAdd);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};