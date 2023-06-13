import React, { useState, useEffect, useRef } from 'react';
import '../styles/headerStyles.css';
import MenuComponent from './Menu';


function HeaderComponent() {
    const openMenu = useRef(null);

    const handleClick = () => {
        if (openMenu.current) {
            openMenu.current.classList.toggle('closeMenu');
        }
    };

    return (
        <>
            <header >
                <div>
                    <p>Icon de Quiniela</p>
                </div>
                <div>
                    <ion-icon onClick={handleClick} name="menu"></ion-icon>
                </div>
            </header>
            <MenuComponent refe={openMenu}></MenuComponent>
        </>
    )
}

export default HeaderComponent;