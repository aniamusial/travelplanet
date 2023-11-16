import { type PriceProps } from "./types";

export const PriceFormatter = ({
  oldPrice,
  price,
  currencyCode,
}: PriceProps) => {
  return (
    <>
      {oldPrice ? (
        <>
          <span className="line-through">
            {oldPrice} {currencyCode}
          </span>
          <span className="text-green-500">
            {price}
            {currencyCode}
          </span>
        </>
      ) : (
        <span>
          {price} {currencyCode}
        </span>
      )}
    </>
  );
};

export default PriceFormatter;
