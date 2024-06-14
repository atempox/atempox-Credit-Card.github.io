import './index.css'
import { InformationContext } from '../Context';
import React, {useContext} from 'react';
import { numberInCard } from '../Context'


const Cards = () => {

    const context = useContext(InformationContext);

    const {name,
        creditCardNumber,
        expirationDate,
        securityNumber
    } = React.useContext(InformationContext)

    let newValue = numberInCard(context.creditCardNumber)
    
    return (
        <div id="cardConteiner">
            <div id='cardFront'>
                <h1>BBVA</h1>
                <span id='creditCardNumber'>{newValue}</span>
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