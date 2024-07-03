import React, { useState } from "react";
import UseServiceList from "../../hooks/UseServiceList.jsx";
import "./card.css"

export default function Card({ id }) {
  const serviceList = UseServiceList();
  const [selected, setSelected] = useState(false); // estado para manejar la selección
  const foundProductById = serviceList.find((product) => product.id == id);
  console.log(foundProductById);

  if (!foundProductById) {
    return <div>Product not found</div>;
  }

  const handleSelect = () => {
    setSelected(!selected); // cambiar el estado de selección al hacer clic en el botón
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 ">
              <h5 className="card-title custom-margin-left">{foundProductById.name}</h5>
              <p className="card-text custom-margin-left">{foundProductById.description}</p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <h3>{foundProductById.price} €</h3>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <input
                className="checkbox"
                  type="checkbox"
                  checked={selected}
                  onChange={handleSelect}
                />
                 Afegir
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
{services.map(service => (
  <div key={service.id}>
    <h3>{service.name}</h3>
  </div>
))}
</div> */
}
