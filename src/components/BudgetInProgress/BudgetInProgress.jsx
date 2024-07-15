import { useContext, useState, useEffect } from "react";
import BudgetContext from "../../context/BudgetContext";
import "./BudgetInProgress.css";

function BudgetInProgress() {
  const { budgets } = useContext(BudgetContext);
  const [sortedBudgets, setSortedBudgets] = useState([...budgets]);
  const [nameOrderAsc, setNameOrderAsc] = useState(true);
  const [dateOrderAsc, setDateOrderAsc] = useState(true);
  const [priceOrderAsc, setPriceOrderAsc] = useState(true);

  useEffect(() => {
    setSortedBudgets([...budgets]);
  }, [budgets]);

  const sortAlphabetically = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      return nameOrderAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setSortedBudgets(sorted);
    setNameOrderAsc(!nameOrderAsc);
  };

  const sortByDate = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      return dateOrderAsc
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });
    setSortedBudgets(sorted);
    setDateOrderAsc(!dateOrderAsc);
  };

  const sortByPrice = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      return priceOrderAsc
        ? a.totalPrice - b.totalPrice
        : b.totalPrice - a.totalPrice;
    });
    setSortedBudgets(sorted);
    setPriceOrderAsc(!priceOrderAsc);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="dotted-separator">
        <div className="container mt-5 d-flex justify-content-between">
          <h3>Pressupostos en curs:</h3>
          <div className="sort-buttons">
            <button onClick={sortAlphabetically} className="btn btn-sort me-2">
              Nom {nameOrderAsc ? "↑" : "↓"}
            </button>
            <button onClick={sortByDate} className="btn btn-sort me-2">
              Data {dateOrderAsc ? "↑" : "↓"}
            </button>
            <button onClick={sortByPrice} className="btn btn-sort me-2">
              Import {priceOrderAsc ? "↑" : "↓"}
            </button>
          </div>
        </div>
      </div>

      {sortedBudgets.map((budget, index) => (
        <div
          key={index}
          className="container mt-5 d-flex justify-content-center align-items-center">
          <div className="card-component">
            <div className="card-body-component">
              <div className="row custom-row">
                <div className="col-md-4">
                  <h5 className="card-title tittle-component-card custom-margin-left">
                    {budget.name}
                  </h5>
                  <p className="card-text custom-margin-left">
                    {budget.phone} <br />
                    {budget.email}
                  </p>
                </div>

                <div className="col-md-4 d-flex align-items-center justify-content-center">
                  <p>Serveis contractats:</p>
                  <ul className="card-text">
                    {budget.services.map((service, idx) => (
                      <li key={idx}>{service.name}</li>
                    ))}
                  </ul>
                </div>

                <div className="col-md-4 d-flex align-items-center justify-content-center">
                  <h3>{budget.totalPrice} €</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BudgetInProgress;
