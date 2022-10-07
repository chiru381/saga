import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { buyMobile, sellMobile, getAllUsers, getSingleUser, addUser, editUser, deleteUser } from './redux/actions/mobileAction'

function MobileDetails({ buyMobile, sellMobile, getAllUsers, getSingleUser, addUser, editUser, deleteUser, noOfMobiles, users, user }) {
  return (
    <div>
      <h1>No of Mobiles is {noOfMobiles} And Users {users.length} and user name is {user.name}</h1>
      <button onClick={() => buyMobile()}>buy mobile</button>
      <button onClick={() => sellMobile()}>sell mobile</button><hr />
      <button onClick={() => addUser()}>Add User</button>
      <button onClick={() => getAllUsers()}>Get All Users</button>
      <button onClick={() => getSingleUser(2)}>Get Single User</button>
      <button onClick={() => editUser({name: 'chiru'}, 1)}>Edit User</button>
      <button onClick={() => deleteUser(1)}>Delete User</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.users, '....1')
  console.log(state.user, '...2')
    return {
      noOfMobiles: state.noOfMobiles,
      users: state.users,
      user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    buyMobile,
    sellMobile,
    getAllUsers,
    getSingleUser,
    addUser,
    editUser,
    deleteUser,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails)