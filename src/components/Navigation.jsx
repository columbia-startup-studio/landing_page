import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="navbar container">
            <div className="navbar-logo">
                <div className="logo-icon"></div>
                <span className="logo-text">Circle</span>
            </div>

            <div className="navbar-links">
                <a href="#how-it-works">How it works</a>
                <a href="#community">Community</a>
                <a href="#download">Download</a>
            </div>

            <div className="navbar-cta">
                <button className="btn-primary">Get Early Access</button>
            </div>
        </nav>
    )
}

export default Navigation
