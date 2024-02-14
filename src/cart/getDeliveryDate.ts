import { add, format } from "date-fns";

export const getDeliveryDate = () =>
  format(add(new Date(), { days: 4 }), "MMM do");
