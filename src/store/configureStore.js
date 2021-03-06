import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducers from '../reducers/users'
import postsReducers from '../reducers/posts'
import commentsReducers from '../reducers/comments'
import userReducer from '../reducers/user'

const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducers ,
        posts:postsReducers  ,
         comments:commentsReducers,
        user:userReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore
