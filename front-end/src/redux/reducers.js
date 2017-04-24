import {
    REQUEST_IPSUM,
    RECEIVE_IPSUM
} from './actions';

const initialState = {
  isFetching: false,
  count: 0,
  ipsum: []
}

function ipsumReducer(state = initialState, action) {
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

export default ipsumReducer
