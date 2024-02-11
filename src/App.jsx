import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Header from "./components/Header"
import {useEffect,useState} from 'react'


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const LS=()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
     
      setPacientes(pacientesLS);
      console.log(pacientes);
    };
    LS();
    
  }, []);


  useEffect(() => {   
     localStorage.setItem('pacientes', JSON.stringify(pacientes));
    // console.log(JSON.stringify(pacientes));
   
  }, [pacientes])

  const eliminarPaciente=(id)=>{
    const pacientesActualizados = pacientes.filter(pac=> pac.id !== id);
    setPacientes(pacientesActualizados);
    
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/> 
      </div>
     
     
    </div>
  )
}

export default App
