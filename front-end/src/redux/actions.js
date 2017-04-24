import 'babel-polyfill';

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
