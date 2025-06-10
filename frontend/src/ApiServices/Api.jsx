import axios from 'axios';
import { useAuth } from '../authContest/AuthContext.jsx';
import {useNavigate} from 'react-router-dom'
const useApi =  () => {
   const {accessToken, logout} = useAuth();
   const navigate = useNavigate();
    
    const api = axios.create({
        baseURL : 'http://localhost:2000/api/user',
        headers : {
            "Content-Type" : 'application/json'
        },
    });

    api.interceptors.request.use(
         (config) => {
            if(accessToken){
                ///console.log("access token:", accessToken);
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // api.interceptors.response.use(
    //     (response) =>response,
    //     (error) =>{
    //         if(error.response && error.response.status === 401){
    //             //token has expired or is invalid
    //             logout();
    //             navigate('/login');
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    return api;
}


export default useApi;