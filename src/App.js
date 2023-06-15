import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Components/headerComponent';
import WelcomePage from './Components/Routes/WelcomeView';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
