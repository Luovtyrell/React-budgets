import "bootstrap/dist/css/bootstrap.min.css";
import ServiceListContext from "./context/ServiceListContext";
import Card from "./components/Card/Card";
import serviceList from "./data/budgetData.json";

function App() {
  const productIds = [1, 2, 3];
  return (
    <>
      <ServiceListContext.Provider value={serviceList}>
        {productIds.map((productId) => (
          <div key={productId}>
            <Card id={productId} />
          </div>
        ))}
      </ServiceListContext.Provider>
    </>
  );
}

export default App;
