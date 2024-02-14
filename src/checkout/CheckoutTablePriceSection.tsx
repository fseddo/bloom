import { useMemo } from "react";
import { convertPrice } from "../common/convertPrice";
import { getCartSubtotalPrice } from "../cart/getCartTotalPrice";
import { calculateTax } from "../cart/calculateTax";
import { cartAtom } from "../nav/Navbar";
import { useAtom } from "jotai";
import { SHIPPING_COST } from "../common/constants";

export const CheckoutTablePriceSection = () => {
  const [cart] = useAtom(cartAtom);

  const subTotalPrice = useMemo(
    () => getCartSubtotalPrice(cart),
    [getCartSubtotalPrice, cart]
  );

  const taxPrice = useMemo(
    () => calculateTax(subTotalPrice),
    [subTotalPrice, calculateTax]
  );

  return (
    <>
      <tr>
        <td className="py-3" colSpan={4}>
          <hr className="border-gray-100" />
        </td>
      </tr>
      <tr>
        <td className="text-base" colSpan={2}>
          Shipping
        </td>
        <td className="text-center text-sm">{convertPrice(SHIPPING_COST)}</td>
      </tr>
      <tr>
        <td className="text-base" colSpan={2}>
          Tax
        </td>
        <td className="text-center text-sm">{convertPrice(taxPrice)}</td>
      </tr>
      <tr>
        <td className="text-base font-bold" colSpan={2}>
          Total
        </td>
        <td className="text-center text-sm font-bold">
          {convertPrice(taxPrice + SHIPPING_COST + subTotalPrice)}
        </td>
      </tr>
      <tr>
        <td className="pt-3" colSpan={4}>
          <hr className="border-gray-100" />
        </td>
      </tr>
    </>
  );
};
