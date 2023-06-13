import React, { useState, useEffect, useRef } from 'react';
import '../styles/menuStyles.css';

function MenuComponent({refe}) {
    const openMenu = useRef(null);

    const handleClick = () => {
        if (openMenu.current) {
            console.log("holis")
        }
    };

    return (
        <>
            <div id='menuContent' ref={refe}>
                <div>
                    <p>PÉRFIL</p>
                </div>
                <div>
                    <p>TABLA SEMANAL</p>
                </div>
                <div>
                    <p>TABLA GLOBAL</p>
                </div>
                <div>
                    <p>REGLAS</p>
                </div>
                <div>
                    <p>CERRAR SESIÓN</p>
                </div>

            </div>
        </>
    )
}

export default MenuComponent;