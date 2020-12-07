import axios from 'axios';
export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID pYoO_KK5-v7Acp-NfMn5SKc6CGwu49Vv1b0DAXs30LQ'
    }
});