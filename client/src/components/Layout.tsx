import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col font-sans text-text bg-background">
            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-heading font-bold tracking-tight">
                        One<span className="text-accent">.</span> Digital Office
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/work">Work</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/insights">Insights</NavLink>
                        <Link
                            to="/contact"
                            className="bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            Start Project <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col space-y-6 text-2xl font-light">
                            <MobileNavLink to="/services">Services</MobileNavLink>
                            <MobileNavLink to="/work">Work</MobileNavLink>
                            <MobileNavLink to="/about">About</MobileNavLink>
                            <MobileNavLink to="/insights">Insights</MobileNavLink>
                            <MobileNavLink to="/contact">Contact</MobileNavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow pt-24 md:pt-0">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-surface py-16 border-t border-white/10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-heading font-bold mb-6">
                            One<span className="text-accent">.</span> Digital Office
                        </h3>
                        <p className="text-text-muted max-w-sm">
                            We build premium digital experiences for forward-thinking brands.
                            Innovation, design, and technology in perfect harmony.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/work" className="hover:text-white transition-colors">Work</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Social</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-text-muted text-sm">
                    © {new Date().getFullYear()} One Digital Office. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-white' : 'text-text-muted hover:text-white'
                }`}
        >
            {children}
        </Link>
    );
};

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    return (
        <Link to={to} className="block border-b border-white/10 pb-4 hover:text-accent transition-colors">
            {children}
        </Link>
    );
};
