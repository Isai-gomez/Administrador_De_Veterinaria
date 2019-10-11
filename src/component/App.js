import React, { Component } from "react";
import Header from "./Header";
import AgregarCita from "./AgregarCita";
class App extends Component {
  constructor() {
    super();
    this.state = {
      citas: {}
    };
  }
  crearCita = infoCita => {
    //Tomar una copia del estate
    const citas = { ...this.state.citas };
    //Agregarlo al state actual
    citas[`citas${Date.now()}`] = infoCita;
    //Set state
    this.setState({
      citas: citas
    });
  };
  render() {
    return (
      <div className="container">
        <Header titulo={titulo()}></Header>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita}></AgregarCita>
          </div>
          <div className="col-md-6">2</div>
        </div>
      </div>
    );
  }
}

function titulo() {
  return "Administrador de pacientes de veterinarias";
}
export default App;
