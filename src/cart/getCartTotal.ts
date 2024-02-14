import { Cart } from "../types/order/Cart";

export const getCartTotal = (cart: Cart) => {
  let total = 0;
  if (cart == undefined) return total;
  return cart.reduce((prev, current) => prev + current.quantity, total);
};
