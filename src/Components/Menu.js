import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menuStyles.css';
import PhotographyUserComponent from './PhotographyUserComponent';

function MenuComponent({ refe }) {
  const openMenu = useRef(null);
  const [username, setUsername] = useState('');
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");


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
    const url = `https://localhost:7154/api/User/Get?username=${userDataname}`;
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
        setUsername(responseData.usernamw)
        console.log(responseData);
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
