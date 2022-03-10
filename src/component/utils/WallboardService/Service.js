import axios from 'axios';
import { Base_URL } from '../base';


export const WallboardServices = {
    getWaitCall: async (data) => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${Base_URL}/getWaitCall`, requestOptions);
            const result_1 = await response.text();
            return result_1;
        } catch (error) {
            return console.log('error', error);
        }
    },
    getMainScreenStatsV1: async (data) => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${Base_URL}/getMainScreenStatsV1`, requestOptions);
            const result_1 = await response.text();
            return result_1;
        } catch (error) {
            return console.log('error', error);
        }
    },
    getMainScreenStatsV2: async (data) => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${Base_URL}/getMainScreenStatsV2`, requestOptions);
            const result_1 = await response.text();
            return result_1;
        } catch (error) {
            return console.log('error', error);
        }
    },
    getSliderStat: async (data) => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${Base_URL}/getSliderStat`, requestOptions);
            const result_1 = await response.text();
            return result_1;
        } catch (error) {
            return console.log('error', error);
        }
    },
}



