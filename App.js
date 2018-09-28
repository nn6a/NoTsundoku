import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/Timer/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import Timer from './components/Timer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Timer/>
            </Provider>
        );
    }
}
