import { useState } from "react";
import { usePrice } from "../../context/PriceContext";
import "./PurchaseOptions.css";

const PurchaseOptions = () => {
  const { adjustPrice } = usePrice();
  const [pagesNumber, setPagesNumber] = useState(0);
  const [languagesNumber, setLanguagesNumber] = useState(0);
  const [showInfoNumberPages, setShowInfoNumberPages] = useState(false);
  const [showInfoNumberIdioms, setShowInfoNumberIdioms] = useState(false);

  const infoNumberPages = () => {
    setShowInfoNumberPages(!showInfoNumberPages);
  };

  const infoNumberIdioms = () => {
    setShowInfoNumberIdioms(!showInfoNumberIdioms);
  };

  const increasePages = () => {
    setPagesNumber(pagesNumber + 1);
    adjustPrice(30);
  };

  const decreasePages = () => {
    if (pagesNumber > 0) {
      setPagesNumber(pagesNumber - 1);
      adjustPrice(-30);
    }
  };

  const increaseLanguages = () => {
    setLanguagesNumber(languagesNumber + 1);
    adjustPrice(30);
  };

  const decreaseLanguages = () => {
    if (languagesNumber > 0) {
      setLanguagesNumber(languagesNumber - 1);
      adjustPrice(-30);
    }
  };

  return (
    <>
      <div>
        <div className="purchase-option">
          <button onClick={infoNumberPages} className="info-button">
            i
          </button>
          <span>Número de pàgines</span>
          <button className="button-page-web" onClick={decreasePages}>
            -
          </button>
          <span className="cantidad-seleccionada-web">{pagesNumber}</span>
          <button className="button-page-web" onClick={increasePages}>
            +
          </button>
        </div>
        {showInfoNumberPages && (
          <div
            className="modal modal-info show d-block d-flex justify-content-center align-items-center"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Número de pàgines
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowInfoNumberPages(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Afageix les pàgines que necessites per a dur a terme el
                    teu projecte. El cost de cada pàgina és de 30€.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="purchase-option">
          <button onClick={infoNumberIdioms} className="info-button">
            i
          </button>
          <span>Número de llenguatges:</span>
          <button className="button-page-web" onClick={decreaseLanguages}>
            -
          </button>
          <span className="cantidad-seleccionada-web">{languagesNumber}</span>
          <button className="button-page-web" onClick={increaseLanguages}>
            +
          </button>
        </div>
        {showInfoNumberIdioms && (
          <div
            className="modal modal-info show d-block d-flex justify-content-center align-items-center"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Número de llenguatges
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowInfoNumberIdioms(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Afageix els llenguatges que tindrà el teu projecte. El
                    cost de cada llenguatge és de 30€.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PurchaseOptions;
