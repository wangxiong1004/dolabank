import axios from 'axios';

let urlApi, url;
switch (window.location.hostname) {
    case "www.dolabank.com":
        urlApi = 'https://www.dolabank.com/apigateway/';
        url = 'https://www.dolabank.com/';
        break;
    case "www.dolabank.top":
        urlApi = 'https://api.dolabank.top/';
        url = 'https://www.dolabank.top/';
        break;
    case "www.duolajucai.top":
        urlApi = 'https://api.duolajucai.top/';
        url = 'https://www.duolajucai.top/';
        break;
    case "www.dolabank.club":
        urlApi = 'https://api.dolabank.club/';
        url = 'https://www.dolabank.club/';
        break;
    case "www.dola.dev":
        urlApi = 'https://api.dola.dev/';
        url = 'https://www.dola.dev/';
        break;
    default:
        urlApi = 'https://www.dolabank.com/apigateway/';
        url = 'https://www.dolabank.com/';
}

export const productionUrlApi = urlApi;
export const productionUrl = url;

export const apis = {
    appindex: 'https://www.dolabank.com/apigateway/' + 'v1/app/appindex'
}

export const services = {
    appindex(Codekey, params) {
        return axios.get(apis.appindex, {
            params: {
                data: params
            },
            headers: {
                'X-Dola-Code': Codekey
            }
        })
    }
}