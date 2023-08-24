import axios from 'axios'
export const axiosApi = axios.create({
    baseURL: 'https://ecommerce-myn3.onrender.com/data'
})