import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
const axiosSucre = axios.create({
    baseURL: 'http://localhost:5000'
})
const useSucre = () => {
    // const navigate = useNavigate()
    const { logOut } = useAuth()
    axiosSucre.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    axiosSucre.interceptors.response.use(function (response) {
        // console.log(response);
        return response;
    }, async (error) => {

        // console.log('llllllllllllllllllll', error);
        const status = error?.response?.status
        // console.log(status);
        if (status === 401 || status === 403) {
            // console.log('Bangladesh');
            await logOut()
            // navigate('/login')
        }
        return Promise.reject(error);
    });
    return axiosSucre
};

export default useSucre;