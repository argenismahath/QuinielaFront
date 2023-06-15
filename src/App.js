import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Components/headerComponent';
import WelcomePage from './Components/Routes/WelcomeView';
import RulesComponent from './Components/Routes/RulesComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/Rules' element={<RulesComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
