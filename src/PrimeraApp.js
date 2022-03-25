import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';

//Functional Components

const PrimeraApp = ( {saludo, subtitulo } ) => {

    

    return (
        //Forma corta de crear un Fragment
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
            <p> { subtitulo } </p>
        </>
        /*<Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </Fragment>*/
        
    );
}

//Obligar a mandar las propiedades necesarias al componente
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//Valores por defecto de las propiedades
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;