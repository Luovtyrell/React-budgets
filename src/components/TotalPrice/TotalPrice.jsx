import "react";
import Card from "../Card/Card";
import UseServiceList from "../../hooks/UseServiceList";

const TotalPrice = () => {
  const productIds = [1, 2, 3];
  const serviceListContext = UseServiceList();
  const calculateTotalPrice = () => {
    return serviceListContext.reduce((total, service) => {
      return total + (service?.selected ? service.price : 0);
    }, 0);
  };

  return (
    <>
      {productIds.map((productId) => (
        <div key={productId}>
          <Card id={productId} />
        </div>
      ))}
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <h3>Preu pressuposat: {calculateTotalPrice()} €</h3>
      </div>
    </>
  );
};

export default TotalPrice;
