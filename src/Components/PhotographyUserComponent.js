import React from 'react'
import Logo from '../img/LogoUser.png'
import '../styles/LogoStyle.css';

function PhotographyUserComponent({ UserName, ShowLast }) {
     return (
          <>
               <div>
                    <div>
                         <img id='imgLogo' width='30px' src={Logo} alt='userImageLogo' />
                    </div>
                    <div>
                         <p id="useName">{UserName}</p>
                    </div>
                   {ShowLast?<div> <p>32</p></div>: null}
               </div>
          </>
     );
}

export default PhotographyUserComponent;