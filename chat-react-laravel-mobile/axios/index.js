import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ax = axios.create({          
         baseURL: 'http://192.168.1.104:8000/api/'      
      
});

ax.interceptors.request.use(async function (config) {
        // const token = null
        const token = await AsyncStorage.getItem('_token')
        if (token) {
                config.headers.common['Authorization'] = 'Bearer ' + token;
        }
        return config;
}, function (error) {
        // Do something with request error
        return Promise.reject(error);
});

export default ax;