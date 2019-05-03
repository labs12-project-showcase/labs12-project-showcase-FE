import axios from 'axios';

/**
 * Retrieves the JWT from `localStorage` and adds it
 * to the `headers` in the `axios` call.  
 * Example use: `import axiosAuth from 'path'; axiosAuth().put(...);`
 */
export default function() {
    const token = localStorage.getItem('backendToken');

    return axios.create({
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
};