import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Modal from 'react-modal';
import '../LoginModal/loginModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        borderRadius: '6px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
};

const LoginButton = () => {

    // Use state for modals
    const [signUpModal, setSignUpModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    // Use state for Form Data
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const [signUpData, setSignUpData] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        password: ""
    })

    // Storing the User info
    const [userInfo, setUserInfo] = useState({})

    // Login
    const login = () => {
        Axios({
            method: "POST",
            data: loginData,
            withCredentials: true,
            url: "http://localhost:4000/login"
        }).then((res) => setUserInfo(res.data))
            .catch((err) => {
                console.log("err loging in");
            });
    }

    // Register
    const register = () => {
        Axios({
            method: "POST",
            data: signUpData,
            withCredentials: true,
            url: "http://localhost:4000/signup"
        }).then((res) => setUserInfo(res.data))
            .catch((err) => {
                console.log("err signing up user");
            });

    }

    // FORM FUNCTIONALITY
    const handleLoginChange = (event) => {
        const { value, name } = event.target;

        setLoginData(inputValue => {
            if (name === "email") {
                return {
                    email: value,
                    password: inputValue.password,
                }
            } else if (name === "password") {
                return {
                    email: inputValue.email,
                    password: value,
                }
            }
        });
    }

    const handleRegisterChange = (event) => {
        const { value, name } = event.target;

        setSignUpData(inputValue => {
            if (name === "firstName") {
                return {
                    FirstName: value,
                    LastName: inputValue.LastName,
                    email: inputValue.email,
                    password: inputValue.password,
                }
            } else if (name === "lastName") {
                return {
                    FirstName: inputValue.FirstName,
                    LastName: value,
                    email: inputValue.email,
                    password: inputValue.password,
                }
            } else if (name === "email") {
                return {
                    FirstName: inputValue.FirstName,
                    LastName: inputValue.LastName,
                    email: value,
                    password: inputValue.password,
                }
            } else if (name === "password") {
                return {
                    FirstName: inputValue.FirstName,
                    LastName: inputValue.LastName,
                    email: inputValue.email,
                    password: value,
                }
            }
        });
    }


    // GOOGLE SIGN IN
    const googleSignIn = () => {
        window.open("http://localhost:3000/auth/google", "_self")
    }

    // MODAL OPEN AND CLOSE FUNCTIONALITY
    function openLoginModal() {
        setLoginModal(true)
    }

    function openSignUpModal() {
        setSignUpModal(true);
    }

    function closeLoginModal() {
        setLoginModal(false);
    }

    function closeSignUpModal() {
        setSignUpModal(false);
    }

    return (
        <div>
            <button onClick={openLoginModal} className="Login">Login</button>
            <Modal
                isOpen={loginModal}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeLoginModal}
                style={customStyles}
                contentLabel="Login Modal"
            >
                <div className="model-container">
                    <div className="header">
                        <div className="sign-up">Login</div>
                        <button onClick={closeLoginModal}>
                            <img src="/Images/icons/close.svg" alt="close" />
                        </button>
                    </div>
                    <div className="signin-container">
                        <form onSubmit={login}>
                            <div className="signin-form">
                                <input type="email" name="email" onChange={handleLoginChange} value={loginData.email} placeholder="Email" validate="required" />
                                <input type="password" name="password" onChange={handleLoginChange} value={loginData.password} placeholder="Password" validate="required" />
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                        <div className="gmail-signin">
                            <Link to="/auth/google" onClick={googleSignIn} className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/gmail.svg" alt="G" />
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Gmail
                                </div>
                            </Link>
                        </div>
                        <div className="facebook-signin">
                            <Link to="/auth/facebook" className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/fb.svg" alt="FB" width="26"></img>
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Facebook
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="login-redirect-container">
                        <hr />
                        <div className="login-redirect">
                            Already have an account?
                            <Link to="/">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </Modal>
            <button onClick={openSignUpModal} className="createAccount">Create an account</button>
            <Modal
                isOpen={signUpModal}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeSignUpModal}
                style={customStyles}
                contentLabel="Login Modal"
            >
                <div className="model-container">
                    <div className="header">
                        <div className="sign-up">Sign Up</div>
                        <button onClick={closeSignUpModal}>
                            <img src="/Images/icons/close.svg" alt="close" />
                        </button>
                    </div>
                    <div className="signin-container">
                        <form onSubmit={register} >
                            <div className="signin-form">
                                <input onChange={handleRegisterChange} type="text" name="firstName" placeholder="First Name" />
                                <input onChange={handleRegisterChange} type="text" name="lastName" placeholder="Last Name" />
                                <input onChange={handleRegisterChange} type="email" name="email" id="" placeholder="Email" validate="required" />
                                <input onChange={handleRegisterChange} type="password" name="password" id="" placeholder="Password" validate="required" />
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                        <div className="gmail-signin">
                            <Link to="/" className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/gmail.svg" alt="" />
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Gmail
                                </div>
                            </Link>
                        </div>
                        <div className="facebook-signin">
                            <Link to="/" className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/fb.svg" alt="" width="26"></img>
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Facebook
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="login-redirect-container">
                        <hr />
                        <div className="login-redirect">
                            Don't have an account?
                            <Link to="/">Login</Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default LoginButton
