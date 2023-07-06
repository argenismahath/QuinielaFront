import React, { useState, useEffect } from 'react';
import '../styles/LoginComponent.css';


function CreateNewGameComponent() {
     const [teamId1, setTeamId1] = useState(0);
     const [teamId2, setTeamId2] = useState(0);
     const [startHour, setStartHour] = useState('');
     const [lock, setLock] = useState(true);
     const [journeyNumber, setJourneyNumber] = useState(0);
     const [gameTitle, setGameTitle] = useState('');
     const [scoreTeam1, setScoreTeam1] = useState(0);
     const [scoreTeam2, setScoreTeam2] = useState(0);
     const [link, setLink] = useState('');

     const handleClear = () => {
          setTeamId1(0);
          setTeamId2(0);
          setStartHour('');
          setLock(true);
          setJourneyNumber(0);
          setGameTitle('');
          setScoreTeam1(0);
          setScoreTeam2(0);
          setLink('');
        };

     const handleSubmit = (e) => {
          e.preventDefault();

          const formData = {
               teamId1,
               teamId2,
               startHour,
               lock,
               journeyNumber,
               gameTitle,
               scoreTeam1,
               scoreTeam2,
               link
          };

          // Envía los datos a través de una solicitud (por ejemplo, utilizando fetch)
          fetch('https://localhost:7154/api/Game/AddnewGame', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData)
          })
               .then(response => response.json())
               .then(data => {
                    // Maneja la respuesta del servidor si es necesario
                    console.log(data);
                    handleClear();
               })
               .catch(error => {
                    // Maneja el error si ocurriera
                    console.error(error);
               });
     };

     return (
          <form className='registro-form' onSubmit={handleSubmit}>
               <label className='label-container'>
                    Team ID 1:
                    <input type="number" className='inputLogin' value={teamId1} onChange={e => setTeamId1(parseInt(e.target.value))} />
               </label>
               <br />
               <label className='label-container'>
                    Team ID 2:
                    <input type="number" className='inputLogin' value={teamId2} onChange={e => setTeamId2(parseInt(e.target.value))} />
               </label>
               <br />
               <label className='label-container'>
                    Start Hour:
                    <input type="datetime-local" className='inputLogin' value={startHour} onChange={e => setStartHour(e.target.value)} />
               </label>
               <br />
               <label className='label-container'>
                    Bloquear partido:
                    <input type="checkbox" className='inputLogin' checked={lock} onChange={e => setLock(e.target.checked)} />
               </label>
               <br />
               <label className='label-container'>
                    Journey Number:
                    <input type="number" className='inputLogin' value={journeyNumber} onChange={e => setJourneyNumber(parseInt(e.target.value))} />
               </label>
               <br />
               <label className='label-container'>
                    Game Title:
                    <input type="text" className='inputLogin' value={gameTitle} onChange={e => setGameTitle(e.target.value)} />
               </label>
               <br />
               <label className='label-container'>
                    Score Team 1:
                    <input type="number" className='inputLogin' value={scoreTeam1} onChange={e => setScoreTeam1(parseInt(e.target.value))} />
               </label>
               <br />
               <label className='label-container'>
                    Score Team 2:
                    <input type="number" className='inputLogin' value={scoreTeam2} onChange={e => setScoreTeam2(parseInt(e.target.value))} />
               </label>
               <br />
               <label className='label-container'>
                    Link:
                    <input type="text" className='inputLogin' value={link} onChange={e => setLink(e.target.value)} />
               </label>
               <br />
               <button className='bootstrap-button' type="submit">Enviar</button>
          </form>
     );
}


export default CreateNewGameComponent;