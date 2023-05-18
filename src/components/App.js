import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null}

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>     
        ); 

    }

    ///Deafult search item while Loading.
    componentDidMount() {
        this.onSearchSubmit('buildings');
    }

    onSearchSubmit = async (term) => {
        console.log("App Component submit");
        console.log(term);

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response);
        ////Defaulting first video to set selected video
        this.setState({ videos: response.data.items,  selectedVideo: response.data.items[0]})

    }

    onVideoSelect = (video) => {
        console.log("From App video select");
        console.log(video);

        this.setState({ selectedVideo: video})
    }
}

export default App;