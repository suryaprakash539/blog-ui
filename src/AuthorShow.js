import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {ListGroup,ListGroupItem,Jumbotron} from 'reactstrap'
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
            <div className='container'>
                <Jumbotron>
            <h2 className='display-3'>NAME-{this.state.author.name}</h2>
            <p className='lead'>{this.state.author.email}</p>
            </Jumbotron>
            <h3>Listing posts written:</h3>
            <ul>
                <ListGroup>
                {this.state.posts.map(post=>{
                    return <li  key={post.id}><ListGroupItem><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem></li>
                })}
                </ListGroup>
            </ul>
         </div> 
        )
    }
}
export default AuthorShow