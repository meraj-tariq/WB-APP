
// import axios from 'axios';
const apiUrl = 'http://172.24.30.130/GetContent.aspx?type=';


export const DashboardServices = {
    getMainScreenStatsV2: async () => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
        };

        try {
            const response = await fetch(`${apiUrl + "getMainScreenStatsV2"}`, requestOptions);
            const result_1 = await response.text();
            return result_1;
        } catch (error) {
            return console.log('error', error);
        }
    }



}



