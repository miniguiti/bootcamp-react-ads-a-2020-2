import React from 'react'
import NavBar from '../components/NavBar'

function NotFound() {
    return (
        <>
            <NavBar />
            <div className="not-found">
                <div className="not-found-info">
                    <h1>Oops!</h1>
                    <h2>Page not found</h2>
                    <h3>Alguma frase que faça sentido fica qui</h3>
                    <button className="btn-rosa">Voltar</button>
                </div>
                <div className="not-found-img"></div>
            </div>
        </>
    );
}

export default NotFound;