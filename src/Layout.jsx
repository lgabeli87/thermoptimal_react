import React from 'react'
import { Outlet, useLocation ,useOutlet } from 'react-router-dom' 
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Layout() {

    const [darkMode, setDarkMode] = React.useState(false)
    const location = useLocation();  // Get the current location to ensure the route is changing.
    const [isTransitioning, setIsTransitioning] = React.useState(false); // To track if transition is happening
    const currentOutlet = useOutlet();



    function changeMode() {
        setDarkMode((prevState) => !prevState)
    }

    const classes = `website-wrapper ${darkMode ? "darkMode" : null}`

    /* Set darkMode based on system preference*/
    React.useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setDarkMode(mediaQuery.matches);
    }, []);

    return (
        <div className={classes}>
          <Header changeMode = {changeMode} darkMode = {darkMode}/>
          <TransitionGroup className="page-transition">
          <CSSTransition
            key={location.pathname}  // This ensures a new key is generated on route change.
            classNames="slide"       // This will match the CSS class names we define
            timeout={500}            // The duration of the transition
          >
          <main>
              {currentOutlet}
          </main>
          </CSSTransition>
          </TransitionGroup>
          <Footer/>
        </div>
    )
}