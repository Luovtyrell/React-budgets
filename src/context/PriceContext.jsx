import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const PriceContext = createContext();

export const usePrice = () => useContext(PriceContext);

export const PriceProvider = ({ children }) => {
  const [priceAdjustment, setPriceAdjustment] = useState(0);

  const adjustPrice = (amount) => {
    setPriceAdjustment((prevPrice) => prevPrice + amount);
  };

  return (
    <PriceContext.Provider value={{ priceAdjustment, adjustPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

PriceProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
