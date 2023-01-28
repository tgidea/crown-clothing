import { compose, /*configureStore,*/ createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// root reducer : combination of all reducers
import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
    // as by using spinner we don;t need to persist
    // blacklist: ['user']
    whitelist : ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean);
// const middlewares = [loggerMiddleware];


//compose : to combine multiple store enhancers into a single store enhancer
// applyMiddleware :to combine multiple middleware into a store enhancer
const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

// second argument is any additional default state here , it is added for test.(optional)

// export const store = createStore(rootReducer, undefined, composedEnhancer);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);


