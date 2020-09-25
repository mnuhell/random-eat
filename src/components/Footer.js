import React from 'react';


export const Footer = () => {

    const year = () => {

             return new Date().getFullYear();

    }

    return (
        <footer>
            <p><a href="https://manfit78.com/" title="manufit78">manufit78</a> - { year() }</p>
        </footer>
    )
}