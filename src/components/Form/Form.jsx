import "./form.css";
import { useState, useContext } from "react";
import BudgetContext from "../../context/BudgetContext";
import UseServiceList from "../../hooks/UseServiceList";

function Form() {
  const { addBudget } = useContext(BudgetContext);
  const serviceListContext = UseServiceList();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleForm = (event) => {
    event.preventDefault();
    const selectedServices = serviceListContext.filter(
      (service) => service.selected
    );
    const totalPrice = selectedServices.reduce(
      (total, service) => total + service.price,
      0
    );

    const budget = {
      ...values,
      services: selectedServices,
      totalPrice,
    };

    addBudget(budget);
    setValues({ name: "", phone: "", email: "" });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <form className="form-component" onSubmit={handleForm}>
        <div className="form-body-component">
          <div className="row form-title-container">
            <h3 className="form-title">Demanar pressupost</h3>
          </div>
          <div className="row form-custom-row">
            <div className="col-3">
              <input
                type="text"
                name="name"
                value={values.name}
                className="form-control"
                placeholder="Nom"
                aria-label="Nom"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-3">
              <input
                type="number"
                name="phone"
                value={values.phone}
                className="form-control"
                placeholder="Telefon"
                aria-label="Telefon"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="email"
                value={values.email}
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-3">
              <button className="button-form" type="submit">
                Sol·licitar pressupost
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
