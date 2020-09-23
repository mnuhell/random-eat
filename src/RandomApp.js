import React from 'react';

import '../src/scss/style.scss';

const RandomApp = () => {

    return (
        <div className="container">
            <form>
                <div className="box box-content">
                    <h1>App</h1>
                </div>

                <div className="block">
                    <input type="submit" className="button" value="Suerte" />
                </div>
            </form>
        </div>
        
    )
}

export default RandomApp;