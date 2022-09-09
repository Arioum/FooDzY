import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="Nav-bg">
            <div class="wrapper">
                <div className="Navbar">
                    <div class="Logo">
                        <a href="/"><img src="/Images/logo.svg" alt="logo" /></a>
                    </div>
                    <div class="Navbar-row">
                        <LoginButton className="createAccount"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar