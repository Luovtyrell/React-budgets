import ServiceListContext from "../../context/ServiceListContext";
import serviceList from "../../data/budgetData.json";
import Card from "../Card/Card";

const TotalPrice = () => {
  const productIds = [1, 2, 3];
  return (
    <ServiceListContext.Provider value={serviceList}>
      {productIds.map((productId) => (
        <div key={productId}>
          <Card id={productId} />
        </div>
      ))}
    </ServiceListContext.Provider>
  );
};

export default TotalPrice;
