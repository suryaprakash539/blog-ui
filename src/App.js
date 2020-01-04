import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Posts from './components/Post/Posts'
import Authors from './Authors'
import AuthorShow from './AuthorShow'
import PostShowR from './components/Post/PostShowR'

function App(props){
    return (
        <BrowserRouter>
         <div>
             <h1 className='text-center'>Welcome to the BLOG-UI</h1>
           <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
             <Link className='nav-link' to='/posts'>Posts</Link>
             <Link className='nav-link' to='/authors'>Authors</Link>
             </nav>
             <Route path='/posts' component={Posts} exact={true}/>
             <Route path='/authors' component={Authors} exact={true}/>
             <Route path='/authors/:id' component={AuthorShow}/>
             <Route path='/posts/:id' component={PostShowR}/>
             
             
        </div>
        </BrowserRouter>
    )
}
export default App