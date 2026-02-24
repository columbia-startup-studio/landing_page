import React from 'react'
import { GraduationCap } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    return (
        <section id="hero" className="container hero-section">
            <div className="hero-content">
                <div className="hero-badge">
                    <GraduationCap size={14} className="badge-icon" />
                    <span>Exclusive for Columbia University</span>
                </div>

                <h1 className="hero-title">
                    Stop Texting.<br />
                    <span className="gradient-text">Start Meeting.</span>
                </h1>

                <p className="hero-description">
                    The easiest way for Columbia students to hang out. No group chats, no coordination, just real-life plans happening right now.
                </p>

                <div className="hero-form">
                    <div className="input-group">
                        <input type="email" placeholder="uni@columbia.edu" className="email-input" />
                        <button className="btn-primary form-submit">Join Waitlist</button>
                    </div>
                    <p className="hero-subtext">Join 2,000+ students on the waitlist.</p>
                </div>
            </div>

            <div className="hero-visual">
                {/* Placeholder for the overlapping phones */}
                <div className="phone-mockup phone-mockup-1">
                    <div className="phone-screen">
                        <div className="phone-header">Activity</div>
                        <div className="phone-card">Alex J. is heading to Butler</div>
                        <div className="phone-card">3 friends at Joe's Pizza</div>
                    </div>
                </div>
                <div className="phone-mockup phone-mockup-2">
                    <div className="phone-screen">
                        <div className="phone-header">Study Session at Butler</div>
                        <div className="circle-graphic"></div>
                        <button className="btn-join-circle">Join Circle</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
