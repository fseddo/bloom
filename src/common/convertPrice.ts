export const convertPrice = (price: number | undefined) => {
  let priceString = "";
  if (price == null) priceString = "-";
  else {
    const dollars = price.toString().slice(0, -2);
    const cents = price.toString().slice(-2);
    priceString = `$${dollars}.${cents}`;
  }
  return priceString;
};
