import axios from 'axios';

const apiUrl = 'http://api.urbanipsum.com'

export function getIpsum(count) {
    return axios.get(`${apiUrl}/ipsum?count=${count}`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('error: ', err)
        })
}

export function getDailyWord() {
  return axios.get(`${apiUrl}/daily/`)
    .then((response) => {
      let dailyWord = response.data[0];
      return dailyWord;
    })
    .catch((err) => {
      console.log('error: ', err);
    })
}
