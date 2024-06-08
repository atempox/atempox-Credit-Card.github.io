import './index.css'
import React from 'react';

const Form = () => {

    const [name, setName] = React.useState("");
    const [creditCardNumber, setCreditCardNumber] = React.useState("");
    const [expirationDate, setExpirationDate] = React.useState('');
    const [securityNumber, setSecurityNumber] = React.useState();

function onName (event) {
    setName(event.target.value)
    };

function onCreditCardNumber (event) {
    setCreditCardNumber(event.target.value)
    };
function onExpirationDate (event) {
    setExpirationDate(event.target.value)
    };
function onExpirationDate (event) {
    setExpirationDate(event.target.value)
    }; 
function onSecurityNumber (event) {
    setSecurityNumber(event.target.value)
    }; 

    return(
        <div id='userInformation'>
            <h1>Your Information</h1>
            <form>
                <label>Name</label>
                <textarea
                type="text"
                value={name}
                onChange={onName} />

                <label>Credit Card Number</label>
                <textarea 
                placeholder="0000 0000 0000 0000" 
                value={creditCardNumber}
                onChange={onCreditCardNumber}
                />

                <label>Expiration Date</label>
                <textarea 
                placeholder="MM/DD" 
                value={expirationDate}
                onChange={onExpirationDate}/>

                <label>Security Number</label>
                <textarea
                placeholder='000'
                value={securityNumber} 
                onChange={onSecurityNumber}/>

                <button
                type='submit'
                >complete</button>
            </form>            
        </div>
    )
};

export { Form };