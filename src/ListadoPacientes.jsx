import { useState } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {
 
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado paciente</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Admnistra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <div className="md:h-screen overflow-y-scroll">
        {pacientes.map((paciente) => (          
          <Paciente key={paciente.id} paciente={paciente} />
        ))}
       

      </div>
     
    </div>
  )
}

export default ListadoPacientes
