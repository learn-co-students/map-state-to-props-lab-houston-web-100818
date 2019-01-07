import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConnectedUsers extends Component {

  render() {
    return (
      <div>
        <p>{this.props.users.length} users currently in store</p>
        <ul>
          {this.props.users.map((user, idx) => {
            return( 
              <li key={idx}>{user.username} from {user.hometown}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users}
 }

export default connect(mapStateToProps)(ConnectedUsers)
