import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function wineReducer(state = initialState.wines, action) {
    switch(action.type) {
        case types.LOAD_WINES_SUCCESS:
            return action.wines;

        default:
            return state;
    }
}