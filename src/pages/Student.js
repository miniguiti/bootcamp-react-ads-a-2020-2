import React from 'react'
import NavBar from '../components/NavBar'
import VideoListItem from  '../components/VideoListItem'

function Student(){
    return( 
    <div className="student">
        <NavBar/>
      <div className="video-area">
        <div className="video-current">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/watch?v=Ay8sBTj2dmw&ab_channel=BandTec-FaculdadedeTecnologiaBandeirantes"
          >
          </iframe>
        </div>
        <div className="video-list">
         <VideoListItem titulo="Aula do bootcamp 01" subtitulo="Descrição da aula aqui"/>
         <VideoListItem titulo="Aula do bootcamp 02" subtitulo="Descrição da aula aqui"/>
         <VideoListItem titulo="Aula do bootcamp 03" subtitulo="Descrição da aula aqui"/>
         <VideoListItem titulo="Aula do bootcamp 04" subtitulo="Descrição da aula aqui"/>
         <VideoListItem titulo="Aula do bootcamp 05" subtitulo="Descrição da aula aqui"/>
         <VideoListItem titulo="Aula do bootcamp 06" subtitulo="Descrição da aula aqui"/>
         <VideoListItem titulo="Aula do bootcamp 07" subtitulo="Descrição da aula aqui"/>
        </div>
      </div>
    </div>
    );
}

export default Student;
