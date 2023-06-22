import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import '../styles/menuStyles.css';
import PhotographyUserComponent from './PhotographyUserComponent';

function MenuComponent({ refe }) {
    const openMenu = useRef(null);

    const handleClick = () => {
        if (openMenu.current) {
            console.log("holis")
        }
    };

    return (
        <>
            <div id='menuContent' ref={refe}>
                <nav>
                    {/* <HeaderComponent  /> */}
                    <PhotographyUserComponent UserName={'jhon mircha'} ShowLast={false} />
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
                </nav>
            </div>
        </>
    )
}

export default MenuComponent;