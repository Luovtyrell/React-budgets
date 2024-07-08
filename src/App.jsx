import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/BudgetHome";
import BudgetWelcome from "./pages/Welcome/BudgetWelcome";


function App() {
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<BudgetWelcome/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
