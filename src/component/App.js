import React, { Component } from "react";
import Header from "./Header";
import AgregarCita from "./AgregarCita";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header titulo={titulo()}></Header>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita></AgregarCita>
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
