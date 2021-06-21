import axios, {AxiosRequestConfig} from 'axios';

export const resource = ({url, method, data, headers}: AxiosRequestConfig) =>
    axios.request({
        url,
        method,
        headers,
        params: data
    })
