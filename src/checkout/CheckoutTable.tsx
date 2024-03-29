import { useAtom } from "jotai";
import { cartAtom } from "../nav/Navbar";
import { CheckoutTableRow } from "./CheckoutTableRow";
import { CheckoutTablePriceSection } from "./CheckoutTablePriceSection";

export const CheckoutTable = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <table className="text-lg table-auto font-jost">
      <thead>
        <tr>
          <th className="text-start font-normal">Products</th>
          <th className="text-center font-normal">Quantity</th>
          <th className="text-center font-normal">Price</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="pt-3" colSpan={4}>
            <hr className="border-gray-100" />
          </td>
        </tr>
        {cart != null &&
          cart.map((cartItem) => (
            <CheckoutTableRow cartItem={cartItem} key={cartItem.flower.id} />
          ))}

        {cart != null && <CheckoutTablePriceSection />}
      </tbody>
    </table>
  );
};
