import { Cart } from "../types/order/Cart";

export const getCartSubtotalPrice = (cart: Cart) => {
  let total = 0;
  if (cart == undefined) return total;
  return cart.reduce(
    (prev, current) => prev + current.flower.price * current.quantity,
    total
  );
};
