import Axios from 'axios';

const KEY = 'AIzaSyDo7h71LeX-y1ozdzi7kW7xhiMkHGzvw0I';


export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxresult: 5,
        key: KEY,
    }
});