import {createStore,combineReducers, applyMiddleware} from 'redux'
import postReducer from '../reducers/postReducer'
import userReducer from '../reducers/userReducer'
import thunk from 'redux-thunk'

function configureStore(){
const store=createStore(combineReducers({
    posts:postReducer,
    users:userReducer
}),applyMiddleware(thunk))
return store
}

export default configureStore
