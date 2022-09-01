import { children } from "react";
import React from "react";
import './css/button.scss';

export const Button = ({title, onClick}) => {
    return (
        <button className="btn" onClick={onClick}>
            {title}
        </button>
    )
};

export default Button