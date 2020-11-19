import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'https://api.mercadolibre.com',
    header: { Auth: 'Simple AUTH' },
    timeout: 5000,
});
