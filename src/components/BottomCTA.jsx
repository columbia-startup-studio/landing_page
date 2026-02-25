import React from 'react'
import useWaitlist from '../useWaitlist'

const BottomCTA = () => {
    const { status, submit } = useWaitlist()

    return (
        <section
            id="download"
            className="relative overflow-hidden min-h-screen flex items-center justify-center py-16 md:py-24 text-center"
            style={{
                background: 'radial-gradient(circle at 14% 18%, #dbeafe 0%, rgba(219,234,254,0) 38%), radial-gradient(circle at 85% 72%, #ede9fe 0%, rgba(237,233,254,0) 38%), linear-gradient(140deg, #eff6ff 0%, #f5f3ff 40%, #ecfeff 100%)'
            }}
        >
            {/* Decorative sunbursts */}
            <div className="absolute rounded-full w-[720px] aspect-square pointer-events-none -top-[250px] -left-[170px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.26)_0%,_rgba(59,130,246,0)_58%)] blur-sm" aria-hidden="true" />
            <div className="absolute rounded-full w-[620px] aspect-square pointer-events-none -right-[210px] -bottom-[260px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.24)_0%,_rgba(99,102,241,0)_56%)] blur-sm" aria-hidden="true" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-35 md:opacity-60 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(17,24,39,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.03) 1px, transparent 1px)',
                    backgroundSize: '72px 72px',
                    maskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.6), transparent 72%)'
                }}
                aria-hidden="true"
            />

            <div className="max-w-[760px] mx-auto relative z-10 px-5 md:px-6 flex flex-col items-center">
                <p className="mb-6 px-3 py-1.5 text-blue-700 text-xs md:text-[0.78rem] font-semibold rounded-full bg-gradient-to-br from-[#eef2ff] to-[#f5f3ff] border border-blue-500/25 tracking-tight">
                    Columbia students only
                </p>

                <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black text-gray-900 mb-4 md:mb-6 tracking-[-0.035em] leading-[1.02]" style={{ textWrap: 'balance' }}>
                    Ready to join the Circle?
                </h2>

                <p className="max-w-[560px] text-base md:text-[1.22rem] text-text-secondary leading-relaxed mb-5 md:mb-10">
                    Be the first to know when we launch on campus. Spots are limited for the beta release.
                </p>

                {status === 'success' ? (
                    <p className="text-xl font-semibold text-emerald-600 mt-6">You&apos;re on the list! We&apos;ll be in touch.</p>
                ) : (
                    <form className="mt-1 md:mt-2 w-full max-w-[640px]" onSubmit={(e) => { e.preventDefault(); submit(e.target.email.value) }}>
                        <label htmlFor="bottom-cta-email" className="mb-4 block text-center text-text-secondary text-[0.96rem] font-semibold">
                            Get early access for Columbia students
                        </label>
                        <div className="flex flex-col md:flex-row gap-3 w-full items-stretch">
                            <input
                                id="bottom-cta-email"
                                type="email"
                                name="email"
                                placeholder="uni@columbia.edu"
                                className="flex-1 min-h-[52px] px-5 rounded-full border border-slate-900/15 text-base outline-none bg-white/95 transition-all focus:border-blue-300 focus:shadow-[0_0_0_4px_rgba(147,197,253,0.22)] focus:bg-white focus:-translate-y-0.5 w-full"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-black text-white min-h-[52px] px-8 rounded-full text-[1.05rem] font-bold whitespace-nowrap shadow-[0_16px_30px_-14px_#000] hover:-translate-y-0.5 transition-all w-full md:w-auto"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                            </button>
                        </div>
                        <p className="mt-3 md:mt-4 text-sm md:text-[0.9rem] text-text-tertiary">2,000+ students waiting for launch</p>
                    </form>
                )}
            </div>
        </section>
    )
}

export default BottomCTA
