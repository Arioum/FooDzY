import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ navStyle }) => {
    const userName = "Amogh Rao"
    const userLoggedIn = false;
    return (
        <div className={navStyle ? "fill" : "Nav-bg"}>
            <div class="wrapper">
                <div className="Navbar">
                    <div class="Logo">
                        <Link to="/"><img src="/Images/logo.svg" alt="logo" /></Link>
                    </div>
                    <div class="Navbar-row">
                        {userLoggedIn ? (
                            <>
                                <span>{userName}</span>
                                <Link to="/logout" style={{textDecoration: 'none', color: '#FFFFFF', marginLeft: '2rem'}}>Logout</Link>
                            </>
                        ) : (
                            <LoginButton className="createAccount" />
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar