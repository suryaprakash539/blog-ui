import React from 'react'
import axios from 'axios'
import AuthorsItem from './AuthorsItem'

class Authors extends React.Component{
    constructor(){
        super()
        this.state={authors:[]}
    }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response=>{
           const authors=response.data
           this.setState({authors})
       })
    }
    render(){
        return(
            <div className='container'>
                <h2 className='text-center'>Listing Authors-{this.state.authors.length}</h2>
                 <ul>
                    
                     {this.state.authors.map(author=>{
                         return <AuthorsItem key={author.id}
                                             id={author.id}
                                             name={author.name}
                                             username={author.username}
                                             email={author.email}/>
                     })}
                 </ul>
            </div>
        )
    }
}
export default Authors