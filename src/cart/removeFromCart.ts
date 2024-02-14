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

export const removeFromCart = ({ flower, setCart, cart }: Props) => {
  const currentCartItem = cart?.find(
    (cartItem) => cartItem.flower.id === flower.id
  );
  if (cart == undefined) return;
  if (currentCartItem != null) {
    const updatedCart = cart.filter(
      (cartItem) => cartItem.flower.id !== currentCartItem.flower.id
    );
    setCart(updatedCart);
    toast(`${flower.name} has been removed from your cart.`);
  }
};
