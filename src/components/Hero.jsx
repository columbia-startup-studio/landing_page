import React, { useState, useEffect } from 'react'
import { GraduationCap, CalendarDays, Sparkles, ShieldCheck, ArrowLeft, MapPin, Clock, UserPlus } from 'lucide-react'
import useWaitlist from '../useWaitlist'

const Hero = () => {
    const { status, submit } = useWaitlist()
    const [activePhone, setActivePhone] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePhone((current) => (current === 0 ? 1 : 0))
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="hero" className="relative overflow-hidden isolate w-full min-h-screen pt-24 pb-14 md:pb-20">
            <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col lg:flex-row items-center lg:items-center lg:justify-between h-full">
                {/* Background orbs */}
                <div className="absolute rounded-full opacity-55 pointer-events-none -z-10 blur-[70px] w-[340px] h-[340px] bg-[radial-gradient(circle,_rgba(191,219,254,0.95)_0%,_rgba(191,219,254,0.25)_65%,_rgba(191,219,254,0)_100%)] -left-20 top-15" aria-hidden="true" />
                <div className="absolute rounded-full opacity-55 pointer-events-none -z-10 blur-[70px] w-[280px] h-[280px] bg-[radial-gradient(circle,_rgba(216,180,254,0.95)_0%,_rgba(216,180,254,0.2)_65%,_rgba(216,180,254,0)_100%)] -right-[70px] bottom-30" aria-hidden="true" />

                {/* Content */}
                <div className="flex-1 max-w-[610px] z-10 text-center lg:text-left flex flex-col items-center lg:items-start mb-10 lg:mb-0 lg:pr-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#f0f5ff] to-[#faf5ff] text-blue-700 px-4 py-2 rounded-full border border-blue-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_14px_22px_-14px_rgba(37,99,235,0.5)] text-[0.92rem] font-semibold tracking-tight mt-3 mb-6">
                        <GraduationCap size={14} className="w-3.5 h-3.5 p-0.5 rounded-full bg-blue-500/15 text-blue-700" />
                        <span>Built for Columbia students</span>
                    </div>

                    <h1 className="text-[clamp(2.7rem,11vw,3.45rem)] md:text-[clamp(2.9rem,9vw,4.2rem)] lg:text-[clamp(3.05rem,9vw,5.4rem)] font-[820] leading-[1.02] tracking-[-0.035em] mb-5 text-gray-900">
                        Stop Texting.
                        <br />
                        <span className="bg-gradient-to-br from-blue-gradient-start to-blue-gradient-end bg-clip-text text-transparent">Start Meeting.</span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-[1.22rem] text-text-secondary leading-relaxed lg:leading-[1.65] mb-6 max-w-[540px]">
                        Meet in real life, not endless chats. Post your plan, see who&apos;s nearby, and start hanging out faster.
                    </p>

                    <ul className="list-none m-0 mb-7 p-0 grid gap-2.5" aria-label="What Circle helps with">
                        <li className="inline-flex items-center gap-2.5 text-text-primary text-[0.94rem] md:text-[0.98rem] font-medium">
                            <CalendarDays size={16} className="text-blue-600 shrink-0" />
                            <span>Plan and join in seconds.</span>
                        </li>
                        <li className="inline-flex items-center gap-2.5 text-text-primary text-[0.94rem] md:text-[0.98rem] font-medium">
                            <ShieldCheck size={16} className="text-blue-600 shrink-0" />
                            <span>Verified Columbia-only community.</span>
                        </li>
                        <li className="inline-flex items-center gap-2.5 text-text-primary text-[0.94rem] md:text-[0.98rem] font-medium">
                            <Sparkles size={16} className="text-blue-600 shrink-0" />
                            <span>Join a circle in one tap, no awkwardness.</span>
                        </li>
                    </ul>

                    {status === 'success' ? (
                        <p className="text-lg font-semibold text-emerald-600">You&apos;re on the list! We&apos;ll be in touch.</p>
                    ) : (
                        <form className="flex flex-col gap-3 w-full" onSubmit={(e) => { e.preventDefault(); submit(e.target.email.value) }}>
                            <label className="text-[0.95rem] text-text-secondary font-semibold" htmlFor="hero-waitlist">
                                Get notified for launch
                            </label>
                            <div className="flex flex-col md:flex-row gap-3 max-w-[450px] w-full">
                                <input
                                    id="hero-waitlist"
                                    type="email"
                                    name="email"
                                    placeholder="uni@columbia.edu"
                                    className="flex-1 py-3.5 px-5 rounded-full border border-gray-200 text-base min-h-[44px] outline-none bg-white/80 transition-all focus:border-blue-300 focus:shadow-[0_0_0_3px_rgba(147,197,253,0.22)] focus:-translate-y-0.5 w-full"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-black text-white py-3.5 px-7 rounded-full font-semibold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all w-full md:w-auto whitespace-nowrap"
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                                </button>
                            </div>
                            <p className="text-[0.92rem] text-text-tertiary text-center lg:text-left">Join 2,000+ students on the waitlist.</p>
                        </form>
                    )}
                </div>

                {/* Phone mockups - visible on mobile as a single straight phone, two overlapping on desktop */}
                <div className="flex flex-1 relative min-h-[500px] lg:min-h-[560px] xl:min-h-[640px] justify-center items-center w-full mt-10 lg:mt-0 scale-[0.85] origin-top lg:scale-100">
                    {/* First Phone: Activity Feed */}
                    <div className={`w-[280px] h-[580px] bg-white rounded-[40px] shadow-[0_28px_56px_-20px_rgba(0,0,0,0.35)] border-[8px] border-gray-800 absolute overflow-hidden z-[1] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom lg:origin-center 
                        ${activePhone === 0 ? 'opacity-100 scale-[1] lg:scale-100' : 'opacity-0 scale-[0.8] lg:scale-[0.8] pointer-events-none lg:pointer-events-auto'} 
                        lg:opacity-100 lg:-rotate-[5deg] lg:-translate-x-[70px]`}>
                        <div className="p-6 h-full bg-gray-50 flex flex-col">
                            <div className="font-bold text-[1.24rem] mb-8 text-center text-gray-900 border-b border-gray-200 pb-4">Activity</div>

                            <div className="bg-white p-4 rounded-[1.25rem] shadow-sm ring-1 ring-gray-100 mb-4 relative">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600">AJ</div>
                                    <div className="flex-1">
                                        <div className="text-[0.9rem] font-medium text-gray-900 leading-tight">Alex J. <span className="text-gray-500 font-normal">is heading to</span></div>
                                        <div className="text-[0.85rem] text-emerald-600 font-medium flex items-center gap-1 mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Study Circle</div>
                                    </div>
                                    <div className="text-[0.75rem] text-gray-400">2m</div>
                                </div>
                                <button className="w-full mt-2 py-2 bg-blue-50 text-blue-600 text-[0.85rem] font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors hover:bg-blue-100">
                                    <Sparkles size={14} /> Join Circle
                                </button>
                            </div>

                            <div className="bg-white p-4 rounded-[1.25rem] shadow-sm ring-1 ring-gray-100 mb-4 relative">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-200 to-orange-200 border-2 border-white shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 border-2 border-white shadow-sm"></div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[0.9rem] font-medium text-gray-900 leading-tight">3 friends <span className="text-gray-500 font-normal">are open at</span></div>
                                        <div className="text-[0.85rem] text-gray-500 mt-0.5">Lunch break</div>
                                    </div>
                                    <div className="text-[0.75rem] text-gray-400">15m</div>
                                </div>
                                <button className="w-full mt-2 py-2 bg-gray-50 border border-gray-200 text-gray-600 text-[0.85rem] font-semibold rounded-xl transition-colors hover:bg-gray-100">
                                    ✓ On my way
                                </button>
                            </div>

                            <div className="bg-white p-4 rounded-[1.25rem] shadow-sm ring-1 ring-gray-100 relative opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200"></div>
                                    <div className="flex-1">
                                        <div className="text-[0.9rem] font-medium text-gray-900 leading-tight">Sarah L. <span className="text-gray-500 font-normal">created a</span></div>
                                        <div className="text-[0.85rem] text-gray-500 mt-0.5">Study Circle</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Second Phone: Study Session */}
                    <div className={`w-[280px] h-[580px] bg-white rounded-[40px] shadow-[-18px_26px_56px_-18px_rgba(0,0,0,0.33)] border-[8px] border-gray-800 absolute overflow-hidden z-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom lg:origin-center
                        ${activePhone === 1 ? 'opacity-100 scale-[1]' : 'opacity-0 scale-[0.8] pointer-events-none lg:pointer-events-auto'}
                        lg:opacity-100 lg:scale-100 lg:rotate-[5deg] lg:translate-x-[90px] lg:translate-y-[36px]`}>
                        <div className="pt-8 px-5 pb-6 h-full bg-[#f8f9fa] relative flex flex-col items-center">
                            {/* Top Bar */}
                            <div className="w-full flex items-center mb-6">
                                <ArrowLeft size={18} className="text-gray-800" />
                                <span className="flex-1 text-center text-[0.7rem] font-bold tracking-[0.15em] text-[#6c7b8b] mr-4 uppercase">Circle Details</span>
                            </div>

                            {/* Header */}
                            <h3 className="font-[800] text-[1.45rem] leading-[1.15] text-center text-[#0b132b] tracking-tight mb-4 mt-2">
                                Study Session at<br />Butler
                            </h3>

                            {/* Visual Centerpiece (Avatars + Pill) */}
                            <div className="relative w-[210px] h-[210px] shrink-0 bg-[#f4f6f8] rounded-full border border-gray-100 flex items-center justify-center shadow-inner my-auto">
                                {/* Pastel Pseudo Avatars - symmetrical layout */}
                                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#a8f0cc] border-[3px] border-white shadow-sm" />
                                <div className="absolute top-[24%] right-[10%] w-12 h-12 rounded-full bg-[#ffea9d] border-[3px] border-white shadow-sm" />
                                <div className="absolute bottom-[24%] right-[10%] w-11 h-11 rounded-full bg-[#bbedff] border-[3px] border-white shadow-sm" />
                                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#ffcda8] border-[3px] border-white shadow-sm" />
                                <div className="absolute bottom-[24%] left-[10%] w-10 h-10 rounded-full bg-[#e2d5ff] border-[3px] border-white shadow-sm" />
                                <div className="absolute top-[24%] left-[10%] w-11 h-11 rounded-full bg-[#ffea9d] border-[3px] border-white shadow-sm" />

                                {/* Center Pill */}
                                <div className="relative z-10 bg-white px-5 py-3 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.12)] border border-gray-100 flex justify-center items-center">
                                    <span className="font-[800] text-[0.85rem] text-gray-900 tracking-tight whitespace-nowrap">17 Students Joined</span>
                                </div>
                            </div>

                            {/* Bottom Action Area */}
                            <div className="w-full flex flex-col items-center mt-auto z-[1]">
                                <p className="text-[0.8rem] text-[#6c7b8b] mb-4 text-center font-medium">Join the circle to start collaborating</p>
                                <button className="w-full py-3.5 bg-[#c2d7e0] hover:bg-[#b0c8d4] text-[#0b132b] rounded-full font-[800] text-[0.95rem] flex items-center justify-center gap-2 transition-all shadow-sm">
                                    <UserPlus size={18} strokeWidth={2.5} /> Join Circle
                                </button>
                            </div>

                            {/* iOS style home indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-gray-300 rounded-full" />
                        </div>
                    </div>
                </div>
                {/* Mobile Slider Dots Indicator */}
                <div className="flex lg:hidden justify-center items-center gap-2 mt-2 pb-6 w-full absolute bottom-4 border-none border-0 box-border bg-transparent outline-none m-0 p-0 shadow-none z-10 left-1/2 -translate-x-1/2 pointer-events-none">
                    <button onClick={() => setActivePhone(0)} aria-label="Show Activity Screen" className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto outline-none ${activePhone === 0 ? 'bg-blue-600 w-6' : 'bg-gray-300'}`} />
                    <button onClick={() => setActivePhone(1)} aria-label="Show Study Circle Screen" className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto outline-none ${activePhone === 1 ? 'bg-blue-600 w-6' : 'bg-gray-300'}`} />
                </div>
            </div>
        </section>
    )
}

export default Hero
