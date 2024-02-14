import { Flower } from "../types/flower/Flower";
import { SetStateAction } from "jotai/vanilla";
import { Cart } from "../types/order/Cart";
import { SetAtom } from "../types/SetAtom";
import { toast } from "react-toastify";

type Props = {
  flower: Flower;
  setCart: SetAtom<[SetStateAction<Cart>], void>;
  cart: Cart;
};

export const addToCart = ({ flower, setCart, cart }: Props) => {
  const currentCartItem = cart?.find(
    (cartItem) => cartItem.flower.id === flower.id
  );
  if (cart == undefined) {
    setCart([{ flower, quantity: 1 }]);
    toast(`${flower.name} has been added to your cart!`);
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
    toast(`${flower.name} has been added to your cart!`);
    return;
  }
  setCart([...cart, { flower: flower, quantity: 1 }]);
  toast(`${flower.name} has been added to your cart!`);
};
