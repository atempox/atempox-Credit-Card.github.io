import React from "react";
import { createContext, useState } from "react";

export const InformationContext = createContext();
export const numberInCard = (string) => {
    let result = '';
    for(let i = 0; i < string.length; i++) {
        if(i > 0 && i % 4 === 0){
            result += ' ';
        }
        result += string[i]
    }
    return result
};
export const InformationProvider = ({children}) => {

    const [name, setName] = React.useState();
    const [creditCardNumber, setCreditCardNumber] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState();
    const [securityNumber, setSecurityNumber] = React.useState();

    return(
        <InformationContext.Provider value={{
            name,
            setName,
            creditCardNumber,
            setCreditCardNumber,
            expirationDate,
            setExpirationDate,
            securityNumber,
            setSecurityNumber,
            numberInCard
            
        }} >
            {children}

        </InformationContext.Provider>
    )

};