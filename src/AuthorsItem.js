import React from 'react'
import {Link} from 'react-router-dom'
function AuthorsItem(props){
    return(
        <li><Link to={`/authors/${props.id}`}>{props.name}</Link></li>
    )
}
export default AuthorsItem