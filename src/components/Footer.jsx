import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {

    return (
        <footer>
            <div>
                <p>©2024<br/>Webdesign by GL</p>
            </div>
            <div>
            <NavLink to="/privacypolicy">Adatkezelési tájékoztató</NavLink>
            </div>
        </footer>
    )
}