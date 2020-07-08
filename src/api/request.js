import axios from 'axios'

import baseURL from '@/utils/serverAdress'

const service = axios.create({
    baseURL,
    timeout: 30000 // request 
})



export default service

