import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
    id: number;
    title: string;
    client: string;
    category: string;
    problem: string;
    approach: string;
    outcomes: string;
    techStack: string[];
    imageUrl: string;
}

const filters = ['All', 'App Development', 'Cloud', 'Data', 'Design', 'Media'];

const Work: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [works, setWorks] = useState<CaseStudy[]>([]);

    useEffect(() => {
        // Simulating API fetch
        const fetchWork = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/case-studies');
                if (res.ok) {
                    const data = await res.json();
                    setWorks(data);
                } else {
                    throw new Error('Failed to fetch');
                }
            } catch (e) {
                // Fallback Data
                setWorks([
                    {
                        id: 1,
                        title: 'Global Logistics Cloud Migration',
                        client: 'LogiGlobal',
                        category: 'Cloud',
                        problem: 'Legacy on-premise systems causing bottlenecks.',
                        approach: 'Migrated to AWS with microservices architecture.',
                        outcomes: '40% cost reduction, 99.99% uptime.',
                        techStack: ['AWS', 'Docker', 'Kubernetes', 'Node.js'],
                        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'
                    },
                    {
                        id: 2,
                        title: 'FinTech Mobile Banking App',
                        client: 'NeoBank',
                        category: 'App Development',
                        problem: 'Need for a secure, user-friendly mobile banking experience.',
                        approach: 'Native iOS and Android apps with biometric security.',
                        outcomes: '100k+ downloads in first month, 4.8 star rating.',
                        techStack: ['Swift', 'Kotlin', 'Firebase', 'Spring Boot'],
                        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000'
                    },
                    {
                        id: 3,
                        title: 'E-commerce Database Modernization',
                        client: 'ShopTrend',
                        category: 'Data',
                        problem: 'Slow query times during peak traffic.',
                        approach: 'Sharded MongoDB cluster implementation.',
                        outcomes: '5x faster query speeds, linear scalability.',
                        techStack: ['MongoDB', 'Redis', 'Express', 'React'],
                        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef5487b67cf4?auto=format&fit=crop&q=80&w=1000'
                    },
                    {
                        id: 5,
                        title: 'Luxury Brand Redesign',
                        client: 'Aura',
                        category: 'Design',
                        problem: 'Outdated website not reflecting brand premiumness.',
                        approach: 'Minimalist, motion-heavy design system.',
                        outcomes: '200% increase in lead conversion.',
                        techStack: ['Framer Motion', 'React', 'TailwindCSS', 'Sanity'],
                        imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000'
                    },
                    {
                        id: 6,
                        title: 'Tech Conference Coverage',
                        client: 'DevCon',
                        category: 'Media',
                        problem: 'Need high-quality recap videos for social media.',
                        approach: 'On-site videography and same-day editing.',
                        outcomes: '1M+ views across social platforms.',
                        techStack: ['Premiere Pro', 'After Effects', 'SonyFX3'],
                        imageUrl: 'https://images.unsplash.com/photo-1574717432729-32130e927c36?auto=format&fit=crop&q=80&w=1000'
                    }
                ]);
            }
        };
        fetchWork();
    }, []);

    const filteredWorks = activeFilter === 'All'
        ? works
        : works.filter(w => w.category === activeFilter || (activeFilter === 'App Development' && w.category === 'Mobile'));

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Featured Work</h1>
                    <p className="text-xl text-text-muted max-w-2xl text-balance">
                        Explore how we've helped leading brands innovate and grow through technology.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                    ? 'bg-white text-black'
                                    : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    <AnimatePresence mode='popLayout'>
                        {filteredWorks.map((work) => (
                            <motion.div
                                key={work.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group"
                            >
                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-surface">
                                    <img
                                        src={work.imageUrl}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="px-6 py-3 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Case Study
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-accent text-sm font-bold tracking-widest uppercase">{work.client}</span>
                                    <span className="text-text-muted text-xs font-mono">{work.category}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{work.title}</h3>
                                <p className="text-text-muted mb-4">{work.outcomes}</p>
                                <div className="flex flex-wrap gap-2">
                                    {work.techStack.map(tech => (
                                        <span key={tech} className="text-xs text-text-muted bg-white/5 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Work;
