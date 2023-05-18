import axios from 'axios';

const KEY = 'AIzaSyDLcxQqH7oLCIg7nRsTaS80aHGN2o_THFY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

