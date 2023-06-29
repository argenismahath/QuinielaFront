import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/WeekTable.css';

function WeekTableComponent() {
     const [data, setData] = useState([]);
     const url = 'https://42vdvmerq8.sharedwithexpose.com/api/Game/GetWeekTable'
     let counter =0;
     const fetchData = async () => {
          try {
               const response = await fetch(url);
               let resposeJson = await response.json();

               setData(resposeJson)

          } catch (error) {
               console.error('Error fetching data:', error);
          }
     };

     useEffect(() => {

          fetchData();
     }, [])
     if (data.length < 10) {
          return <p>Cargando datos...</p>;
     }
     return (
          <div id='weekContainer'>
               {/* Utiliza el método map() para iterar sobre los datos y mostrarlos */}
               <div >
                    {!data ? 'cargando....' :
                         data.map((data, item) => {
                              counter++;
                              return <div key={counter}><h3 className='counter'>{counter}</h3><p>{data.name}</p><p>{data.points}</p></div>
                         })
                    };
                    
               </div>

          </div>
);
}

export default WeekTableComponent;