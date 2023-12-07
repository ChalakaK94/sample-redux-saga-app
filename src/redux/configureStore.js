import {combineReducers,createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from "./sagas/rootSaga";
import {composeWithDevTools} from "@redux-devtools/extension";

const reducers = combineReducers({})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(watcherSaga)

export  default store;