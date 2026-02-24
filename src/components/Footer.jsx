import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer border-t">
            <div className="container footer-content">
                <div className="footer-logo">
                    <div className="logo-icon-small"></div>
                    <span className="logo-text">Circle</span>
                </div>

                <div className="footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Contact</a>
                </div>

                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Circle App.
                </div>
            </div>
        </footer>
    )
}

export default Footer
