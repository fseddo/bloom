import { CheckoutTable } from "./CheckoutTable";

export const Checkout = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex justify-start flex-col gap-10 w-1/2">
        <div className="text-3xl  font-jost">Delivery Date on Feb 15</div>
        <CheckoutTable />
      </div>
    </div>
  );
};
