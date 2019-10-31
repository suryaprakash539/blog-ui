import React from 'react'
import {Link} from 'react-router-dom'
import {ListGroup,ListGroupItem} from 'reactstrap'
function AuthorsItem(props){
    return(
        <div className='container'>
        <ListGroup>
            <li><ListGroupItem><Link to={`/authors/${props.id}`}>{props.name}</Link></ListGroupItem></li>
        </ListGroup>
        </div>
    )
}
export default AuthorsItem