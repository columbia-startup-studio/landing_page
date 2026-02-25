import React from 'react'
import { MessageSquare, Eye, Zap } from 'lucide-react'

const Features = () => {
    const featureList = [
        {
            icon: <MessageSquare className="w-6 h-6" color="#3b82f6" />,
            iconBg: '#eff6ff',
            title: "No \"Who's Down?\" Texts",
            description: "Don't spam the group chat just to get left on read. Post an activity and let interested people come to you."
        },
        {
            icon: <Eye className="w-6 h-6" color="#10b981" />,
            iconBg: '#ecfdf5',
            title: "See Who's Already There",
            description: "Know exactly who is going before you commit. See profile cards of attendees instantly."
        },
        {
            icon: <Zap className="w-6 h-6" color="#8b5cf6" />,
            iconBg: '#f5f3ff',
            title: "Join with One Tap",
            description: "Found something you like? One tap to say \"I'm in\" or \"On my way\". No awkward explanations needed."
        }
    ];

    return (
        <section id="how-it-works" className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="text-center max-w-[600px] mx-auto mb-12 md:mb-16">
                <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold mb-4 text-gray-900">Frictionless Hanging Out</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                    Stop coordinating in 5 different group chats. Circle makes it effortless to see what&apos;s happening and join in.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {featureList.map((feature, index) => (
                    <div key={index} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                        <div className="inline-flex p-4 rounded-2xl mb-6" style={{ backgroundColor: feature.iconBg }}>
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                        <p className="text-text-secondary leading-relaxed text-[0.95rem]">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
