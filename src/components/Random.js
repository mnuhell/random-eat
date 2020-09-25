import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { getRandom } from '../helpers/getRandom';
import { Footer } from './Footer';
import { Frase } from './Frase';


const Random = () => {

    const [ state, setState ] = useState({
        number: 0,
        loading: false
    });

    const { number, loading } = state;

    const min = 1;
    const max = 6;
    const submitForm = ( e ) => {
        e.preventDefault();
        setState({
            ...state,
            loading: true
        });
        setTimeout(() => {
            setState({
                number: getRandom(min, max),
                loading: false
            });
        }, 2000)
    }

    return (
        <>
        <Frase frase={ state } />
        <div className="random container">   
            <form onSubmit={ submitForm }>
                <div className="box__number">
                    { (loading) ? <Loading /> : <p className="number">{ number }</p> }
                </div>
                <div className="block">
                    <input type="submit" className="button" value="Suerte" />
                </div>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default Random;