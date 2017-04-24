import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

export const REQUEST_IPSUM = 'REQUEST_IPSUM';
export function requestIpsum(count) {
    return {
        type: REQUEST_IPSUM,
        count
    }
}

export const RECEIVE_IPSUM = 'RECEIVE_IPSUM';
export function receiveIpsum(count, json) {
    return {
        type: RECEIVE_IPSUM,
        count,
        items: json
    }
}

// thunk action creator
export function fetchIpsum(count) {
    return function(dispatch) {
        dispatch(requestIpsum(count))
        return fetch(`http://127.0.0.1:8000/ipsum?count=${count}`)
            .then((response) => {
                response.json()
                console.log('response: ', response.json())
            })
            .then((json) => {
                dispatch(receiveIpsum(count, json))
            })
    }
}
