import PropTypes from "prop-types";
import { useState } from "react";
import UseServiceList from "../../hooks/UseServiceList";
import useUpdateServiceListContext from "../../hooks/useUpdateServiceListContext.jsx";
import "./card.css";
import PurchaseOptions from "../PurchaseOptions/PurchaseOptions.jsx";
import { usePrice } from "../../context/PriceContext";

export default function Card({ id }) {
  const serviceList = UseServiceList();
  const updateServiceList = useUpdateServiceListContext();
  const { discountApplied } = usePrice();
  const [selected, setSelected] = useState(false);
  const foundProductById = serviceList.find((product) => product.id == id);

  if (!foundProductById) {
    return <div>Product not found</div>;
  }

  const discountedPrice = discountApplied
    ? foundProductById.price * 0.8
    : foundProductById.price;

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card-component">
        <div className="card-body-component">
          <div className="row custom-row">
            <div className="col-md-4 ">
              <h5 className="card-title tittle-component-card custom-margin-left mb-1">
                {foundProductById.name}
              </h5>
              <p className="card-text custom-margin-left mb-3">
                {foundProductById.description}
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center mb-3">
              <h3>{discountedPrice} €</h3>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <input
                className="checkbox"
                type="checkbox"
                checked={selected}
                onChange={() => {
                  updateServiceList(id, !selected);
                  setSelected(!selected);
                }}
              />
              Afegir
            </div>
          </div>
          <div className="row custom-row">
            <div className="d-flex justify-content-end container-purchase-option">
              {foundProductById.name === "Web" && selected ? (
                <PurchaseOptions />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  onSelectionChange: PropTypes.func,
};
