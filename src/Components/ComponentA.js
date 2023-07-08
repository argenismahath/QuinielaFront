import React from 'react';

const ComponenteA = ({ actualizarDatos }) => {
     const handleClick = () => {
          const nuevosDatos = 'Nuevos datos desde el componente hijo';
          actualizarDatos(nuevosDatos);
     };

     return (
          <div>
               <button onClick={handleClick}>Actualizar datos del componente padre</button>
          </div>
     );
}
export default ComponenteA;
