import React, { Component } from "react";
import Header from "./Header";
import AgregarCita from "./AgregarCita";
import ListaCitas from "./ListaCitas";
class App extends Component {
  constructor() {
    super();
    this.state = {
      citas: {}
    };
  }
  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
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
  borrarCita = id => {
    //leer el state
    const citas = { ...this.state.citas };
    //Borrarlo del state
    delete citas[id];
    //Actualizar el state
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
          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            ></ListaCitas>
          </div>
        </div>
      </div>
    );
  }
}

function titulo() {
  return "Administrador de pacientes de veterinarias";
}
export default App;
