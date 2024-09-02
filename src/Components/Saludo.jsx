import React from 'react';

const Saludo = (props) => {
    return (
        <p>
            Hello {props.mensaje} !
        </p>
    );
};

export default Saludo;