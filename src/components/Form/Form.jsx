import "./form.css";

function Form() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="form-component">
          <div className="form-body-component">
            <div className="row form-title-container">
              <h3 className="form-title">Demanar pressupost</h3>
            </div>

            <div className="row form-custom-row">
              <div className="col-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nom"
                  aria-label="Nom"
                />
              </div>
              <div className="col-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Telefon"
                  aria-label="Telefon"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div className="col-3">
                <button className="button-form">Sol-licitar pressupost</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
