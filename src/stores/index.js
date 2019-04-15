import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'

let middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger]
}

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store