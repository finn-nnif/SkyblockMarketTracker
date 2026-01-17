import 'dotenv/config';
const API_KEY = process.env.API_KEY;

import { hp } from '../constants/endpoints.js';

async function get_request(endpoint) {
    const url = `${hp.BASE_URL}${endpoint}?key=${API_KEY}`
    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error(error.message);
    }
}

let b = hp.SKYBLOCK.BAZAAR
get_request(b)