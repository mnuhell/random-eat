import React, { useState, useEffect } from 'react';

import '../src/scss/style.scss';

const RandomApp = () => {

    const [ state, setState ] = useState(0);

    const initialState = "pruebate"
    const [ frase, setFrase ] = useState(initialState);

    const min = 1;
    const max = 6;

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }

      useEffect(() => {

        if(state == 6){
            setFrase( "Que suerte copon!!" );
            console.log(frase);
        } else if( state == 1) {
            setFrase( "jajaja me cago en dios" )
            console.log(frase);
        }
        
      }, [state])

    const submitForm = ( e ) => {
        e.preventDefault();
        setState(getRandomIntInclusive(min, max));
    }

    return (
        <div className="container">
            <div className="random">
                    
                <form onSubmit={ submitForm }>
                    
                    <div className="box__number">
                        <p className="number">{ state }</p>
                    </div>
                    <div className="box__frase">
                        <p className="frase">{ frase }</p>
                    </div>

                    <div className="block">
                        <input type="submit" className="button" value="Suerte" />
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default RandomApp;