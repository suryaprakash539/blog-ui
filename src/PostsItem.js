import React from 'react'
import {Link} from 'react-router-dom'

function PostsItem(props){
    return(
        <li><Link to={`/posts/${props.id}`}>{props.title}</Link></li>
    )
}
export default PostsItem