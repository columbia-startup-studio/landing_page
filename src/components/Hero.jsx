import React from 'react'
import { GraduationCap, CalendarDays, Sparkles, ShieldCheck } from 'lucide-react'
import useWaitlist from '../useWaitlist'

const Hero = () => {
    const { status, submit } = useWaitlist()

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

                {/* Phone mockups - hidden below lg */}
                <div className="hidden lg:flex flex-1 relative min-h-[560px] xl:min-h-[640px] justify-center items-center">
                    <div className="w-[280px] h-[580px] bg-white rounded-[40px] shadow-[0_28px_56px_-20px_rgba(0,0,0,0.35)] border-[8px] border-gray-800 absolute overflow-hidden -rotate-[5deg] -translate-x-[70px] z-[1]">
                        <div className="p-6 h-full bg-gray-50">
                            <div className="font-bold text-[1.24rem] mb-8 text-center text-gray-900">Activity Feed</div>
                            <div className="bg-white p-4 rounded-xl shadow-[0_6px_10px_-5px_rgba(0,0,0,0.08)] mb-4 text-[0.95rem] text-gray-600">Alex J. is heading to Butler</div>
                            <div className="bg-white p-4 rounded-xl shadow-[0_6px_10px_-5px_rgba(0,0,0,0.08)] mb-4 text-[0.95rem] text-gray-600">3 friends are open at Joe&apos;s Pizza</div>
                        </div>
                    </div>

                    <div className="w-[280px] h-[580px] bg-white rounded-[40px] shadow-[-18px_26px_56px_-18px_rgba(0,0,0,0.33)] border-[8px] border-gray-800 absolute overflow-hidden rotate-[5deg] translate-x-[90px] translate-y-[36px] z-[2]">
                        <div className="p-6 h-full bg-gray-50 relative">
                            <div className="font-bold text-[1.24rem] mb-8 text-center text-gray-900">Study Session at Butler</div>
                            <div className="w-[150px] h-[150px] rounded-full border-2 border-dashed border-gray-300 mx-auto mt-8" />
                            <div className="absolute bottom-8 left-6 right-6">
                                <span className="block w-full py-3 bg-gray-900 text-white rounded-full font-semibold text-center">Join Circle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
