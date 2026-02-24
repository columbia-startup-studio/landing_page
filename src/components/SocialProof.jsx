import React from 'react'
import { GraduationCap } from 'lucide-react'
import './SocialProof.css'

const SocialProof = () => {
    const profiles = [
        { name: 'Sarah L.', info: "CC '25 • History" },
        { name: 'James W.', info: "GS '24 • Philosophy" },
        { name: 'Maya K.', info: "SEAS '26 • CS" },
        { name: 'Leo M.', info: "SIPA '24 • IA" }
    ];

    return (
        <section id="community" className="social-proof-section">
            <div className="container">
                <div className="section-header">
                    <div className="social-badge">
                        <GraduationCap size={12} />
                        Built for Columbia students
                    </div>
                    <h2 className="section-title">Who&apos;s on Circle?</h2>
                    <p className="section-subtitle">
                        Join your classmates from Columbia, Barnard, SEAS, and more. Real students, verified by university email.
                    </p>
                </div>

                <div className="profile-cards">
                    {profiles.map((profile, index) => (
                        <div key={index} className="profile-card">
                            <div className="profile-img-placeholder"></div>
                            <div className="profile-info">
                                <div className="profile-name">{profile.name}</div>
                                <div className="profile-major">{profile.info}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="verified-badge">
                    Verified university email required for signup.
                </div>
            </div>
        </section>
    )
}

export default SocialProof
