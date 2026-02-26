import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <>
            {/* Backdrop blur bar */}
            <div className="fixed top-0 left-0 right-0 h-16 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5" />

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-4 max-w-[1200px] mx-auto">
                <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
                    <div className="relative w-6 h-6 rounded-full border-[3px] border-gray-200">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-gradient-start rounded-full" />
                    </div>
                    <span>Circle</span>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex gap-10">
                    <a href="#how-it-works" className="text-text-secondary font-medium text-[0.95rem] hover:text-text-primary transition-colors">How it works</a>
                    <a href="#community" className="text-text-secondary font-medium text-[0.95rem] hover:text-text-primary transition-colors">Community</a>
                    <a href="#download" className="text-text-secondary font-medium text-[0.95rem] hover:text-text-primary transition-colors">Download</a>
                </div>

                <div className="flex items-center gap-3">
                    {/* Hamburger button */}
                    <button
                        className="md:hidden p-2 text-text-primary"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 md:hidden">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-text-primary font-medium text-base py-2">How it works</a>
                        <a href="#community" onClick={() => setMobileOpen(false)} className="text-text-primary font-medium text-base py-2">Community</a>
                        <a href="#download" onClick={() => setMobileOpen(false)} className="text-text-primary font-medium text-base py-2">Download</a>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navigation
