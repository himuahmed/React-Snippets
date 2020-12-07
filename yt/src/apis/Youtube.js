import Axios from 'axios';

const KEY = 'google key';


export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxresult: 5,
        key: KEY,
    }
});
