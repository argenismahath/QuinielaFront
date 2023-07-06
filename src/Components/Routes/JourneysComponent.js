import React, { useState, useEffect } from 'react';
import '../styles/JourneyTable.css';
import { Link, useParams } from 'react-router-dom';


function JourneysTable(){
     const [data, setData] = useState([]);
     const [dataId, setDataid] = useState(0);

     const url = 'https://localhost:7154/api/Game/GetJourneys'
     let counter =0;
     const fetchData = async () => {
          try {
               const response = await fetch(url);
               let resposeJson = await response.json();
               console.log(resposeJson);
               setData(resposeJson)

          } catch (error) {
               console.error('Error fetching data:', error);
          }
     };

     const getRecords=()=>{
          
          setDataid(dataId+1);
          console.log(dataId);
     };

     useEffect(() => {
          fetchData();
     }, [])
     if (data.length < 1) {
          return <p>Cargando datos...</p>;
     }
     return (
          <div id='JourneysContainer'>
               {/* Utiliza el método map() para iterar sobre los datos y mostrarlos */}
               <div className='JourneyDataContainer'>
                    {!data ? 'cargando....' :
                         data.map((data, item) => {
                              counter++;
                         return <div key={counter}><h3 className='number'>Jornada {counter}</h3><Link onClick={getRecords} to={`?:id=${data.number}`}>{data.name}</Link></div>
                         })
                    };
                    
               </div>

          </div>
     )
               }


export default JourneysTable;