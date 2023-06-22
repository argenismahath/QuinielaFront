import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function WeekTableComponent() {
     const [data, setData] = useState([]);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await axios.get('https://localhost:7154/api/Game/GetWeekTable');
                    setData(response.data);
                    console.log(typeof response.data);
                    console.log(response.data[1].name);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          };

          fetchData();
     }, []);
     if (data.length < 10) {
          return <p>Cargando datos...</p>;
     }
     return (<>
          <div>
               <div>
                    {/* Utiliza el método map() para iterar sobre los datos y mostrarlos */}
                    {data.forEach(item => {
                         {console.log(item.name)}
                         <div >
                              <h1>{item.name}</h1>
                              <p>{item.points}</p>
                         </div>
                    })};
                    {/* {data.map((item) => (
                              <div key={item.id}>
                                   <h1>{item.title}</h1>
                                   <p>{item.description}</p>
                              </div>
                         ))} */}
               </div>
          </div>
     </>);
}

export default WeekTableComponent;