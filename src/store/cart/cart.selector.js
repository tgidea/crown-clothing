// import { CART_ACTION_TYPE } from "./cart.types";
import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

//receiving cartItems and  memoize 
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

//receiving isCartOpen 
export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const cartItemCount = createSelector(
    [selectCartReducer],
    (cart) => {        
        return cart.cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0)
    }
);
export const cartItemsCost = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
    )
);
