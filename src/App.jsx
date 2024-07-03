import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/BudgetHome";
import ServiceListContext from "./context/ServiceListContext";
import Card from "./components/Card/Card";
import serviceList from "./data/budgetData.json";

function App() {
  const productIds = [1, 2, 3];
  return (
    <>
      <ServiceListContext.Provider value={serviceList}>
      <Home />
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
