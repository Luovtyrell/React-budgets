import { useContext } from "react";
import ServiceListContext from "../../context/ServiceListContext";
import UpdateServiceListContext from "../../context/UpdateServiceListContext";
import "./BudgetInProgress.css";

function BudgetInProgress() {
  const serviceList = useContext(ServiceListContext);
  const handleSelectionChange = useContext(UpdateServiceListContext);

  return (
    <>
      <div className="dotted-separator">
      <div className="container mt-5 d-flex">
        <h3>Pressupostos en curs:</h3>
      </div>
      </div>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="card-component">
          <div className="card-body-component">
            <div className="row custom-row">
              <div className="col-md-4 ">
                <h5 className="card-title tittle-component-card custom-margin-left">
                  {/* {//Nom del producte} */}
                </h5>
                <p className="card-text custom-margin-left">
                  {/* {descripció del producte} */}
                </p>
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                {/* <h3>{preu del producte} €</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetInProgress;
