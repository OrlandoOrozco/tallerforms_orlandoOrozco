export const PeliCre = () => {
  return (
    <>
  <div className="container"> {/* Div para centrar el formulario */}
    <div className="row justify-content-center"> {/* Centra horizontalmente */}
      <div className="col-md-8"> {/* Tamaño del formulario */}
        <form className="row g-2 needs-validation">
          <div className="col-md-5">
            <label className="form-label">Nombre de la pelicula</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-5">
            <label className="form-label">Pais</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-5">
            <label className="form-label">Año</label>
            <input
              type="number"
              className="form-control"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-3">
            <label className="form-label">Genero</label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Accion</option>
              <option>Terror</option>
              <option>Ciencia ficcion</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-12">
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</>

  );
};
