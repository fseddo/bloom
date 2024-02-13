import { Flower } from "../types/flower/Flower";
import { SetStateAction } from "jotai/vanilla";
import { Cart } from "../types/order/Cart";

export type SetAtom<Args extends any[], Result> = (...args: Args) => Result;

export const addToCart = ({
  flower,
  setCart,
  cart,
}: {
  flower: Flower;
  setCart: SetAtom<[SetStateAction<Cart>], void>;
  cart: Cart;
}) => {
  const currentCartItem = cart?.find(
    (cartItem) => cartItem.flower.id === flower.id
  );
  if (cart == undefined) {
    setCart([{ flower, quantity: 1 }]);
    return;
  }
  if (currentCartItem != null) {
    const updatedCart = cart?.map((cartItem) => {
      if (cartItem.flower.id === currentCartItem.flower.id) {
        return { ...cartItem, quantity: (cartItem.quantity += 1) };
      }
      return cartItem;
    });
    setCart(updatedCart);
    return;
  }
  setCart([...cart, { flower: flower, quantity: 1 }]);
};
