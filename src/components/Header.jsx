import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-szoveggel.png'
import logoDark from '../assets/logo-szoveggel-darkmode.png'
import MenuButton from './MenuButton'

export default function Header(props) {

    const changeMode = props.changeMode
    const darkMode = props.darkMode
    const switchIcon = darkMode ? "fa-solid fa-toggle-on switch" : "fa-solid fa-toggle-off switch"
    const sunMoon = darkMode? "fa-solid fa-moon" : "fa-solid fa-sun"

    return(
        <header className={darkMode ? "darkMode" : null}>
            <div className="logo-switch">
                <img src={darkMode ? logoDark : logo} className="logo-img"/>
                <div>
                    <i className={sunMoon}/>
                    <i className={switchIcon} onClick={changeMode}/>
                </div>
            </div>
            <nav>
                <NavLink to="/"><MenuButton icon="fa-solid fa-house" text="Főoldal"/></NavLink>
                <NavLink to="/about"><MenuButton icon="fa-solid fa-circle-info" text="Rólunk"/></NavLink>
                <NavLink to="/services"><MenuButton icon="fa-solid fa-screwdriver-wrench" text="Szolgáltatások"/></NavLink>
                <NavLink to="/gallery"><MenuButton icon="fa-solid fa-image" text="Referenciák"/></NavLink>
                <NavLink to="quotation"><MenuButton icon="fa-solid fa-file-signature" text="Árajánlat"/></NavLink>
                <NavLink to="/contact"><MenuButton icon="fa-solid fa-envelope" text="Kapcsolat"/></NavLink>
            </nav>
        </header>
    )
}