// Root Reducer
import {combineReducers} from 'redux';
import wines from './wineReducer';
import makers from './makerReducer';

const rootReducer = combineReducers({
    // Define all reducers needed to combine
    wines,
    makers
});

export default rootReducer;