
import axios from 'axios';
const apiUrl = 'http://192.168.1.197:2022/api';
// const apiUrl = 'http://192.168.2.100:2022/api';



export const UserServices = {
    createUser: async (data) => {
        return axios.post(apiUrl + '/createUser', data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },



    getAllUser: async () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${apiUrl}/getAllUser`, requestOptions);
            const result_1 = await response.text();
            return result_1;
        } catch (error) {
            return console.log('error', error);
        }
    },

    deleteUser: async (user_id) => {
        return axios.post(apiUrl + '/deleteUser', { user_id }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },

    updateUser: async (data) => {
        return axios.post(apiUrl + '/updateUser', data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },

    loginUser: async (data) => {
        return axios.post(apiUrl + '/loginUser', data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

