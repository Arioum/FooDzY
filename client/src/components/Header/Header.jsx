import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header-content">
            <div className="Main-Header wrapper">
                Find the <span style={{ color: '#fd0000' }}>best</span> restaurants, cafés, and bars
            </div>
            <div className="Find-Restaurant">
                input
                <select className="dropdown" name="" id="">
                    <option value="">Please type a location</option>
                    <option value="">Delhi</option>
                    <option value="">Mumbai</option>
                    <option value="">Bangalore</option>
                    <option value="">Chennai</option>
                    <option value="">Kolkata</option>
                </select>
                <input className="Search-field" type="text" placeholder="Search by name or Restaurant name" href="/"></input>
            </div>
        </div>
    )
}

export default Header;