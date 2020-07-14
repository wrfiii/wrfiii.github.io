import axios from 'axios'

// import baseURL from '@/utils/serverAdress'

const request = axios.create({
    // baseURL,
    timeout: 30000,// request 
    withCredentials: true,
  
})

request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

request.interceptors.response.use(function (response: any) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default request

