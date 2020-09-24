import React, { useState, useEffect } from 'react';
import Random from '../src/components/Random';

import '../src/scss/style.scss';

const RandomApp = () => {

    return (
        <>
        <div className="wrapper">    
            <Random />
        </div>
        </>
    )
}

export default RandomApp;