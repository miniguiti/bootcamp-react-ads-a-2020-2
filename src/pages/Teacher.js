import React from 'react'
import NavBar from '../components/NavBar';
import VideoListItem from '../components/VideoListItem';

function Teacher() {
    return (
        <div className="teacher">
            <NavBar/>
            <div className="edit">
                <div className="edit-container">
                    <div className="foto"></div>
                    <div className="info">
                        <h1>BandTube</h1>
                        <h2>50000 inscritos</h2>
                    </div>

                    <button className="btn-g">PERSONALIZAR CANAL</button>
                    <button className="btn-p">GERENCIAR CANAL</button>
                </div>
            </div>
            <div className="video-area">
                <div className="video-list">
                    <h5>Videos enviados</h5>
                    <VideoListItem titulo="Titulo aula bootcamp 01" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                    <VideoListItem titulo="Titulo aula bootcamp 02" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                    <VideoListItem titulo="Titulo aula bootcamp 03" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                    <VideoListItem titulo="Titulo aula bootcamp 04" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                    <VideoListItem titulo="Titulo aula bootcamp 05" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                    <VideoListItem titulo="Titulo aula bootcamp 06" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                    <VideoListItem titulo="Titulo aula bootcamp 07" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                    <VideoListItem titulo="Titulo aula bootcamp 08" subtitulo="Subtitulo teste - Descrição breve aqui" isTeacher/>
                </div>
            </div>
        </div>
    );
}

export default Teacher;