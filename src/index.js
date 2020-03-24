import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import root from './sagas/sagas';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root);

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)

//CTRL + SHIFT + S - SALVA TUDO