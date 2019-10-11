import React, { Component } from "react";
import Cita from "./Cita";
class ListaCitas extends Component {
  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">Administra tus citas aquí</h2>
          <div className="lista-citas">
            {Object.keys(this.props.citas).map(cita => (
              <Cita key={cita} info={this.props.citas[cita]} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaCitas;
