import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'
class PostShow extends React.Component{
    constructor(props){
        super(props)
        this.state={post:{},author:{},comments:[]}
    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            const post=response.data
            this.setState({post})
            let authorId=this.state.post.userId
            axios.get(`https://jsonplaceholder.typicode.com/users/${authorId}`)
            .then(response=>{
                const author=response.data
                this.setState({author})
                axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
                .then(response=>{
                  const comments=response.data
                  this.setState({comments})
                })
            })
        })
       
            

        
    }
    render(){
        return(
            <div>
             <h2>Author-<Link to={`/authors/${this.state.author.id}`}>{this.state.author.name}</Link></h2>
             <h2>Title</h2><h4>{this.state.post.title}</h4>
             <h2>Body</h2><h4>{this.state.post.body}</h4>
             <h2>COMMENTS</h2>
             <ul>
                 {this.state.comments.map(comment=>{
                     return<li key={comment.id}>{comment.name}</li>
                 })}
             </ul>
            </div>
        )
    }
}
export default PostShow