import React from 'react';

function VideoListItem(props){
    return(
        <>
             <div className="video-list-item">
                <div className="video-mini"></div>
                <h1>{props.titulo}</h1>
                <h3>{props.subtitulo}</h3>
             </div>
        </>
    );
}

export default VideoListItem;