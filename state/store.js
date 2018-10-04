import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as reducers from './ducks'; // import all reducers from ducks/index.js
import ReduxThunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

export default function configureStore () {
    const rootReducer = combineReducers(reducers);
    return createStore(
        rootReducer,
        composeWithDevTools(),
        applyMiddleware(ReduxThunk)
    );
}
