import './index.css'
import { InformationContext } from '../Context';
import React, {useContext} from 'react';

const Cards = () => {

    const {name,
        creditCardNumber,
        expirationDate,
        securityNumber
    } = React.useContext(InformationContext)
    
    return (
        <div id="cardConteiner">
            <div id='cardFront'>
                <h1>BBVA</h1>
                <span id='creditCardNumber'>{creditCardNumber}</span>
                <span>{expirationDate}</span>
                <span><p>{name}</p></span>

            </div>
            <div id='cardBack'>
                <div id='emptyDiv'></div>
                <span>{securityNumber}</span>

            </div>
        </div>
    )
};

export {Cards};