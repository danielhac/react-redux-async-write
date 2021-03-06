import * as types from './actionTypes';
import wineApi from '../api/mockWineApi';

export function loadWinesSuccess(wines) {
    return { type: types.LOAD_WINES_SUCCESS, wines };
}

export function createWineSuccess(wine) {
    return {type: types.CREATE_WINE_SUCCESS, wine};
}

export function updateWineSuccess(wine) {
    return {type: types.UPDATE_WINE_SUCCESS, wine};
}

// Thunk
export function loadWines() {
    return function(dispatch) {
        return wineApi.getAllWines().then(wines => {
            dispatch(loadWinesSuccess(wines));
        }).catch(error => {
           throw(error);
        });
    };
}

// Thunk
// getState: useful when desire to access Redux store and get particular pieces of state w/o passing it as params,
// get direct access to get pieces of state
export function saveWine(wine) {
    return function (dispatch, getState) {
        return wineApi.saveWine(wine).then(savedWine => {
            // Check id, Update or create wine
            wine.id ? dispatch(updateWineSuccess(savedWine)) :
                dispatch(createWineSuccess(savedWine));
        }).catch(error => {
            throw(error);
        });
    };
}