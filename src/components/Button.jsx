import { children } from "react";
import React from "react";
import './css/button.scss';

export const Button = ({onClick, type, title, className}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {title}
        </button>
    )
};

export default Button