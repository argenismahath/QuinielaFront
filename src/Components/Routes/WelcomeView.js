import React from 'react'
import PhotographyUserComponent from '../PhotographyUserComponent';
import MenuComponent from '../Menu';
import { Link } from 'react-router-dom';

function WelcomePage() {
     return ( <>
          <PhotographyUserComponent UserName='MonkHR' ShowLast={false}/>
          <nav className='StartTable'>
               <div>
                    <Link to=''>Liga MX</Link>
               </div>
               <div>
                    <Link to=''>Tabla Semanal</Link>
               </div>
               <div>
                    <Link to=''>Tabla Global</Link>
               </div>
               <div>
                    <Link to=''>Reglas</Link>
               </div>
          </nav>
     </> );
}

export default WelcomePage;