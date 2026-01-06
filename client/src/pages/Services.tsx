import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Code, Cloud, Database, FileText, Smartphone, Laptop, PenTool, Video, Film } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
    'Code': <Code size={32} />,
    'Cloud': <Cloud size={32} />,
    'Database': <Database size={32} />,
    'FileText': <FileText size={32} />,
    'Smartphone': <Smartphone size={32} />,
    'Layout': <Laptop size={32} />, // Using Laptop as proxy for 'Layout' in icon maps
    'PenTool': <PenTool size={32} />,
    'Video': <Video size={32} />,
    'Film': <Film size={32} />,
};

const Services: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        // In a real app, this would be an API call. For now, we'll use the static data or fetch from our local server if running.
        // For simplicity in this demo, I'll hardcode the list to match the server data, 
        // but demonstrating how it would look to map them.

        // Simulating API fetch
        const fetchServices = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/services');
                if (res.ok) {
                    const data = await res.json();
                    setServices(data);
                } else {
                    // Fallback if server isn't running
                    throw new Error('Failed to fetch');
                }
            } catch (e) {
                // Fallback data
                setServices([
                    { id: 1, title: 'Application Development', description: 'Custom software tailored to your business needs.', icon: 'Code' },
                    { id: 2, title: 'Cloud App Development', description: 'Scalable cloud-native architectures.', icon: 'Cloud' },
                    { id: 3, title: 'Database Development', description: 'Robust data modeling and optimization.', icon: 'Database' },
                    { id: 4, title: 'Information Management', description: 'Organize and secure your enterprise data.', icon: 'FileText' },
                    { id: 5, title: 'Mobile App Development', description: 'Native and cross-platform mobile solutions.', icon: 'Smartphone' },
                    { id: 6, title: 'iOS & Android Dev', description: 'Dedicated development for Apple and Google ecosystems.', icon: 'Smartphone' },
                    { id: 7, title: 'Web Design', description: 'Visual storytelling and user-centric interfaces.', icon: 'Layout' },
                    { id: 8, title: 'Visual Design', description: 'Brand identity and graphic design assets.', icon: 'PenTool' },
                    { id: 9, title: 'Videography', description: 'Professional video production.', icon: 'Video' },
                    { id: 10, title: 'Video Editing', description: 'Post-production and motion graphics.', icon: 'Film' },
                ]);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-text-muted max-w-2xl">
                        End-to-end digital capabilities to transform your business.
                        From strategy to execution, we deliver excellence.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-surface/30 border border-white/10 hover:border-accent/50 transition-colors group"
                        >
                            <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                {iconMap[service.icon] || <Code />}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-text-muted mb-6">{service.description}</p>

                            {/* Tech Stack Tags (Mocked for visual) */}
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-text-muted">TypeScript</span>
                                <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-text-muted">React</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Engagement Models */}
                <div className="border-t border-white/10 pt-24">
                    <h2 className="text-4xl font-bold mb-16 text-center">Engagement Models</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Fixed Price */}
                        <div className="p-8 rounded-2xl bg-surface border border-white/10 relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4">Fixed Price</h3>
                            <p className="text-text-muted mb-8">Perfect for well-defined projects with clear scope and deliverables.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Clear budget</li>
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Defined timeline</li>
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Minimal risk</li>
                            </ul>
                        </div>

                        {/* Time & Materials */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-surface to-accent/10 border border-accent/20 relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <h3 className="text-2xl font-bold mb-4">Time & Materials</h3>
                            <p className="text-text-muted mb-8">Flexible engagement for evolving projects and agile development.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> High flexibility</li>
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Pay as you go</li>
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Agile scope</li>
                            </ul>
                        </div>

                        {/* Retainer */}
                        <div className="p-8 rounded-2xl bg-surface border border-white/10 relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4">Dedicated Team</h3>
                            <p className="text-text-muted mb-8">Long-term partnership with a dedicated squad of experts.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Dedicated PM</li>
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Scale up/down</li>
                                <li className="flex items-center gap-3"><Check className="text-accent" size={18} /> Deep knowledge</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
