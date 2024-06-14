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
                <div id='conteinerLabels'> 

                <label htmlFor='name'>Name</label>
                <input
                type="text"
                id='name'
                value={context.name}
                onChange={onName} />

                <label htmlFor='number'>Credit Card Number</label>
                <input
                id='number' 
                placeholder="0000 0000 0000 0000" 
                value={context.creditCardNumber}
                onChange={onCreditCardNumber}
                />

                <label htmlFor='date'>Expiration Date</label>
                <input
                id='date' 
                type='text'
                placeholder="MM/DD" 
                value={context.expirationDate}
                onChange={onExpirationDate}/>

                <label htmlFor='security'>Security Number</label>
                <input
                id='security'
                type='text'
                placeholder='000'
                value={context.securityNumber} 
                onChange={onSecurityNumber}/>
                </div>
                <div id='button'> 
                <button
                type='submit'
                >complete</button>
                </div>
            </form>            
        </div>
    )
};

export { Form };