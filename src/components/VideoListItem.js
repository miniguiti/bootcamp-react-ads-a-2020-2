import React from 'react';

function VideoListItem(props) {
    return (
        <>
            <div className={props.isTeacher ? 'video-list-item' : 'video-list-item sem-icone'}>
                <div className="video-mini"></div>
                <h1>{props.titulo}</h1>
                <h3>{props.subtitulo}</h3>
                <i className="far fa-trash-alt"></i>
            </div>
        </>
    );
}

export default VideoListItem;