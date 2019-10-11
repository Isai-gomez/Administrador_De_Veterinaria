import React, { Component } from "react";
class Cita extends Component {
  render() {
    const { fecha, hora, mascota, propietario, sintomas } = this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">
            Mascota:
            <span>{mascota}</span>
          </h3>
          <p className="card-text">
            <span>Dueño: </span>
            {propietario}
          </p>
          <p className="card-text">
            <span> Fecha:</span>
            {fecha}
          </p>
          <p className="card-text">
            <span> Hora: </span>
            {hora}
          </p>
          <p className="card-text">
            <span>Sintomas: </span> <br />
            {sintomas}
          </p>
          <button
            onClick={() => this.props.borrarCita(this.props.idCitas)}
            className="btn btn-danger"
          >
            Borrar &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Cita;
