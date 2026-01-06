import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout as LayoutIcon, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none" />

                <div className="container mx-auto px-6 text-center z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-8"
                    >
                        Build. Scale. <br />
                        <span className="text-gradient">Innovate.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-text-muted max-w-2xl mx-auto mb-10"
                    >
                        We are a premium digital studio crafting world-class applications,
                        intelligent platforms, and stunning digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/contact" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                            Book a Call <ArrowRight size={18} />
                        </Link>
                        <Link to="/work" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
                            View Work
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Trust Strip */}
            <div className="border-y border-white/5 py-8 bg-surface/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-text-muted font-mono text-sm uppercase tracking-widest opacity-70">
                        <span>Application</span>
                        <span>Cloud</span>
                        <span>Data</span>
                        <span>Design</span>
                        <span>Media</span>
                    </div>
                </div>
            </div>

            {/* Services Grid Preview */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
                        <div className="h-1 w-20 bg-accent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'App Development', icon: Code, desc: 'Robust, scalable custom software solutions.' },
                            { title: 'Cloud Solutions', icon: Database, desc: 'Secure cloud architectures for the modern web.' },
                            { title: 'UI/UX Design', icon: LayoutIcon, desc: 'Award-winning interfaces that convert.' },
                            { title: 'Mobile', icon: Smartphone, desc: 'Native iOS and Android experiences.' },
                        ].map((s, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group cursor-default">
                                <s.icon className="text-accent mb-6" size={32} />
                                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{s.title}</h3>
                                <p className="text-text-muted">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/services" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium">
                            View All Services <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
