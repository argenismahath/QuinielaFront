import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginComponent.css';
import loginImg from '../../img/LOGIN.jpeg';


const Login = ({setLoginData}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${localStorage.getItem('URL')}/api/User/LoginUser?userName=${username}&password=${password}`;
    const body = '';
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'text/plain'
          },
          body: body
        });
        let resposeJson = await response.json();
        if(resposeJson){
          localStorage.setItem('UserName', username);
          setLoginData(true);
          navigate('/Jorneys');
        }
        localStorage.setItem('isLoggedIn', resposeJson);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      // Si el usuario está autenticado, redirige a la página principal
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <img src={loginImg} alt="My Image" />
      <h1>INICIA SESIÓN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {/* Username: */}
          <input className='inputLogin' type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          {/* Password: */}
          <input className='inputLogin' type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />{
          username.length > 4 && password.length > 6 ?
            <button className='bootstrap-button' type="submit">Ingresar</button> :
            <button disabled className='bootstrap-button' type="submit">Ingresar</button>

        }
      </form>
    </div>
  );
};

export default Login;
