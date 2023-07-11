import React, { useState, useEffect, useRef } from 'react';
import '../styles/headerStyles.css';
import MenuComponent from './Menu';


function HeaderComponent({  datos }) {
    const openMenu = useRef(null);
    const [login,setLogin]= useState(false);

    const handleClick = () => {
        if (openMenu.current) {
            openMenu.current.classList.toggle('closeMenu');
        }
    };

    useEffect(() => {
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
          setLogin(true);
          
        }else{
            
            openMenu.current.classList.add('closeMenu');
        }
      }, [datos]);

    return (
        <>
            <header >
                <div>
                    <p>Icon de Quiniela</p>
                </div>
                <div>
                    {login?
                    <ion-icon  onClick={handleClick} name="menu"></ion-icon>
                :null}
                </div>
            </header>
            <MenuComponent datos={datos} refe={openMenu}></MenuComponent>
        </>
    )
}

export default HeaderComponent;