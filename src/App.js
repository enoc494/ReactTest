import {useEffect, useState} from "react";
import Encabezado from "./componentes/Encabezado";
import FechaTituloRow from "./componentes/FechaTituloRow"
import Contenido from "./componentes/Contenido";
import BotonesRow from "./componentes/BotonesRow";

import './assets/css/app.css';


//Este componente debe considerarse una "tarjeta de la app"
//Aquí se consumirá la api y se enviará la info a las tarjetas


function App() {
  //Definiciones
  const [tender, setTender] = useState([]);
 
  //Cambiar hook para la actualización
  useEffect( ()=>{
    
    fetch("https://tenders.guru/api/es/tenders")
    .then( r => r.json() )
    .then(data =>{
      if(!data){
        return console.log('error')
      }
      console.log(data);
    })

  },[])

  return (
    <div className="body">
      <Encabezado/> 
      <FechaTituloRow/>
      <Contenido/>
      <BotonesRow/> 
    </div>
  );
}

export default App;
