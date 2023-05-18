import React from 'react';

const VideoDetail = ({ video }) => {

    if(video) {

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <div>
                <div className='ui embed'>
                    <iframe width="560" height="315" 
                        src={videoSrc} 
                        alt={video.snippet.title}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    } else {
        return <div>Loading...</div>
    }
    
}

export default VideoDetail;