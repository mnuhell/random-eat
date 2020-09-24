import React, { useState } from 'react';

const RandomFrase = ( number ) => {

    const initialState = "¡Prueba suerte!"
    const [ frase, setFrase ] = useState(initialState);

    switch (number) {
        case 1:
            setFrase( "Como vas a comer así, Mari chocho!!!")
            break;
        case 2:
            setFrase( "Ni que fuera yo Bin laden!!")
            break;
        case 6:
            setFrase( "La suerte del faisan de cuello vuelto")
            break;
        default:
            setFrase( initialState )
            break;
    }

}

export default RandomFrase;