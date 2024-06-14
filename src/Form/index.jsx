import './index.css'
import { InformationContext } from '../Context';
import React, {useContext} from 'react';

const Form = () => {

    const context = useContext(InformationContext);


function onName (event) {
    context.setName(event.target.value)
    };

function onCreditCardNumber (event) {
    context.setCreditCardNumber(event.target.value)
    };
function onExpirationDate (event) {
    context.setExpirationDate(event.target.value)
    };
function onExpirationDate (event) {
    context.setExpirationDate(event.target.value)
    }; 
function onSecurityNumber (event) {
    context.setSecurityNumber(event.target.value)
    }; 

    return(
        <div id='userInformation'>
            <h1>Credit Card Information</h1>
            <form>
                <label>Name</label>
                <input
                type="text"
                value={context.name}
                onChange={onName} />

                <label>Credit Card Number</label>
                <input 
                placeholder="0000 0000 0000 0000" 
                value={context.creditCardNumber}
                onChange={onCreditCardNumber}
                />

                <label>Expiration Date</label>
                <input 
                placeholder="MM/DD" 
                value={context.expirationDate}
                onChange={onExpirationDate}/>

                <label>Security Number</label>
                <input
                placeholder='000'
                value={context.securityNumber} 
                onChange={onSecurityNumber}/>

                <button
                type='submit'
                >complete</button>
            </form>            
        </div>
    )
};

export { Form };