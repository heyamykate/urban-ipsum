import {
    REQUEST_IPSUM,
    RECEIVE_IPSUM,
    RECEIVE_WORD
} from './actions';

const initialState = {
  isFetching: false,
  count: 0,
  ipsum: [],
  dailyWord: {
    word: '',
    definition: ''
  }
}

export function dailyWordReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_WORD:
      return {
        ...state,
        dailyWord: {
          word: action.dailyWord,
          definition: action.dailyDef,
        }
      }
    default:
      return state;
  }
}

export function ipsumReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_IPSUM:
            return {
                ...state,
                count: action.count,
                isFetching: true
            }
        case RECEIVE_IPSUM:
            return {
                ...state,
                isFetching: false,
                ipsum: action.items,
                count: action.count,
            }
        default:
            return state;
    }
}
