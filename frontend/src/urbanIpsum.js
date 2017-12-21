import axios from 'axios';

const apiUrl = 'http://api.urbanipsum.com'

function getIpsum(count) {
    return axios.get(`${apiUrl}/ipsum?count=${count}`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('error: ', err)
        })
}

export default getIpsum;
