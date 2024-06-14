import React from "react";
import { createContext, useState } from "react";

export const InformationContext = createContext();

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
            
        }} >
            {children}

        </InformationContext.Provider>
    )

};