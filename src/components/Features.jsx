import React from 'react'
import { MessageSquare, Eye, Zap } from 'lucide-react'
import './Features.css'

const Features = () => {
    const featureList = [
        {
            icon: <MessageSquare className="feature-icon" color="#3b82f6" />,
            iconBg: '#eff6ff',
            title: "No \"Who's Down?\" Texts",
            description: "Don't spam the group chat just to get left on read. Post an activity and let interested people come to you."
        },
        {
            icon: <Eye className="feature-icon" color="#10b981" />,
            iconBg: '#ecfdf5',
            title: "See Who's Already There",
            description: "Know exactly who is going before you commit. See profile cards of attendees instantly."
        },
        {
            icon: <Zap className="feature-icon" color="#8b5cf6" />,
            iconBg: '#f5f3ff',
            title: "Join with One Tap",
            description: "Found something you like? One tap to say \"I'm in\" or \"On my way\". No awkward explanations needed."
        }
    ];

    return (
        <section id="how-it-works" className="features-section container">
            <div className="section-header">
                <h2 className="section-title">Frictionless Hanging Out</h2>
                <p className="section-subtitle">
                    Stop coordinating in 5 different group chats. Circle makes it effortless to see what's happening and join in.
                </p>
            </div>

            <div className="features-grid">
                {featureList.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="icon-wrapper" style={{ backgroundColor: feature.iconBg }}>
                            {feature.icon}
                        </div>
                        <h3 className="feature-card-title">{feature.title}</h3>
                        <p className="feature-card-desc">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
