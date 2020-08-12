import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from "redux"
import reducers from "./reducers/root-reducer"

const saga = createSagaMiddleware()

const middlewares = [
  saga,
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, composeEnhancers(applyMiddleware(...middlewares))
)

export default store

