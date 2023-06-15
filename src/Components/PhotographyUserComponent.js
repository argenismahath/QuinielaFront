import React from 'react'
import Logo from '../img/LogoUser.png'

function PhotographyUserComponent({ UserName, ShowLast }) {
     return (
          <>
               <div>
                    <div>
                         <img width='30px' src={Logo} alt='userImageLogo' />
                    </div>
                    <div>
                         <p>{UserName}</p>
                    </div>
                   {ShowLast?<div> <p>32</p></div>: null}
               </div>
          </>
     );
}

export default PhotographyUserComponent;