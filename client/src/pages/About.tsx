import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award } from 'lucide-react';

const About: React.FC = () => {

    return (
        <div className="pt-32 pb-24">
            {/* Intro */}
            <div className="container mx-auto px-6 mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold mb-12"
                >
                    We are <br /> One Digital Office.
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
                        One Digital Office is a premier digital technology partner. We bridge the gap between complex engineering and elegant design.
                    </p>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Founded on the belief that technology should be an enabler, not a barrier, we work with ambitious brands to build scalable, future-proof digital products.
                        Our team consists of senior engineers, award-winning designers, and strategic thinkers.
                    </p>
                </motion.div>
            </div>

            {/* Differentiators */}
            <div className="bg-surface/50 py-32 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-16 text-center">Why Partner With Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security standards baked into every line of code.' },
                            { icon: Zap, title: 'Velocity', desc: 'Rapid prototyping and agile delivery without compromising quality.' },
                            { icon: Users, title: 'Partnership', desc: 'We act as an extension of your team, not just a vendor.' },
                            { icon: Award, title: 'Excellence', desc: 'Best-in-class engineering practices and design aesthetics.' }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Placeholder */}
            <div className="container mx-auto px-6 py-32">
                <h2 className="text-4xl font-bold mb-16">The Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group">
                            <div className="aspect-[3/4] bg-surface rounded-xl mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold">Team Member {i}</h3>
                            <p className="text-text-muted">Lead Engineer</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
