import React, { useState, useEffect } from 'react';

export const Frase = ( state ) => {

    const initialState = "¡Prueba suerte!"
    const [ frase, setFrase ] = useState(initialState);
    const { number } = state.frase;

    useEffect(() => {

        if(number == 6){
            setFrase( "Que suerte copon!!" );
        } else if( number == 1) {
            setFrase( "Como vas a comer así, Mari chocho!!" )
        } else if( number == 5) {
            setFrase( "Puede que ganes, pero cosas peores he visto" )
        } else if( number == 4) {
            setFrase( "Ni pa tí, ni pa mi" )
        } else if( number == 3) {
            setFrase( "¡Ni que fuera yo Bin laden!" )
        } else if( number == 2) {
            setFrase( "¡No te calientes, tú ya no comes!" )
        }
        else {
            setFrase( initialState );
        }
    }, [number])

    return (
        <div className="box__frase">
            <p className="frase">{ frase }</p>
        </div>
    )


}