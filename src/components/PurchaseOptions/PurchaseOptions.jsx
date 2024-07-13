import { useState } from "react";
import "./PurchaseOptions.css";

export default function PurchaseOptions() {
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
        <div className="purchase-option">
          <button onClick={infoNumberPages} className="info-button">
            i
          </button>
          <span>Nombre de pàgines:</span>
          <button className="button-page-web" onClick={restarPages}>
            -
          </button>
          <span className="cantidad-seleccionada-web">{pagesNumber}</span>
          <button className="button-page-web" onClick={sumarPages}>
            +
          </button>
        </div>
        {/* --------------------------------Modal-------------------------------- */}
        {showInfoNumberPages && (
          <div
            className="modal modal-info show d-block d-flex justify-content-center align-items-center"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title " id="staticBackdropLabel">
                    Nombre de pàgines
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
                    Afegeix les pàgines que necessitis per a dur a terme el teu
                    projecte. El cost de cada pàgina és de 30€.
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
      {/* --------------------------------Modal-------------------------------- */}
      {showInfoNumberIdioms && (
        <div
          className="modal modal-info show d-block d-flex justify-content-center align-items-center"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title " id="staticBackdropLabel">
                  Nombre de llenguatges
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
                  Afegeix les llenguatges que tindrà el teu projecte. El cost de
                  cada llenguatge és de 30€.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
