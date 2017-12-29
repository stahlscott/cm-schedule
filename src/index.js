import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

const muiTheme = getMuiTheme({
    appBar: {
        color: '#37517E',
        height: 50
    }
});

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <BrowserRouter>
                <div>
                    <Route path="/login" component={Login} />
                    <Route path="/app" component={App} />
                    <Redirect from="/" to="/login" />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
