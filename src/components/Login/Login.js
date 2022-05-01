import React, { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import './login.css'
import { handleCreateUserWithEmailAndPassword, handleSignInWithEmailAndPassword, initializeLoginFramework } from './loginManager';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = ({ newUser, setNewUser }) => {
    initializeLoginFramework();
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;
    const handleClick = () => {
        return setNewUser(!newUser);
    }
    const [userInfo, setUserInfo] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',
        error: '',
        success: false
    })
    const image = "/images/bannerBackground.png";
    const bannerStyle = {
        height: '500px',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
    }
    const responseGoogle = (res) => {
        console.log(res);
        const { email, name, imageUrl } = res.profileObj;
        const signedInUser = {
            isSignedIn: true,
            name: name,
            email: email,
            photo: imageUrl,
            success: true
        }
        // console.log(signedInUser);
        handleResponse(signedInUser, true);
    }
    const handleResponse = (res, redirect) => {
        setUserInfo(res);
        setLoggedInUser(res);
        redirect && navigate(from, { replace: true });

    }
    console.log(loggedInUser)
    const handleSubmit = (e) => {
        if (newUser && userInfo.name && userInfo.email && userInfo.password === userInfo.confirmPassword) {
            handleCreateUserWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
                .then(res => {
                    handleResponse(res, true)
                    // setUserInfo(res);
                    // setLoggedInUser(res);
                    // navigate(from, { replace: true });
                })
        }
        if (!newUser && userInfo.email && userInfo.password) {
            // console.log(newUser);
            // console.log(userInfo.email, userInfo.password);
            handleSignInWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(res => {
                    handleResponse(res, true)
                    // setUserInfo(res);
                    // setLoggedInUser(res);
                    // navigate(from, { replace: true });
                })
        }
        if (newUser && userInfo.password !== userInfo.confirmPassword) {
            alert("Password Don't match");
        }
        e.preventDefault();
    };

    const handleOnBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password' || event.target.name === 'confirmPassword') {
            isFieldValid = event.target.value.length > 6 && /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(event.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...userInfo };
            newUserInfo[event.target.name] = event.target.value;
            setUserInfo(newUserInfo);
        }
    }
    // console.log(loggedInUser)

    // console.log(userInfo);
    return (
        <div style={bannerStyle}>
            <div style={{ width: '300px' }}>
                <div className="logo">
                    <img src="/images/logo2.png" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                    {newUser && <input type="text" name="name" onBlur={handleOnBlur} placeholder="Name" />}
                    <input type="text" name="email" onBlur={handleOnBlur} placeholder="Email" />
                    <input type="password" name="password" onBlur={handleOnBlur} placeholder="Password" />
                    {newUser && <input type="password" name="confirmPassword" onBlur={handleOnBlur} placeholder="Confirm Password" />}
                    {/* {newUser && <input type="text" name="name" onBlur={(e) => console.log(e.target.value)} placeholder="Name"
                        {...register("name", { required: true, maxLength: 80 })} />}
                    {errors.name && <span className="text-danger">Name is required</span>}

                    <br />
                    <input type="text" name="email" placeholder="Email" onBlur={(e) => console.log(e.target.value)} {...register("email",
                        { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <span className="text-danger">Email is required</span>}
                    <br />
                    <input type="password" name='password' placeholder="Password" onBlur={handleOnBlur} {...register("password",
                        { required: true, maxLength: 10, pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i })} />
                    {errors.password && <span className="text-danger">Password is required</span>}
                    <br />
                    {newUser && <input type="password" name='confirmPassword' placeholder="Confirm Password" onBlur={handleOnBlur} {...register("confirmPassword",
                        { required: true, maxLength: 10, pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i })} />}
                    {errors.confirmPassword && <span className="text-danger">Please enter your password again</span>}

                    <br /> */}
                    <input type="submit" className='btn btn-danger' value={newUser ? 'Sign Up' : "Login"} />
                </form>
                <GoogleLogin
                    clientId="632133108836-iptml2tateenrjbo71dagee9pigvhbn2.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                {newUser ? <div className='text-center'><span onClick={handleClick} className=' text-danger' style={{ cursor: 'pointer' }}>Already Have an account</span></div> : <div className='text-center' style={{ cursor: 'pointer' }}><span onClick={handleClick} className=' text-danger'>Register your account</span></div>}
            </div>
        </div >
    );
};

export default Login;