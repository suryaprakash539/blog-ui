import {createStore,combineReducers, applyMiddleware} from 'redux'
import postReducer from '../reducers/postReducer'
import thunk from 'redux-thunk'

function configureStore(){
const store=createStore(combineReducers({
    posts:postReducer
}),applyMiddleware(thunk))
return store
}

export default configureStore
