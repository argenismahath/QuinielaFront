import React, { useState, useEffect } from 'react';
import '../styles/JourneyTable.css';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function JourneysTable() {
     const [data, setData] = useState([]);
     const [dataId, setDataid] = useState(0);
     const navigate = useNavigate();

     const url = `${localStorage.getItem('URL')}/api/Game/GetJourneys`;
     let counter = 0;
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

     const getRecords = () => {

          setDataid(dataId + 1);
          console.log(dataId);
     };

     useEffect(() => {
          fetchData();
     }, [])
     if (data.length < 1) {
          return <p>Cargando datos...</p>;
     }

     const handleExternalLink = (e) => {
          e.preventDefault();
          const url = e.target.href;
          window.open(url, '_blank');
     };

     function LigaMx() {
          navigate('/Liga');
     }
     return (
          <div id='JourneysContainer'>
               <div id='row-container'>
                    <ion-icon name="arrow-back-outline" onClick={LigaMx}></ion-icon>
                    <h3>Historial</h3>
                    <ion-icon name="arrow-forward-outline" ></ion-icon>
               </div>
               {/* Utiliza el método map() para iterar sobre los datos y mostrarlos */}
               <div className='JourneyDataContainer'>
                    {!data ? 'Cargando datos...' :
                         data.map((data, item) => {
                              counter++;
                              return (
                                   <div key={counter}>
                                        <h3 className='number'>Jornada {counter}</h3>
                                        <a href={`https://${data.link}`} target="_blank" onClick={handleExternalLink} rel="noopener noreferrer">
                                             Ver Resultados
                                        </a>
                                   </div>
                              );
                         })
                    }

               </div>

          </div>
     )
}


export default JourneysTable;