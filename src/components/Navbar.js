import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPost, getPostData, getUser, getUserData, addUser, addUserData, updateUser, updateUserData, deleteUser, deleteUserData } from '../toolkit/reducer/userReducer'

const Navbar = () => {
    const [name, setName] = useState("")
    const [userId, setUserId] = useState("")
    const dispatch = useDispatch()
    // const { users_data } = useSelector((store) => store.users);
    const cartCount = useSelector((state) => state.cartReducer.cartValues.length)
    const totalPrice = useSelector((state) => state.cartReducer.totalPrice)
    const users_data = useSelector((state) => state.userReducer.users_data)
    const post_data = useSelector((state) => state.userReducer.post_data)
    // console.log(users_data, '...1')
    return(
        <>
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='d-inline p-2 navbar-nav mx-auto'>
                    <span className='btn btn-primary'>Cart Items: {cartCount}</span> &nbsp;
                    <span className='btn btn-primary'>Total Price: {totalPrice}</span> &nbsp;
                    <span className='btn btn-primary'>Total Users: {users_data.length}</span> &nbsp;
                </div>
            </nav>
            <div>
                {post_data.map((p, index) => (
                    <h1 key={index}>
                        {p.title}
                    </h1>
                ))}
                <h1>Users Data</h1>
                { users_data.length > 0  && users_data.map((user, index) => (
                    <p key={index}>
                        {user.name}
                        <button onClick={() => {
                            setUserId(user.id)
                            setName(user.name)
                        }}>Edit</button>
                        <button onClick={() => dispatch(deleteUserData(user.id))}>Delete</button>
                    </p>
                ))}
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <button onClick={() => {
                    if(userId){
                        dispatch(updateUserData({ id: userId }))
                        setName("")
                        setUserId("")
                    } else {
                        dispatch(addUserData({ name }))
                        setName("")
                    }
                }}>
                    {userId ? "update" : "save"}
                </button>
                <button className='btn btn-primary ml-auto' onClick={() => dispatch(getUserData())}>Get Users</button>
                <button className='btn btn-primary ml-auto' onClick={() => dispatch(getPostData())}>Get Posts</button>
            </div>
        </div>
        </>
    )
}

export default Navbar