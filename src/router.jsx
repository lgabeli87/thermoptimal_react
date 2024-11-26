import React from 'react'
import { createBrowserRouter, Link, NavLink } from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Quotation from "./pages/Quotation"
import About from "./pages/About"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Layout from "./Layout"

export const router = createBrowserRouter([
    { element: <Layout />, 
    children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/quotation", element: <Quotation />},
        { path: "/about", element: <About />},
        { path: "/services", element: <Services />},
        { path: "/gallery", element: <Gallery />},
        { path: "/privacypolicy", element: <PrivacyPolicy />}
    ]}
])