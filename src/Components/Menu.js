import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
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
                    <Link to='/'>Inicio</Link>
                </div>
                <div>
                    <Link to='/Perfil'>PÉRFIL</Link>
                </div>
                <div>
                    <Link to='/WeekTable'>TABLA SEMANAL</Link>
                </div>
                <div>
                    <Link to='/GlobalTable'>TABLA GLOBAL</Link>
                </div>
                <div>
                    <Link to='/Rules'>REGLAS</Link>
                </div>
                <div>
                    <Link to='/SignOut'>CERRAR SESIÓN</Link>
                </div>
            </div>
        </>
    )
}

export default MenuComponent;