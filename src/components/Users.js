import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  displayUsers(users) {
    return users.map(user => {
      return <li key={user.username}>{user.username}</li>;
    })
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {this.displayUsers(this.props.users)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
