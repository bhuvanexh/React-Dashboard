import React from 'react';
import userPfp from "./image1.png"


export default function SignIn(props) {

    const [regUsers, setRegUsers] = React.useState([
        {
            username: "Bhuvanesh",
            userEmail: "bhuvanesh@random.com",
            userPassword: "1234",
            picture: userPfp
        }
    ])
    const [tempUser, setTempUser] = React.useState({})
    function handleChange(event) {
        const { name, value } = event.target
        setTempUser(prev => ({ ...prev, [name]: value }))
    }
    // console.log(tempUser)
    function signIn() {
        if (Object.keys(tempUser).length) {
            if (tempUser.email == regUsers[0].userEmail && tempUser.password == regUsers[0].userPassword) {
                props.setUser({ ...tempUser, picture: userPfp })
            }
            else alert('credentials incorrect')
        } else alert('likh to sahi kuch')
    }


    function noteToggle() {
        const noteWrap = document.querySelector(".NoteSignIn--Wrap")
        noteWrap.classList.toggle('hideNote')
        console.log('clicked', noteWrap)
    }

    return (
        <div className='signIn--outer'>
            <div className='NoteSignIn--Wrap'>
                <div className='NoteSignIn'>
                    <span onClick={noteToggle} ></span>
                    <h1>Important Note</h1>
                    <p>
                        You can Sign In either with Using Google Sign In or by Using
                        <span>
                            <div>
                                Email address : <span>bhuvanesh@random.com</span>
                            </div>
                            <div>
                                Password: <span> 1234</span>
                            </div>
                        </span>
                        and Sign Out by clicking on
                        <br />
                        <b>Dashboard > Sign Out</b>
                    </p>
                </div>
            </div>
            <div className='main--left'>Board.</div>
            <div className='main--right'>
                <div className='right--wrap'>
                    <h1>Sign In</h1>
                    <span>Sign in to your account</span>
                    <button id='signInBtn' ></button>
                    <div className='input--box'>
                        <div>
                            <label htmlFor="email" >Email address </label>
                            <span onClick={noteToggle}>?</span>
                        </div>
                        <input name='email' id='email' type="text" onChange={handleChange} />
                        <div>
                            <label htmlFor="password">Password </label>
                            <span onClick={noteToggle}>?</span>
                        </div>
                        <input name='password' id='password' type="password" onChange={handleChange} />
                        <a href="#">Forgot Password?</a>
                        <button onClick={signIn}>Sign In</button>
                    </div>
                    <p>Don't have an account? <a href="#">Register here</a></p>
                </div>
            </div>
        </div>
    )
}