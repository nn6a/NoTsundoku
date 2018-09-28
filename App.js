import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './state/ducks/pomodoro/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import Timer from './views/containers/Timer';

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
