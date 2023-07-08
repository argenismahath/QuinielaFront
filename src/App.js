import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Components/headerComponent';
import WelcomePage from './Components/Routes/WelcomeView';
import RulesComponent from './Components/Routes/RulesComponent';
import WeekTableComponent from './Components/Routes/WeekTableComponent';
import JourneysTable from './Components/Routes/JourneysComponent';
import Login from './Components/Routes/LoginComponent';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import RegistroForm from './Components/Routes/newUserComponent';
import CreateNewGameComponent from './Components/Routes/createNewGame';
import LigaMxComponent from './Components/Routes/LigaMxComponent';
import ComponenteA from './Components/ComponentA.js';
import { useState } from 'react';



function App() {
  const URL = 'https://www.quinielaappback.somee.com';
  const [message, setMessage]=useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Si el usuario está autenticado, redirige a la página principal
      navigate('/Login');
    }

    try {
      localStorage.removeItem('URL');
      localStorage.setItem('URL', URL);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [navigate]);

  const [datos, setDatos] = useState('Datos iniciales');

  const actualizarDatos = (nuevosDatos) => {
    setDatos(nuevosDatos);
  };

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>

        <Routes>
          {/* <Route path='/' element={<WelcomePage/>}/> */}
          <Route path='/' element={<JourneysTable />} />

          <Route path='/Rules' element={<RulesComponent />} />
          <Route path='/Liga' element={<LigaMxComponent />} />

          <Route path='/WeekTable' element={<WeekTableComponent />} />
          <Route path='/Jorneys' element={<JourneysTable />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/NewUser' element={<RegistroForm />} />
          <Route path='/NewGame' element={<CreateNewGameComponent />} />

        </Routes>
        <ComponenteA actualizarDatos={actualizarDatos}/>

    </div>
  );
}

export default App;
