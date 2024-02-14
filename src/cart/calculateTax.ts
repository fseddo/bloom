import { SALES_TAX } from "../common/constants";

export const calculateTax = (total: number) => total * SALES_TAX;
