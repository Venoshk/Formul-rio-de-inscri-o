import React, { useContext } from 'react';
import Button from '../Button/Button';
import './Form.scss';
import AppContext from '../context/AppContext';


export default function Form() {
    const { erro, setErro, setIsAlertCard, email, setEmail } = useContext(AppContext); // Verifique se está desestruturando corretamente

    const validateEmail = (email: string): boolean => {
        return /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setEmail(value);
        setErro(!validateEmail(value));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setErro(true);
        }else{
            setIsAlertCard(true);
        }
       
        
    };

    return (
        <>
        <form className={`form`} onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            {erro && <p className="error-message">Invalid email address</p>}
            <input
                value={email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="email@company.com"
                className={erro ? "alert" : ""}
            />
           
            <Button title="Subscribe to monthly newsletter" />
        </form>
        </>
    );
}
