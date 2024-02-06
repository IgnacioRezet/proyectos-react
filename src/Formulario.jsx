import React from "react";
import Error from "./Error";


const Formulario=({ pacientes, setPacientes})=>{
    const[nombre, setNombre] = React.useState('');
    const[propietario, setPropietario] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[fecha, setFecha] = React.useState('');
    const[sintomas, setSintomas] = React.useState('');
    const[error, setError] = React.useState(false);

    const getID=()=>{
        const random = Math.random().toString(36).substr(2);
        const fecha= Date.now().toString(36);
        return  random + fecha;
    }
        
    const handleSubmit=(e)=>{
        e.preventDefault();
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        }
            setError(false);

            //objeto paciente
            const objetoPaciente = {nombre, propietario, email, fecha, sintomas, id: getID()};

            setPacientes([...pacientes, objetoPaciente]); 
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
    }
    return(
        <div className="md:w-1/2 lg:w-2/4 mx-5 ">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administrados</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 ml-5 mb-10" action="" onSubmit={handleSubmit}>
                {error ? <Error mensaje='Todos los cambios son obligatorios'/> : null}
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre} onChange={(e)=>setNombre(e.target.value )} />
                </div> 
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input id="propietario" type="text" placeholder="Email contacto propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario} onChange={(e)=>setPropietario(e.target.value )}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Nombre del propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={(e)=>setEmail(e.target.value )} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="date">Alta</label>
                    <input id="date" type="date"  
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={(e)=>setFecha(e.target.value )} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                   <textarea name="sintomas" id="sintomas"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="describe los sintomas" value={sintomas} onChange={(e)=>setSintomas(e.target.value )}></textarea>
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente"/>
            </form>
        </div>
    );
}

export default Formulario