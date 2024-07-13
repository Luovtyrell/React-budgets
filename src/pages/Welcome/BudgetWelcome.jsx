import { Link } from "react-router-dom";
import "./BudgetWelcome.css";

const BudgetWelcome = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card card-welcome">
        <div className="card-body">
          <h5 className="card-title fw-semibold">Welcome to our page!</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            debitis, alias, dolore magni, perferendis exercitationem deleniti
            impedit eius natus soluta veritatis iste culpa voluptates similique
            unde? Architecto reiciendis temporibus nostrum!
          </p>
          <div className="container mt-4">
            <Link to="/">
              <button className="btn-main btn-primary rounded-pill">
                Go to home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetWelcome;
