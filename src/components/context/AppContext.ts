import React, { createContext, useContext } from "react";

interface ContextType {
    erro: boolean;
    setErro: React.Dispatch<React.SetStateAction<boolean>>;
    isAlertCard: boolean;
    setIsAlertCard: React.Dispatch<React.SetStateAction<boolean>>;
    email: string,
    setEmail:React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<ContextType>({
    erro: false,
    setErro: () => {},
    isAlertCard: false,
    setIsAlertCard: () => {}, // Verifique se está corretamente tipado
    email: "",
    setEmail: () => {}
});

export const useAppContext = () => useContext(AppContext);

export default AppContext;
