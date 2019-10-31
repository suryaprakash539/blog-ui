import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card,CardText,CardBody,CardSubtitle} from 'reactstrap'
function PostShowR(props){
    return(
        <div>
            {props.post &&(
                <div className='container'>
                    <div className='jumbotron  text-center'>
                    <Card>
                        <CardBody>
                            <CardText>Title:{props.post.title}</CardText>
                            <CardSubtitle>Body:{props.post.body}</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Link to='/posts'>back</Link>
                    </div>
                    </div>
            )}
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return {
        post:state.posts.find(post=>post.id===Number(id))
    }
}

export default connect(mapStateToProps)(PostShowR)