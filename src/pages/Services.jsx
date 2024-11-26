import React from 'react'

export default function Services() {

    const [isVisibleArr, setIsVisibleArr] = React.useState([false, false, false, false])

    function toggleVisible(i) {
        setIsVisibleArr(prevState => {
            const newArray = [...prevState]
            newArray[i] = !newArray[i]
            return newArray
        })
    }

    return (
            <div className="container">
                <h1>Szolgáltatások</h1>
                <div className="service-btn">
                    <h1 className="service-title" onClick={() => toggleVisible(0)}>{!isVisibleArr[0] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Új építésű családi házak</h1>
                    {
                    isVisibleArr[0] &&
                    <div>
                        <p>Új építésű családi házak <b><span className="narancs">teljes körű épületgépészeti kivitelezését</span></b> vállaljuk az alapvezetékektől a szerelvényezésig.</p>
                        <p>Gondoskodunk otthona kényelméről, melynek alapja a <span className="kek"><b>megfelelő hőmérséklet és szellőzés</b></span>.<br />
                        Az építész vagy épületgépész terve alapján, az Önnel való egyeztetés után készítünk egy árajánlatot.<br />
                        A munkafolyamatok ütemezését a szakágakkal egyeztetve tervezzük meg.</p>
                        <p>
                            <b>Amit vállalunk:</b><br />
                            <ul>
                            <li>Vízvezetékek és lefolyók szerelése</li>
                            <li>Gázvezetékek szerelése</li>
                            <li>Központi fűtés</li>
                            <li>Hőszivattyú</li>
                            <li>Kondenzációs gázkazán</li>
                            <li>Fatüzelésű kazánok, kandallók</li>
                            <li>Felületfűtési/hűtési rendszerek</li>
                            <li>Központi szellőztetőrendszerek és porszívók</li>
                            </ul>
                        </p>
                    </div>
                }
                </div>
                <div className="service-btn">
                    <h1 className="service-title" onClick={() => toggleVisible(1)}>{!isVisibleArr[1] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Társasházak és közintézmények</h1>
                    {isVisibleArr[1] &&
                    <div>
                        <p>A víz- és fűtési vezetékek esetében kizárólag <span className="narancs"><b>kimagasló minőségű</b></span> PP-R rendszerekkel dolgozunk.</p>
                        <p>A csövek és az azokhoz tartozó idomok is <span className="kek"><b>kémiailag semleges</b></span> anyagokból készülnek, nem lépnek reakcióba a vízzel és a benne lévő vegyi anyagokkal, így elkerülhető a korrózió okozta meghibásodás, ezzel évtizedekkel növelve a rendszer élettartamát. Mivel az ivóvízbe sem oldódik ki a csövekből semmilyen vegyi anyag, az <span className="narancs"><b>egészségre sincs kedvezőtlen hatással</b></span>.</p>
                        <p>Nem utolsó sorban fontos szempont az is, hogy a PP-R rendszerek gyártása során az <span className="kek"><b>ökológiai lábnyom minimalizálására</b></span> is ügyelnek, környezetünk megóvása érdekében.</p>
                        <p>A beruházás garantáltan megtérül, mivel ezekben a csövekben nem tehet kárt rozsda vagy vízkő, így nem lyukadnak ki, és a jövőben karbantartási költségekkel sem kell számolni.</p>
                        <p>
                            <b>Amit vállalunk:</b><br />
                            <ul>
                            <li>Víz- és lefolyó alapvezetékek/strangvezetékek kiépítése, cseréje</li>
                            <li>Fűtési alap- és strangvezetékek cseréje</li>
                            </ul>
                        </p>
                    </div>
                    }
                </div>
                <div className="service-btn">           
                    <h1 className="service-title" onClick={() => toggleVisible(2)}>{!isVisibleArr[2] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Fűtéskorszerűsítés</h1>
                    {isVisibleArr[2] &&
                    <div>
                        <p>A fűtéskorszerűsítés azáltal, hogy <span className="narancs"><b>csökkenti a havi fűtésszámlát</b></span>, mindenképpen egy megtérülő, környezettudatos döntés, amely <span className="kek"><b>növeli az ingatlan értékét</b></span> is.</p>
                        <p>Az Ön által kiválasztott fűtéskorszerűsítési megoldás megvalósításához először felmérjük az otthonában már meglévő rendszert és az ingatlan adottságait. Ha szükséges, készíttetünk az épületről egy hőszükségletszámítást is. Ezek alapján készítjük el az árajánlatot.</p>
                        <p>Ha a beruházás mértéke túl nagy lenne, illetve nem tűnne költséghatékonynak, javaslatot teszünk egyéb alternatívákra is.</p>
                        <p>
                            <b>Amit vállalunk:</b><br />
                            <ul>
                            <li>Régi típusú gázkazán cseréje kondenzációs kazánra</li>
                            <li>Vegyes tüzelésű kazán/vízteres kandalló beépítése</li>
                            <li>Hőszivattyús rendszerek telepítése </li>
                            <li>Elektromos kazán </li>
                            <li>Korszerű fűtési szabályozások telepítése - automatizálás</li>
                            </ul>
                        </p>
                    </div>
                    }
                </div>
                <div className="service-btn">
                    <h1 className="service-title" onClick={() => toggleVisible(3)}>{!isVisibleArr[3] ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-down"></i>} Rendszer karbantartása, gépi vegyszeres tisztítása</h1>
                    {isVisibleArr[3] &&
                    <div>
                        <p>A régi fűtési rendszerekben felhalmozódó vasiszap, vízkő és egyéb szennyeződések áramlási problémákat okozhatnak, csökkentve ezzel a fűtés hatékonyságát. A lerakódások akár bele is éghetnek a hőcserélőkbe és a kazánokba</p>
                        <p>Arra utaló jelek, hogy szükség van a <span className="narancs"><b>fűtési rendszer átmosására:</b></span><br />
                        <ul>
                        <li>A kazán szokatlan hangokat ad ki, nehezen vagy egyáltalán nem indul be</li>
                        <li>A kazán rendesen működik, viszont a radiátorok/padlófűtési területek langyosak vagy hidegek, a lakásban pedig hűvös van</li>
                        </ul></p>
                        <p>A problémát <span className="kek"><b>gépi vegyszeres mosással</b></span> hárítjuk el. </p>
                            <p>Évente ajánlott <span className="narancs"><b>karbantartási feladatok:</b></span><br />
                            <ul>
                            <li>A fűtési és ivóvizes tágulási tartályok nyomásának ellenőrzése</li>
                            <li>Az iszapleválasztók/szűrők tisztítása</li>
                            <li>Légtelenítés</li>
                            </ul>
                        </p>
                        </div>
                    }
                </div>
            </div>

    )
}