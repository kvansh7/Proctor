import React from 'react';
import './button.css'

const Button = ({text, onClickFunction}) => {
    if(!text) text = "Button";

    return (
        <div className="primary-button" onClick={onClickFunction}>
            {text}
        </div>
    )
}

export default Button
