import axios from 'axios';
import { COINGECKO_API_URL } from './Constants';
const AxiosInstance = axios.create({

    baseURL: COINGECKO_API_URL,
    
})

export default AxiosInstance;