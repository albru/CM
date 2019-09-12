import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import orderFormReducer from './store/reducers/orderForm';
import modalFormReducer from './store/reducers/modalForm';
// import sideDrawerReducer from './store/reducers/sideDrawer';
// import modalReducer from './store/reducers/modal';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({
    orderForm: orderFormReducer,
    modalForm: modalFormReducer
});

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
