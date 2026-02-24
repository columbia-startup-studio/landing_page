import React from 'react'
import { GraduationCap, CalendarDays, Sparkles, ShieldCheck } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    return (
        <section id="hero" className="container hero-section">
            <div className="hero-bg-orb hero-orb-one" aria-hidden="true"></div>
            <div className="hero-bg-orb hero-orb-two" aria-hidden="true"></div>

            <div className="hero-content">
                <div className="hero-badge">
                    <GraduationCap size={14} className="badge-icon" />
                    <span>Built for Columbia students</span>
                </div>

                <h1 className="hero-title">
                    Stop Texting.
                    <br />
                    <span className="gradient-text">Start Meeting.</span>
                </h1>

                <p className="hero-description">
                    Meet in real life, not endless chats. Post your plan, see who&apos;s nearby, and start hanging out faster.
                </p>

                <ul className="hero-highlights" aria-label="What Circle helps with">
                    <li>
                        <CalendarDays size={16} />
                        <span>Plan and join in seconds.</span>
                    </li>
                    <li>
                        <ShieldCheck size={16} />
                        <span>Verified Columbia-only community.</span>
                    </li>
                    <li>
                        <Sparkles size={16} />
                        <span>Join a circle in one tap, no awkwardness.</span>
                    </li>
                </ul>

                <form className="hero-form" onSubmit={(event) => event.preventDefault()}>
                    <label className="hero-form-label" htmlFor="hero-waitlist">
                        Get notified for launch
                    </label>
                    <div className="input-group">
                        <input
                            id="hero-waitlist"
                            type="email"
                            name="email"
                            placeholder="uni@columbia.edu"
                            className="email-input"
                            required
                        />
                        <button type="submit" className="btn-primary form-submit">
                            Join Waitlist
                        </button>
                    </div>
                    <p className="hero-subtext">Join 2,000+ students on the waitlist.</p>
                </form>
            </div>

            <div className="hero-visual">
                <div className="phone-mockup phone-mockup-1">
                    <div className="phone-screen">
                        <div className="phone-header">Activity Feed</div>
                        <div className="phone-card">Alex J. is heading to Butler</div>
                        <div className="phone-card">3 friends are open at Joe&apos;s Pizza</div>
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
