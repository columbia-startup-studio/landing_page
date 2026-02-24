import React from 'react'
import './BottomCTA.css'

const BottomCTA = () => {
    return (
        <section id="download" className="bottom-cta-section container">
            <div className="cta-content">
                <h2 className="cta-title">Ready to join the Circle?</h2>
                <p className="cta-subtitle">
                    Be the first to know when we launch on campus. Spots are limited for the beta release.
                </p>

                <div className="cta-form">
                    <input type="email" placeholder="uni@columbia.edu" className="cta-input" />
                    <button className="btn-primary form-submit">Join Waitlist</button>
                </div>
            </div>
        </section>
    )
}

export default BottomCTA
