import {useEffect, useState} from "react";
import Encabezado from "./componentes/Encabezado";
import FechaTituloRow from "./componentes/FechaTituloRow"
import Contenido from "./componentes/Contenido";
import BotonesRow from "./componentes/BotonesRow";



//Este componente debe considerarse una "tarjeta de la app"
//Aquí se consumirá la api y se enviará la info a las tarjetas


function App() {
  //Definiciones
  const [tender, setTender] = useState([]);
 
  //Cambiar hook para la actualización
   useEffect( ()=>{
    fetch("https://tenders.guru/api/es/tenders",  { mode: 'no-cors'})
    .then( r => r.json() )
    .then(data =>{
      console.log(data);
    })
  },[])
  return (
    <div>
    <Encabezado/> 
    <FechaTituloRow/>
    <Contenido/>
    <BotonesRow/>
      
    </div>
  );
}

export default App;
