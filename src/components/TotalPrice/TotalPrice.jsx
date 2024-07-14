import Card from "../Card/Card";
import useServiceList from "../../hooks/UseServiceList";
import { usePrice } from "../../context/PriceContext";

const TotalPrice = () => {
  const productIds = [1, 2, 3];
  const serviceListContext = useServiceList();
  const { priceAdjustment } = usePrice();

  const calculateTotalPrice = () => {
    return (
      serviceListContext.reduce((total, service) => {
        return total + (service?.selected ? service.price : 0);
      }, 0) + priceAdjustment
    );
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
