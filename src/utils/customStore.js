import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createReducer } from '../redux/asyncReducers'
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { history } from '../redux/asyncReducers'

export default function customStore(rootReducer) {

    let buildStore = compose(
        applyMiddleware(routerMiddleware(history), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        // window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    let store = buildStore(rootReducer);

    store.asyncReducers = {}

    if (module.hot) {
        module.hot.accept(rootReducer, () => {
            store.replaceReducer(rootReducer);
        });
    }
    return store;
}

export function injectAsyncReducer(store, asyncReducer) {
    asyncReducer && injectAsyncReducers(store, asyncReducer)
}

function injectAsyncReducers(store, asyncReducers) {
    let flag = false;
    for (let key in asyncReducers) {
        if (Object.prototype.hasOwnProperty.call(asyncReducers, key)) {
            if (!store.asyncReducers[key]) {
                store.asyncReducers[key] = asyncReducers[key];
                flag = true;
            }
            // if (!store[key]) {
            //     store[key] = asyncReducers[key];
            //     flag = true;
            // }
        }
    }

    if (flag) {
        store.replaceReducer(createReducer(store.asyncReducers))
    }
}
/*
const rootReducer = combineReducers(reducers);
export default createStore(rootReducer);
*/
