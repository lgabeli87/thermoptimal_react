import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Quotation() {
    const [formData, setFormData] = React.useState(
        {nev: "", emailCim: "", telepules: "", telefonSzam: "", szolgaltatas: "", uzenet: "", adatkezeles: false, honeypot: ""}
    )

    const id = React.useId
    
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();  // Prevent form from reloading the page
    
        // Construct the data object to send
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.nev);
        formDataToSend.append('email', formData.emailCim);
        formDataToSend.append('message', formData.uzenet);
        formDataToSend.append('settlement', formData.telepules);
        formDataToSend.append('tel', formData.telefonSzam);
        formDataToSend.append('service', formData.szolgaltatas);
        formDataToSend.append('consent', formData.adatkezeles ? 'igen' : 'nem');
        formDataToSend.append('honeypot', formData.honeypot); // Honeypot field
    
        // Send the data to PHP handler
        fetch('email_handler.php', {
            method: 'POST',
            body: formDataToSend,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Üzenetét elküldtük!');
                setFormData({
                    nev: "",
                    emailCim: "",
                    telepules: "",
                    telefonSzam: "",
                    szolgaltatas: "",
                    uzenet: "",
                    adatkezeles: false,
                    honeypot: ""
                });
            } else {
                alert('Az üzenet elküldése során hiba lépett fel.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Az üzenet elküldése során hiba lépett fel, kérjük, próbálkozzon később.');
        });
    }
    
    return (
            <div className="container">
                <h1>Árajánlat</h1>
                <h2>Kérjük, töltse ki az alábbi űrlapot, hogy felvehessük Önnel a kapcsolatot:</h2><br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor={id + "-nev"}>Név:</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="nev"
                        value={formData.nev}
                        id={id + "-nev"}
                        required
                    />
                    <label htmlFor={id + "-email"}>E-mail:</label>
                    <input
                        type="email"
                        onChange={handleChange}
                        name="emailCim"
                        value={formData.emailCim}
                        id={id + "-email"}
                        required
                    />
                    <label htmlFor={id + "-telepules"}>Település:</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="telepules"
                        value={formData.telepules}
                        id={id + "telepules"}
                        required
                    />
                    <label htmlFor={id + "-telefonszam"}>Telefonszám:</label>
                    <input
                        type="tel"
                        onChange={handleChange}
                        name="telefonSzam"
                        value={formData.telefonSzam}
                        id={id + "-telefonszam"}
                    />
                    <label htmlFor={id + "-szolgaltatas"}>Szolgáltatás:</label>
                    <select 
                        id={id+ "szolgaltatas"}
                        value={formData.szolgaltatas}
                        onChange={handleChange}
                        name="szolgaltatas"
                    >
                        <option value="Új építésű családi ház">Új építésű családi ház</option>
                        <option value="Társasházak és közintézmények">Társasházak és közintézmények</option>
                        <option value="Fűtéskorszerűsítés">Fűtéskorszerűsítés</option>
                        <option value="Rendszer karbantartása, gépi vegyszeres tisztítása">Rendszer karbantartása, gépi vegyszeres tisztítása</option>
                    </select>
                    <label htmlFor={id + "uzenet"}>Üzenet:</label>
                    <textarea 
                        value={formData.uzenet}
                        onChange={handleChange}
                        name="uzenet"
                        id={id + "uzenet"}
                    />
                    <input 
                        type="checkbox" 
                        id={id + "adatkezeles"}
                        name="adatkezeles" 
                        checked={formData.adatkezeles}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="honeypot"
                        onChange={handleChange}
                        value={formData.honeypot}
                        style={{display: "none"}}
                        id={id + "honeypot"}
                    />

                    <label htmlFor={id + "adatkezeles"}>Hozzájárulok, hogy az adatkezelő a fent megadott adataimat a GDPR feltételei szerint kezelje.<br />További információ: <NavLink to="/privacypolicy">Adatkezelési tájékoztató</NavLink></label>
                    <br />
                    <button className="submitBtn">Küldés</button>
                </form>
            </div>
    )
}