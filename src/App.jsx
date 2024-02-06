import Formulario from "./Formulario"
import ListadoPacientes from "./ListadoPacientes"
import Header from "./header"
import React from 'react'


function App() {
  const [pacientes, setPacientes] = React.useState([]);
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes}/> 
      </div>
     
     
    </div>
  )
}

export default App
