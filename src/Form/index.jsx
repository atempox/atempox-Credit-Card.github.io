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
                <label htmlFor='name'>Name</label>
                <textarea
                id='name'
                type="text"
                value={context.name}
                onChange={onName} />

                <label htmlFor='number'>Credit Card Number</label>
                <textarea
                id='number' 
                placeholder="0000 0000 0000 0000" 
                value={context.creditCardNumber}
                onChange={onCreditCardNumber}
                />

                <label htmlFor='date'>Expiration Date</label>
                <textarea
                id='date' 
                placeholder="MM/DD" 
                value={context.expirationDate}
                onChange={onExpirationDate}/>

                <label htmlFor='security'>Security Number</label>
                <textarea
                id='security'
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