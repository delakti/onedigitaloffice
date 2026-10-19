import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Database, 
  Share2, 
  Bot, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform: React.FC = () => {
    const capabilities = [
        {
            title: 'Knowledge Indexing',
            description: 'Securely ingest and index your SharePoint, Teams, and Email data into a private, searchable brain.',
            icon: <Database className="text-primary" size={32} />,
            tags: ['Private Vector DB', 'MS Graph Integration']
        },
        {
            title: 'Cognitive Workflows',
            description: 'Automate complex, multi-step business processes that require reasoning and decision-making.',
            icon: <Workflow className="text-accent" size={32} />,
            tags: ['Agentic Workflows', 'Error-Correction']
        },
        {
            title: 'Secure AI Assistants',
            description: 'Deploy role-specific AI assistants that provide accurate answers based on your internal documentation.',
            icon: <Bot className="text-accent-cyan" size={32} />,
            tags: ['RAG Architecture', 'Zero-leakage']
        },
        {
            title: 'Enterprise Governance',
            description: 'Strict data residency, audit logs, and permission-aware AI that respects your existing MS 365 security.',
            icon: <ShieldCheck className="text-primary" size={32} />,
            tags: ['GDPR Compliant', 'SOC2 Ready']
        },
        {
            title: 'Cross-System Orchestration',
            description: 'Connect siloed systems through an intelligent API layer that talks back to your legacy tools.',
            icon: <Share2 className="text-accent" size={32} />,
            tags: ['Legacy Sync', 'Real-time Webhooks']
        },
        {
            title: 'Predictive Intelligence',
            description: 'Move from reactive to proactive with AI that flags bottlenecks before they impact your operations.',
            icon: <Cpu className="text-accent-cyan" size={32} />,
            tags: ['Trend Analysis', 'Anomaly Detection']
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-background">
            <div className="container-tight px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                        The Platform
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">Capabilities that Scale.</h1>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        The ODO AI Platform is built to integrate deeply with your existing infrastructure, 
                        providing a unified intelligence layer that transforms how your organisation operates.
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[32px] glass-panel glass-panel-hover border-border group"
                        >
                            <div className="mb-8 p-4 bg-background rounded-2xl border border-border w-fit group-hover:scale-110 transition-transform duration-300">
                                {cap.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
                            <p className="text-text-muted mb-8 leading-relaxed">{cap.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {cap.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 px-2.5 py-1 rounded text-text-dim">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Deployment Phases */}
                <div className="pt-24 border-t border-border">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4">Your Transformation Roadmap</h2>
                        <p className="text-text-muted">Measurable outcomes at every step of the journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phase 1 */}
                        <div className="p-10 rounded-[32px] bg-surface-elevated/50 border border-border">
                            <div className="text-sm font-bold text-primary mb-2">PHASE 01</div>
                            <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">Discovery & Pilot</h3>
                            <p className="text-text-muted mb-8 text-sm">Audit existing systems and deploy a secure AI pilot for a specific department.</p>
                            <div className="text-lg font-bold text-white mb-6">30 DAYS</div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Data Governance Audit</li>
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Core AI Setup</li>
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> KPI Baseline</li>
                            </ul>
                        </div>

                        {/* Phase 2 */}
                        <div className="p-10 rounded-[32px] glass-panel border-primary/50 relative transform md:-translate-y-4 shadow-2xl shadow-primary/10">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Accelerated</div>
                            <div className="text-sm font-bold text-primary mb-2 uppercase">PHASE 02</div>
                            <h3 className="text-2xl font-bold mb-4">Full Integration</h3>
                            <p className="text-text-muted mb-8 text-sm">Scale the AI layer across the organisation and automate core operational workflows.</p>
                            <div className="text-lg font-bold text-white mb-6">60-90 DAYS</div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Custom Agent Training</li>
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Workflow Automation</li>
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Staff Upskilling</li>
                            </ul>
                        </div>

                        {/* Phase 3 */}
                        <div className="p-10 rounded-[32px] bg-surface-elevated/50 border border-border">
                            <div className="text-sm font-bold text-primary mb-2 uppercase">PHASE 03</div>
                            <h3 className="text-2xl font-bold mb-4">Continuous Intelligence</h3>
                            <p className="text-text-muted mb-8 text-sm">Ongoing optimization, security monitoring, and deployment of new AI capabilities.</p>
                            <div className="text-lg font-bold text-white mb-6">ONGOING</div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Model Fine-tuning</li>
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Performance Monitoring</li>
                                <li className="flex items-center gap-3 text-sm text-text-muted"><Check className="text-primary" size={16} /> Feature Roadmap</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-all shadow-xl"
                        >
                            Schedule Platform Briefing <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;
