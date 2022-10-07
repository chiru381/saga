import React, { useState } from "react";

const Form = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',

    })
    const [errorMessage, setErrorMessage] = useState('')
    const { username, email, password, confirmPassword } = data

    const changeHandler = (e) => {
        console.log('...', e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
    }
   
    const submitHandler = (e) => {
            e.preventDefault()
        if(username.length <= 4){
            // alert("username must be atleast 4 characters")
            setErrorMessage('username must be atleast 4 characters')
        } else if(!email){
            setErrorMessage("enter your email")
        }
        else if(!password){
            setErrorMessage("enter your password")
        }
        else if(!confirmPassword){
            setErrorMessage("enter your confirm password")
        }
        else if(password !== confirmPassword){
            setErrorMessage("password is not matched")
        } else {
            console.log(data)
            alert( 'Your Registration is Successfully......')
        }
    }
    return(
      <div>
        <center>
            <h3>Register</h3>
            <form autoComplete="off" onSubmit={submitHandler}> 
                <input type="text" placeholder="username" name="username" value={username} onChange={changeHandler} /><br/>
                {errorMessage && (
                    <p className="error">
                        {errorMessage}
                    </p>
                )}
                <input type="email" placeholder="email" name="email" value={data.email} onChange={changeHandler} /><br/>
                <input type="password" placeholder="password" name="password" value={password} onChange={changeHandler} /><br/>
                <input type="password" placeholder="confirm password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} /><br/>
                <input type="submit" name="submit" /> 
            </form>
        </center>
      </div>
    )
}

export default Form