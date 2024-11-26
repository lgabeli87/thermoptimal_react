import React from 'react'
import fbLogo from '../assets/facebook-icon.png'

export default function Contact() {
    return (
            <div className="container">
            <h1>Kapcsolat</h1>
            
            <h3 style={{textAlign: 'center'}}>
              Thermoptimal Kft.<br />
              2085 Pilisvörösvár, Lahner György u. 8.<br />
              +3630 534 9245<br />
              E-mail: <a href="mailto:info@thermoptimal.hu">info@thermoptimal.hu</a><br />
              <a href="https://www.facebook.com/profile.php?id=100088495863186"><img src={fbLogo} style={{width: '50px', marginTop: '20px', marginBottom: '20px'}} /></a><br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5853585304394!2d18.889529216268574!3d47.61475169540701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a774370c4561f%3A0xf688bf576c76d1d7!2zUGlsaXN2w7Zyw7ZzdsOhciwgTGFobmVyIEd5w7ZyZ3kgdXRjYQ!5e0!3m2!1shu!2shu!4v1680284286381!5m2!1shu!2shu" width="400" height="300" style={{border:0, textAlign: 'center'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </h3>
            
            </div>

    )
}