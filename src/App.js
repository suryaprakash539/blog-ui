import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Posts from './components/Post/Posts'
import Authors from './Authors'
import AuthorShow from './AuthorShow'
import PostShowR from './components/Post/PostShowR'
import UserList from './components/Users/UserList'

function App(props){
    return (
        <BrowserRouter>
         <div>
             
             <Link to='/posts'>Posts</Link>
             <Link to='/authors'>Authors</Link>
             <Link to ='/users'>Users</Link>
             <Route path='/posts' component={Posts} exact={true}/>
             <Route path='/authors' component={Authors} exact={true}/>
             <Route path='/authors/:id' component={AuthorShow}/>
             <Route path='/posts/:id' component={PostShowR}/>
             <Route path='/users' component={UserList}/>
             
        </div>
        </BrowserRouter>
    )
}
export default App