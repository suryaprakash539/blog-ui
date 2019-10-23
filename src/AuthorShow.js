import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class AuthorShow extends React.Component{
    constructor(props){
        super(props)
        this.state={author:{},posts:[]}
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
               const author=response.data
               this.setState({author})
               axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
               .then(response=>{
                   const posts=response.data
                   this.setState({posts})
               })
        })
    }
    render(){
        return(
            <div>
            <h2>NAME-{this.state.author.name}</h2>
            <h2>{this.state.author.email}</h2>
            <h3>Listing posts written:</h3>
            <ul>
                {this.state.posts.map(post=>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
         </div> 
        )
    }
}
export default AuthorShow