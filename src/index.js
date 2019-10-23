import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import App from './App'
import { startSetPosts } from './actions/posts'
import { startSetUsers } from './actions/users'


const store=configureStore()


store.dispatch(startSetPosts())
store.dispatch(startSetUsers())
const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

