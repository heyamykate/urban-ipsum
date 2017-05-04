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

export const REQUEST_WORD = 'REQUEST_WORD';
export function requestWord() {
  return {
    type: REQUEST_WORD
  }
}

export const RECEIVE_WORD = 'RECEIVE_WORD';
export function receiveWord(json) {
  return {
    type: RECEIVE_WORD,
    dailyWord: {
      word: json.word,
      definition: json.definition
    }
  }
}
