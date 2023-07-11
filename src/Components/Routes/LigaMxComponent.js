import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import '../styles/LigaMxStyles.css';
import PhotographyUserComponent from '../PhotographyUserComponent';

function LigaMxComponent() {
     const [games, setGames] = useState([]);
     const [name, setName] = useState("");
     const [userId, setUserId] = useState(0);
     const navigate = useNavigate();


     function formatearFecha(fechaEntrada) {
          const fecha = moment(fechaEntrada);
          return fecha.format('HH:mm DD/MM/YYYY');
     }

     function Jorneys() {
          navigate('/Jorneys');
     }
     useEffect(() => {
          setName(localStorage.getItem('userName'));
          setUserId(localStorage.getItem('userId'));

          fetch(`${localStorage.getItem('URL')}/api/Game/GetGamesByJorneys?id=1&userId=${localStorage.getItem('userId')}`, {
               method: 'GET',
               headers: {
                    'Accept': 'text/plain'
               }
          })
               .then(response => response.json())
               .then(data => {
                    setGames(data);
                    console.log(data);
               })
               .catch(error => {
                    console.error(error);
               });
     }, []);

     return (
          <div id='Liga-mx'>
               <PhotographyUserComponent UserName={name} ShowLast={false} />
               <div id='row-container'>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    <ion-icon name="arrow-forward-outline" onClick={Jorneys}></ion-icon>
               </div>
               {games.map(game => (
                    <div className='liga-container' key={game.id}>
                         <div>
                              <div>
                                   <img src={game.img1} alt='{game.name1}' />
                                   <p>{game.name1}</p>
                                   <p className='counter'>{game.scoreTeam1}</p>
                              </div>
                              <div>
                                   <img src={game.img2} alt='{game.name2}' />
                                   <p>{game.name2}</p>
                                   <p className='counter'>{game.scoreTeam2}</p>
                              </div>
                         </div>
                         <div>
                              <p className='date'>{formatearFecha(game.startGame)}</p>
                              <p><strong> semifinal</strong></p>
                         </div>
                         <div>
                              <p>Puntos optenidos</p>
                              <p><strong > {game.points}</strong></p>
                         </div>

                    </div>
               ))}
          </div>
     );
}

export default LigaMxComponent;