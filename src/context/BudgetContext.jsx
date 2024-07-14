import { createContext, useState } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);

  const addBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]);
  };

  return (
    <BudgetContext.Provider value={{ budgets, addBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContext;
