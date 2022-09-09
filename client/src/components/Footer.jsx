import React from 'react'
import './styles/footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div>
            <footer class="Footer-Container">
                <div class="Contacts">
                    <a href="https://www.instagram.com" class="Social-Links">Instagram</a>
                    <a href="https://www.twitter.com" class="Social-Links">Twitter</a>
                    <a href="https://www.facebook.com" class="Social-Links">FaceBook</a>
                    <a href="https://www.linkedin.com" class="Social-Links">LinkedIn</a>
                </div>
                <div className="copyright">
                    <p>© {currentYear} Copyright Foodzy by Arioum</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer