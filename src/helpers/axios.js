import axios from "axios";
import { api } from "../baseURL";

const token = window.localStorage.getItem('token');
// alert(token)
console.log(token)
const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

export default axiosInstance;
