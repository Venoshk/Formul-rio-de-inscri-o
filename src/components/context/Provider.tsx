import React, { useState, ReactNode } from "react";
import AppContext from "./AppContext";

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [erro, setErro ] = useState(false);
    const [isAlertCard, setIsAlertCard] = useState(false);
    const [email, setEmail] = useState("");
    const value = {
        erro,
        setErro,
        isAlertCard, 
        setIsAlertCard,
        email, setEmail
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
