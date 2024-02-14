import { CartItem } from "../types/order/CartItem";
import { convertPrice } from "../common/convertPrice";
import { ProductCell } from "./ProductCell";
import { AiOutlineClose } from "react-icons/ai";
import { theme } from "../theme";
import { useAtom } from "jotai";
import { cartAtom } from "../nav/Navbar";
import { useCallback } from "react";
import { removeFromCart } from "../cart/removeFromCart";

type Props = {
  cartItem: CartItem;
};

export const CheckoutTableRow = ({ cartItem }: Props) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleOnDelete = useCallback(() => {
    removeFromCart({ cart, setCart, flower: cartItem.flower });
  }, [cart, setCart, cartItem.flower]);

  return (
    <tr>
      <td className="py-4">
        <ProductCell flower={cartItem.flower} />
      </td>
      <td className="text-base text-center">{cartItem.quantity}</td>
      <td className="text-base text-center">
        {convertPrice(cartItem.flower.price * cartItem.quantity)}
      </td>
      <td>
        <AiOutlineClose
          className="cursor-pointer"
          onClick={handleOnDelete}
          size={15}
          color={theme.colors.gray[500]}
        />
      </td>
    </tr>
  );
};
