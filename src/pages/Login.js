import React, { useState } from 'react'

function Login({change}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isTeacher, setIsTeacher] = useState(false);


    function submitData(){
        let data = {
            login,
            password,
            isTeacher
        }

        change(data);
    }

    return (
        <div className="login">
            <div className="logo-login">
                <i className="fab fa-youtube"></i>
                <h1>BandTube<span>BR</span></h1>
            </div>

            <h1>Fazer Login</h1>
            <button className="btn-prof" onClick={() => setIsTeacher(!isTeacher)}>Professor</button>
            <button className="btn-aluno">Aluno</button>
            <div>
                <label htmlFor="login">Login:</label>
                <input id="login" type="text" onChange={(e) => setLogin(e.target.value)} />
            </div>

            <label htmlFor="pass">Senha:</label>
            <input id="pass" type="text" onChange={(e) => setPassword(e.target.value)} />
            <button className="btn-entrar" onClick={submitData}>Entrar</button>
        </div>
    );
}

export default Login;