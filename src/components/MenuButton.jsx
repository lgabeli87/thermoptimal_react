import React from 'react'

export default function MenuButton(props){

    const icon = props.icon
    const text = props.text

    return (
        <div className="menu-button">
            <i className={icon}></i>
            <p className="menubutton-text">{text}</p>
        </div>
    )
}