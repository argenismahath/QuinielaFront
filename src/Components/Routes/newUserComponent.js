import React, { useState } from 'react';
import '../styles/NewUser.css';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



const RegistroForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const registroData = {
      name,
      email,
      password,
      username
    };
    fetchData(registroData);
  }

  const url = 'https://localhost:7154/api/Game/AddNewUser'
  const fetchData = async (registroData) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(registroData)
      });
      let resposeJson = await response.json();
      setMostrarAlerta(true);
      setName('');
      setEmail('');
      setPassword('');
      setUsername('');
      console.log(resposeJson);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCerrarAlerta = () => {
    setMostrarAlerta(false);
  };

  // useEffect(() => {
  //      fetchData();
  // }, [])

  return (
    <form onSubmit={handleSubmit} className="registro-form">
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
      <Alert show={mostrarAlerta} variant="success" className="position-absolute bottom-0 flex-column start-0 w-100 d-flex justify-content-center" onClose={() => setMostrarAlerta(false)} dismissible>
        <Alert.Heading>Registro con exito</Alert.Heading>
        <p>
          se ha registrado un nuevo usuario correctamente
        </p>
      </Alert>
    </form>
  );
};

export default RegistroForm;