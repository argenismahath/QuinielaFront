import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menuStyles.css';
import PhotographyUserComponent from './PhotographyUserComponent';

function MenuComponent({ refe }) {
  const openMenu = useRef(null);
  const [username, setUsername] = useState('');
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(0);



  const menuStatus = () => {
    if (refe.current && refe.current.classList) {
      if (refe.current.classList.contains('closeMenu' || window.location.pathname === '/Login')) {
        refe.current.classList.remove('closeMenu');
      } else {
        refe.current.classList.add('closeMenu');
      }
    }
    console.log(window.location.pathname);
  };

  const closeSesion = () => {
    localStorage.removeItem('isLoggedIn');
    setLogin(false);
    menuStatus();
  };

  const getUserData = async (userDataname) => {
    const url = `${localStorage.getItem('URL')}/api/User/Get?username=${userDataname}`;
    const body = '';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: body
      });
  
      if (response.ok) {
        const responseData = await response.json();
        // Trabaja con los datos de respuesta aquí
        setName(responseData.name);
        setUsername(responseData.usernamw);
        setUserId(responseData.id);
        localStorage.setItem('userName', responseData.name);
        localStorage.setItem('userId', responseData.id);

      } else {
        console.error('Error en la solicitud:', response.status);
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setLogin(true);
      getUserData(localStorage.getItem('UserName'));
    } else {

      menuStatus();
    }
  }, []);

  return (
    <div id='menuContent' ref={refe}>
      <nav>
        <PhotographyUserComponent UserName={name} ShowLast={false} />
        <div className='option firstOption'>
          <Link onClick={menuStatus} to='/'>Inicio</Link>
        </div>
        <div className='option'>
          <Link onClick={menuStatus} to='/Perfil'>PERFIL</Link>
        </div>
        <div className='option'>
          <Link onClick={menuStatus} to='/Liga'>Liga MX</Link>
        </div>
        <div className='option'>
          <Link onClick={menuStatus} to='/Jorneys'>Jornadas</Link>
        </div>
        <div className='option'>
          <Link onClick={menuStatus} to='/WeekTable'>TABLA SEMANAL</Link>
        </div>
        <div className='option'>
          <Link onClick={menuStatus} to='/GlobalTable'>TABLA GLOBAL</Link>
        </div>
        <div className='option'>
          <Link onClick={menuStatus} to='/Rules'>REGLAS</Link>
        </div>
        {userId===1? <div className='option'>
          <Link onClick={menuStatus} to='/NewGame'>Nuevo juego</Link>
        </div>:null}
        {login &&
          <div className='option'>
            <Link to='/SignOut' onClick={closeSesion}>CERRAR SESIÓN</Link>
          </div>
        }
      </nav>
    </div>
  );
}

export default MenuComponent;
