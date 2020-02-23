// General api to access data
import axios from 'axios';
import { ApiEndpoint } from './ApiConstants';

import * as mocks from '../api/mock/';

//API mocks

export default function api(URL, method, token, params, data) {
    let options;
    options = {
        headers: {
            ...(token && {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `bearer ${token}`
            })
        },
        ...(params && { params: params }),
        ...(data && { data: data }),

    };
    
    return axios.create({
        baseURL: ApiEndpoint.BASE_URL,
        method: method,
        url: URL,
        ...options
    });
}
