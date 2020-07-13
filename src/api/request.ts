import axios from 'axios'

// import baseURL from '@/utils/serverAdress'

const request = axios.create({
    // baseURL,
    timeout: 30000 ,// request 
    withCredentials: true ,
    method: 'get'
})



export default request

