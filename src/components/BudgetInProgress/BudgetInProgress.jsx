import { useContext, useState, useEffect } from "react";
import BudgetContext from "../../context/BudgetContext";
import "./BudgetInProgress.css";

function BudgetInProgress() {
  const { budgets } = useContext(BudgetContext);
  const [sortedBudgets, setSortedBudgets] = useState([...budgets]);
  const [nameOrderAsc, setNameOrderAsc] = useState(true);
  const [dateOrderAsc, setDateOrderAsc] = useState(true);
  const [priceOrderAsc, setPriceOrderAsc] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSortedBudgets([...budgets]);
  }, [budgets]);

  const sortAlphabetically = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      return nameOrderAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    applySearch(sorted);
    setNameOrderAsc(!nameOrderAsc);
  };

  const sortByDate = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      return dateOrderAsc
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });
    applySearch(sorted);
    setDateOrderAsc(!dateOrderAsc);
  };

  const sortByPrice = () => {
    const sorted = [...sortedBudgets].sort((a, b) => {
      return priceOrderAsc
        ? a.totalPrice - b.totalPrice
        : b.totalPrice - a.totalPrice;
    });
    applySearch(sorted);
    setPriceOrderAsc(!priceOrderAsc);
  };

  const applySearch = (sortedBudgets) => {
    if (searchTerm.trim() !== "") {
      const filtered = sortedBudgets.filter((budget) =>
        budget.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSortedBudgets(filtered);
    } else {
      setSortedBudgets(sortedBudgets);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="dotted-separator">
        <div className="container mt-5 d-flex justify-content-between align-items-center">
          <h3>Pressupostos en curs:</h3>
          <div className="d-flex align-items-center">
            <div className="search-container me-3">
              <input
                type="text"
                placeholder="🔎 Cerca per nom..."
                value={searchTerm}
                onChange={handleSearchInputChange}
                className="form-control search-box"
              />
            </div>
            <div className="sort-buttons">
              <button
                onClick={sortAlphabetically}
                className={`btn btn-sort me-2 ${nameOrderAsc ? 'btn-sort-active-up' : 'btn-sort-active-down'}`}>
                Nom {nameOrderAsc ? "↑" : "↓"}
              </button>
              <button
                onClick={sortByDate}
                className={`btn btn-sort me-2 ${dateOrderAsc ? 'btn-sort-active-up' : 'btn-sort-active-down'}`}>
                Data {dateOrderAsc ? "↑" : "↓"}
              </button>
              <button
                onClick={sortByPrice}
                className={`btn btn-sort me-2 ${priceOrderAsc ? 'btn-sort-active-up' : 'btn-sort-active-down'}`}>
                Import {priceOrderAsc ? "↑" : "↓"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {sortedBudgets.map((budget, index) => (
        <div key={index} className="container mt-5">
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
