import React from 'react'
import NavBar from '../components/NavBar'

function Logout() {
    return (
        <>
        <NavBar/>
            <div className="end">
                <div className="end-info">
                    <h1>Até logo, Giu!</h1>
                    <h2>Nos vemos nas próximas aulas</h2>
                    <button className="btn-rosa">Voltar</button>
                </div>
                <div className="end-img"></div>
            </div>
        </>

    );
}

export default Logout;