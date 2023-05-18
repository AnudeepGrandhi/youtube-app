import './VideoItem.css';
import React from 'react';


const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div class="video-item item" onClick={() => onVideoSelect(video)}>
            <img class="ui image" src={video.snippet.thumbnails.medium.url} />
            <div class="content">
                <div class="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
    
}

export default VideoItem;