import React from 'react'
import Carousel from '../components/Carousel'

export default function Home() {
    return (
            <>
            <Carousel />
                <div className="container">
                    <h1><b>Cégünk vállalja családi házak, közintézmények és társasházak <br /><span className="narancs">teljes körű épületgépészeti kivitelezését:</span></b><br /></h1>
                    <ul>
                        <li>Víz-, gáz- és fűtésszerelés</li>
                        <li>Központi szellőztető rendszerek</li>
                        <li>Központi porszívók</li>
                        <li>Radiátoros és felületfűtési/hűtési rendszerek</li>
                        <li>Kondenzációs kazán</li>
                        <li>Társasházak alap- és felszálló vezetékeinek kiépítése/cseréje</li>
                        <li>Hőszivattyús rendszerek telepítése (akár meglévő fűtési rendszerre is)</li>
                    </ul>
                    <p>Felmérést követően egyéni igényekhez igazítva vázoljuk a <b><span className="kek">legoptimálisabb megoldásokat</span></b>, szem előtt tartva a <b><span className="narancs">minőség és a kedvező ár</span></b> egyensúlyát.</p>
                </div>
            </>
            )
}