import axios, {AxiosRequestConfig} from 'axios';

export const resource = ({url, method, data, headers}: AxiosRequestConfig) =>
    axios({
        url,
        method,
        headers,
        data
    });
