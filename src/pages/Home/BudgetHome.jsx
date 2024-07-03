import "./BudgetHome.css";

const Home = () => {
  return (
    <div className="body">
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 ml-5 fs-6 fw-semibold">
            <img src="src/assets/hucha.png" width="30" height="24" />
            React budgets
          </span>
        </div>
      </nav>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card text-center custom-card">
          <div className="card-body">
            <h1>Aconsegueix la millor qualitat</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
