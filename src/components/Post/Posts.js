
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Row,Col,Card,CardBody,CardTitle,CardSubtitle} from 'reactstrap'

function Posts(props){
    
        return(
            <div className='container'>
               <h2 className='text-center'>Listing Posts-{props.posts.length}</h2>
               <Row>
                  {props.posts.map(function(post){
                      return (
                          <Col sm='4' key={post.id}>
                              <Card>
                                  <CardBody>
                                      <img width='100%' height='5%' src='https://picsum.photos/200/300'/>
                                      <CardTitle>Title:{post.title} </CardTitle>
                                      <CardSubtitle>Body:{post.body}</CardSubtitle>
                                      <Link to={`/posts/${post.id}`}>Read More</Link>
                                  </CardBody>
                              </Card>
                          </Col>
                      )
                  })}
               </Row>
            </div>
        )
    }


const mapStateToProps=(state)=>{
   return{
       posts:state.posts
   } 
}
export default connect(mapStateToProps)(Posts) 