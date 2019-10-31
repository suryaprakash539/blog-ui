import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import App from './App'
import { startSetPosts } from './actions/posts'

import 'bootstrap/dist/css/bootstrap.min.css'

const store=configureStore()


store.dispatch(startSetPosts())

const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

