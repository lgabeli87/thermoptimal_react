import React from 'react'
import adamPortre from '../assets/adam_portre1-3.jpg'

export default function About() {
    return (
            <div className="container">
            <h1>Rólunk</h1>
            <p>A családi vállalkozásunkban eltöltött 15 évem alatt az épületgépészet számos területén kipróbálhattam magam kivitelezőként és ügyvezetőként egyaránt, így rengeteg tapasztalatot gyűjthettem.</p>
            <p>Az így megszerzett tudással 2022-ben indítottam el saját vállalkozásomat.</p>
            <p>Célunk, hogy mindenki számára optimális, költséghatékony fűtési megoldásokat találjunk, legyen szó új építésű családi házakról, felújításról, fűtéskorszerűsítésről vagy akár társasházak és közintézmények épületgépészeti munkálatairól.</p>
            <p>Ahogy mindenki egyéniség, úgy minden otthon is egyedi – ezt figyelembe véve nem egy sablon alapján dolgozunk, hanem az egyéni igényeket és az épület adottságait összehangolva személyre szabott megoldásokat kínálunk.</p>
            <p>Az alaposság és a precizitás mellett fontos számomra, hogy a technika fejlődését követve lépést tartsunk az egyre bővülő és megújuló kínálattal.</p>
            <p>Forduljon hozzánk bizalommal, hogy az Ön számára is megtalálhassuk a legjobb megoldást!</p>
            <p><img src={adamPortre} className="adamPortre" /></p>
            <p style={{textAlign: 'center'}}><i>Bándi Ádám<br />Ügyvezető, Thermoptimal Kft.</i></p>
            </div>

    )
}