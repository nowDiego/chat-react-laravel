import axios from 'axios';

const ax = axios.create({    
        // withCredentials:true ,
         baseURL: 'http://localhost:8000/api/'       
      
});

ax.interceptors.request.use(function (config) {
        const token = localStorage.getItem('_token')       

        if (token) {
                config.headers.common['Authorization'] = 'Bearer ' + token;        }

        return config;
}, function (error) {
        // Do something with request error
        return Promise.reject(error);
});

export default ax;

