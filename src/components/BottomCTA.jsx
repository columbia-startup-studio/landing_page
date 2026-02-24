import React from 'react'
import './BottomCTA.css'

const BottomCTA = () => {
    return (
        <section id="download" className="bottom-cta-section">
            <div className="cta-sunburst cta-sun-1" aria-hidden="true" />
            <div className="cta-sunburst cta-sun-2" aria-hidden="true" />
            <div className="cta-grid" />
            <div className="container cta-content">
                <p className="cta-kicker">Columbia students only</p>
                <h2 className="cta-title">Ready to join the Circle?</h2>
                <p className="cta-subtitle">
                    Be the first to know when we launch on campus. Spots are limited for the beta release.
                </p>

                <form className="cta-form" onSubmit={(event) => event.preventDefault()}>
                    <label htmlFor="bottom-cta-email" className="cta-form-label">
                        Get early access for Columbia students
                    </label>
                    <div className="cta-form-row">
                        <input
                            id="bottom-cta-email"
                            type="email"
                            placeholder="uni@columbia.edu"
                            className="cta-input"
                            required
                        />
                        <button type="submit" className="btn-primary cta-submit">
                            Join Waitlist
                        </button>
                    </div>
                    <p className="cta-footnote">2,000+ students waiting for launch</p>
                </form>
            </div>
        </section>
    )
}

export default BottomCTA
