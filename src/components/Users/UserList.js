import React from 'react'
import {connect} from 'react-redux'
function UserList(props){
    return(
      <div>
          <ul>
              {props.users.map(function(user){
                  return<li key={user.id}>{user.name}</li>
              })}
          </ul>
      </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(UserList)