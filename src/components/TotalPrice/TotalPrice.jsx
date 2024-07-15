import Card from "../Card/Card";
import useServiceList from "../../hooks/UseServiceList";
import { usePrice } from "../../context/PriceContext";
import "./TotalPrice.css";

const TotalPrice = () => {
  const productIds = [1, 2, 3];
  const serviceListContext = useServiceList();
  const { priceAdjustment, discountApplied, toggleDiscount } = usePrice();

  const calculateTotalPrice = () => {
    let totalPrice = serviceListContext.reduce((total, service) => {
      return total + (service?.selected ? service.price : 0);
    }, 0);

    if (discountApplied) {
      totalPrice *= 0.8;
    }

    return totalPrice + priceAdjustment;
  };

  const handleDiscountToggle = () => {
    toggleDiscount();
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="form-check form-switch">
          <input
            className={`form-check-input ${discountApplied ? "checked" : ""}`}
            type="checkbox"
            id="discountSwitch"
            checked={discountApplied}
            onChange={handleDiscountToggle}
          />
          <label className="form-check-label">
            Aplica el 20% amb el pagament anual
          </label>
        </div>
      </div>
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
