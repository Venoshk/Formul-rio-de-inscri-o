
import { useContext } from "react";
import CardForm from "../CardForm/CardForm";
import CardImage from "../CardImage/CardImage";
import "./Card.scss";
import AppContext from "../context/AppContext";


export default function Card() {
    const {isAlertCard} = useContext(AppContext)
    return (
        <div className={`card_container ${isAlertCard ? 'card_container_active' : ''}`}>
            <CardForm />
            <CardImage />
        </div>

    );
}
