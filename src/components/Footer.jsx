import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 py-8">
            <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className="flex items-center gap-2 font-bold text-base">
                    <div className="relative w-4 h-4 rounded-full border-2 border-gray-200">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-gradient-start rounded-full" />
                    </div>
                    <span>Circle</span>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-text-secondary text-[0.9rem] hover:text-text-primary transition-colors">Privacy</a>
                    <a href="#" className="text-text-secondary text-[0.9rem] hover:text-text-primary transition-colors">Terms</a>
                    <a href="#" className="text-text-secondary text-[0.9rem] hover:text-text-primary transition-colors">Contact</a>
                </div>

                <div className="text-text-tertiary text-[0.9rem]">
                    &copy; {new Date().getFullYear()} Circle App.
                </div>
            </div>
        </footer>
    )
}

export default Footer
