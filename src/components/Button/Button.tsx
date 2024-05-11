import React from "react";
import "./Button.scss"
interface ButtonType {
  title: string;
}

const Button: React.FC<ButtonType> = ({ title}) => {
  
  return (
        <button className="btn" type="submit"><span>{title}</span></button>
    )
};

export default Button;
