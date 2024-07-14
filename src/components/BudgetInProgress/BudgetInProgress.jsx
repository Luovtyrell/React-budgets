import { useContext } from "react";
import BudgetContext from "../../context/BudgetContext";
import "./BudgetInProgress.css";

function BudgetInProgress() {
  const { budgets } = useContext(BudgetContext);

  return (
    <div className="container mt-5">
      <div className="dotted-separator">
        <div className="container mt-5 d-flex">
          <h3>Pressupostos en curs:</h3>
        </div>
      </div>
      {budgets.map((budget, index) => (
        <div
          key={index}
          className="container mt-5 d-flex justify-content-center align-items-center"
        >
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
