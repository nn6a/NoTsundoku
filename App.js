import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './state/ducks/pomodoro/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import Router from './config/router';

const store = createStore(
    reducer,
    composeWithDevTools()
);

export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}
