import React, { useState, useEffect } from 'react';
import moment from 'moment';

import '../styles/LigaMxStyles.css';
import PhotographyUserComponent from '../PhotographyUserComponent';

function LigaMxComponent() {
     const [games, setGames] = useState([]);
     const [name, setName] = useState("");
     const [userId, setUserId] = useState(0);


     function formatearFecha(fechaEntrada) {
          const fecha = moment(fechaEntrada);
          return fecha.format('HH:mm DD/MM/YYYY');
     }
     useEffect(() => {
          setName(localStorage.getItem('userName'));
          setUserId(localStorage.getItem('userId'));

          fetch(`https://localhost:7154/api/Game/GetGamesByJorneys?id=3&userId=${localStorage.getItem('userId')}`, {
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