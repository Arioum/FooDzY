import React from 'react'
import './footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div>
            <footer className="Footer-Container">
                <div className="Contacts">
                    <a href="https://www.instagram.com" className="Social-Links">Instagram</a>
                    <a href="https://www.twitter.com" className="Social-Links">Twitter</a>
                    <a href="https://www.facebook.com" className="Social-Links">FaceBook</a>
                    <a href="https://www.linkedin.com" className="Social-Links">LinkedIn</a>
                </div>
                <div className="copyright">
                    <p>© {currentYear} Copyright Foodzy by Arioum</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer