import React, { useState } from 'react';
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

    //Use state for Form Data
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const [signUpData, setSignUpData] = useState({
        FirstName: " ",
        LastName: "",
        email: "",
        password: ""
    })

    // FORM FUNCTIONALITY
    const handleChange = (event) => {
        const {value, name} = event.target;

        setLoginData(inputValue => {
            if (name === "email") {
                return {
                    email: value,
                    password: inputValue.password,
                }
            } else if ( name === "password") {
                return {
                    email: inputValue.email,
                    password: value,
                    
                }
            }
        });   
    }

    const handleSubmit = () => {
       
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
            <button onClick={openLoginModal} class="Login">Login</button>
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
                        <form onSubmit={handleSubmit}>
                            <div className="signin-form">
                                <input type="email" name="email" onChange={handleChange} value={loginData.email} placeholder="Email" validate="required" />
                                <input type="password" name="password" onChange={handleChange} value={loginData.password} placeholder="Password" validate="required" />
                                <button type="submit" >Sign Up</button>
                            </div>
                        </form>
                        <div className="gmail-signin">
                            <a href="/auth/google" className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/gmail.svg" alt="" />
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Gmail
                                </div>
                            </a>
                        </div>
                        <div className="facebook-signin">
                            <a href="/" className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/fb.svg" alt="" width="26"></img>
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Facebook
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="login-redirect-container">
                        <hr />
                        <div className="login-redirect">
                            Already have an account?
                            <a href="/">Login</a>
                        </div>
                    </div>
                </div>
            </Modal>
            <button onClick={openSignUpModal} class="createAccount">Create an account</button>
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
                        <form method="post" >
                            <div className="signin-form">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                                <input type="email" name="" id="" placeholder="Email" validate="required" />
                                <input type="password" name="" id="" placeholder="Password" validate="required" />
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                        <div className="gmail-signin">
                            <a href="/" className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/gmail.svg" alt="" />
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Gmail
                                </div>
                            </a>
                        </div>
                        <div className="facebook-signin">
                            <a href="/" className="social-login-button">
                                <div className="social-icon">
                                    <img src="/Images/icons/fb.svg" alt="" width="26"></img>
                                </div>
                                <div className="gmail-login-text">
                                    Continue with Facebook
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="login-redirect-container">
                        <hr />
                        <div className="login-redirect">
                            Don't have an account?
                            <a href="/">Sign Up</a>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default LoginButton
