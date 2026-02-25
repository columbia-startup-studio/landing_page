import React from 'react'
import { GraduationCap } from 'lucide-react'

const SocialProof = () => {
    const profiles = [
        { name: 'Sarah L.', info: "CC '25 • History" },
        { name: 'James W.', info: "GS '24 • Philosophy" },
        { name: 'Maya K.', info: "SEAS '26 • CS" },
        { name: 'Leo M.', info: "SIPA '24 • IA" }
    ];

    return (
        <section id="community" className="bg-gray-100 py-16 md:py-32">
            <div className="max-w-[1200px] mx-auto px-5 md:px-8">
                <div className="text-center max-w-[600px] mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-1.5 mb-3.5 text-blue-700 text-[0.8rem] font-semibold px-3 py-1.5 rounded-full border border-blue-500/25 bg-gradient-to-br from-[#eef2ff] to-[#f5f3ff]">
                        <GraduationCap size={12} className="w-3 h-3" />
                        Built for Columbia students
                    </div>
                    <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold mb-4 text-gray-900">Who&apos;s on Circle?</h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        Join your classmates from Columbia, Barnard, SEAS, and more. Real students, verified by university email.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-16 justify-center items-center">
                    {profiles.map((profile, index) => (
                        <div key={index} className="w-full max-w-[320px] md:max-w-[280px] bg-white rounded-full p-3 flex items-center gap-4 shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-gray-800 shrink-0" />
                            <div className="flex flex-col">
                                <div className="font-semibold text-gray-900 text-[0.95rem]">{profile.name}</div>
                                <div className="text-xs text-text-tertiary">{profile.info}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <span className="inline-block px-6 py-3 bg-white border border-gray-200 rounded-lg text-text-secondary text-[0.85rem]">
                        Verified university email required for signup.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default SocialProof
