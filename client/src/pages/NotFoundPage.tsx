import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Layers, Calendar, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-[75vh] flex items-center justify-center text-text py-20">
            <SEO
                title="Page Not Found (404) | OneDigitalOffice"
                description="The page you requested could not be found. Explore our Microsoft 365, SharePoint, and AI solutions."
                canonicalPath="/404"
            />

            <div className="container mx-auto px-6 max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 sm:p-14 rounded-3xl glass-panel border border-border"
                >
                    <div className="text-7xl sm:text-8xl font-heading font-extrabold text-gradient-primary mb-4">
                        404
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                        Page Not Found
                    </h1>
                    <p className="text-sm text-text-muted leading-relaxed mb-8 max-w-md mx-auto">
                        The URL you navigated to may have moved, been renamed, or does not exist. Use the links below to find what you are looking for.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-xs font-semibold">
                        <Link
                            to="/"
                            className="p-3 rounded-xl bg-surface border border-border hover:border-primary text-white transition-all flex flex-col items-center gap-1.5"
                        >
                            <Home size={18} className="text-primary" />
                            <span>Homepage</span>
                        </Link>
                        <Link
                            to="/solutions"
                            className="p-3 rounded-xl bg-surface border border-border hover:border-primary text-white transition-all flex flex-col items-center gap-1.5"
                        >
                            <Layers size={18} className="text-accent" />
                            <span>Solutions</span>
                        </Link>
                        <Link
                            to="/book-consultation"
                            className="p-3 rounded-xl bg-surface border border-border hover:border-primary text-white transition-all flex flex-col items-center gap-1.5"
                        >
                            <Calendar size={18} className="text-accent-cyan" />
                            <span>Consultation</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="p-3 rounded-xl bg-surface border border-border hover:border-primary text-white transition-all flex flex-col items-center gap-1.5"
                        >
                            <Mail size={18} className="text-primary" />
                            <span>Contact Us</span>
                        </Link>
                    </div>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
                    >
                        <ArrowLeft size={14} />
                        Return to Homepage
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};
export default NotFoundPage;
