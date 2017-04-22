import axios from 'axios';

//var logic = {
    function getIpsum(count) {
        return axios.get('http://127.0.0.1:8000/ipsum?count=' + count)
            .then(function(response) {
                console.log(response.data);
                return response.data;
            })
            .catch(function(err) {
              console.log('error: ', err)
            })
    }
//}

export default getIpsum;
