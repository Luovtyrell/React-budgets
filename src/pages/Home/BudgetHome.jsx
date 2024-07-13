import "./BudgetHome.css";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import serviceList from "../../data/budgetData.json";
import ServiceListProvider from "../../context/ServiceListProvider.jsx";
import BudgetInProgress from "../../components/BudgetInProgress/BudgetInProgress.jsx";
import Form from "../../components/Form/Form.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="body">
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 ml-5 fs-6 fw-semibold">
            <img src="src/assets/hucha.png" width="30" height="24" />
            React budgets
          </span>
          <Link to='/welcome'><button className="welcome-button rounded-pill">Welcome page</button></Link>
        </div>
      </nav>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card text-center custom-card">
          <div className="card-body-home">
            <h1>Aconsegueix la millor qualitat</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <ServiceListProvider value={serviceList}>
          <TotalPrice />
          <Form/>
          <BudgetInProgress/>
        </ServiceListProvider>
      </div>
    </div>
  );
};

export default Home;
