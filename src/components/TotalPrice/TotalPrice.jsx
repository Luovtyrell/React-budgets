import { useState } from "react";
import ServiceListContext from "../../context/ServiceListContext";
import serviceList from "../../data/budgetData.json";
import Card from "../Card/Card";

const TotalPrice = () => {
  const productIds = [1, 2, 3];
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleSelectionChange = (productId, isSelected) => {
    setSelectedProducts({
      ...selectedProducts,
      [productId]: isSelected,
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    Object.keys(selectedProducts).forEach((productId) => {
      if (selectedProducts[productId]) {
        const product = serviceList.find(
          (product) => product.id === parseInt(productId)
        );
        if (product) {
          totalPrice += product.price;
        }
      }
    });

    return totalPrice;
  };

  return (
    <ServiceListContext.Provider value={serviceList}>
      {productIds.map((productId) => (
        <div key={productId}>
          <Card id={productId} onSelectionChange={handleSelectionChange} />
        </div>
      ))}
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <h3>Preu pressuposat: {calculateTotalPrice()} €</h3>
      </div>
    </ServiceListContext.Provider>
  );
};

export default TotalPrice;
