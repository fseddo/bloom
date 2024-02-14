export const convertPrice = (price: number | undefined) => {
  let priceString = "";
  if (price == null) priceString = "-";
  else {
    const roundedPrice = Math.ceil(price);
    const dollars = roundedPrice.toString().slice(0, -2);
    const cents = roundedPrice.toString().slice(-2);
    priceString = `$${dollars}.${cents}`;
  }
  return priceString;
};
