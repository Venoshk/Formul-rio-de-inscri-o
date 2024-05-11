import { useContext } from "react";
import Button from "../Button/Button";
import IconSuccess from "../../assets/images/icon-success.svg";
import "./AlertCard.scss";
import AppContext from "../context/AppContext";

export default function AlertCard() {
    const { isAlertCard, email} = useContext(AppContext);
    
    if(!isAlertCard){
        return null;
    }

    return (
        <div className={`container_alert ${isAlertCard ? '' : 'alert_action'}`}>
            <div className="context_alert">
                <img src={IconSuccess} alt="Success Icon" />
                <h2>Thank you for subscribing!</h2>
                <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription</p>

                <div className="btn_alert">
                    <Button title="Dismiss message" />
                </div>
            </div>
            
        </div>
    );
}
