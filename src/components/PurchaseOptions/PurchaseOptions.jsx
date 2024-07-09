import { useState } from "react";
import "./purchaseOptions.css";

export default function PurchaseOptions() {
  const [pagesNumber, setPagesNumber] = useState(0);
  const [languagesNumber, setLanguagesNumber] = useState(0);

  const sumarPages = () => {
    setPagesNumber(pagesNumber + 1);
  };

  const restarPages = () => {
    setPagesNumber(pagesNumber - 1);
  };

  const sumarLanguages = () => {
    setLanguagesNumber(languagesNumber + 1);
  };

  const restarLanguages = () => {
    setLanguagesNumber(languagesNumber - 1);
  };

  return (
    <>
      <div>
        <div  className="purchase-option">
          <button class="info-button">i</button>
          <span>Nombre de pàgines:</span>
          <button className="button-page-web" onClick={restarPages}>
            -
          </button>
          <span className="cantidad-seleccionada-web">{pagesNumber}</span>
          <button className="button-page-web" onClick={sumarPages}>
            +
          </button>
        </div>

        <div  className="purchase-option">
          <button class="info-button">i</button>
          <span>Nombre de llenguatges:</span>
          <button className="button-page-web" onClick={restarLanguages}>
            -
          </button>
          <span className="cantidad-seleccionada-web">{languagesNumber}</span>
          <button className="button-page-web" onClick={sumarLanguages}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
