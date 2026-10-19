import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ConsultationForm } from './ConsultationForm';

export interface IndustryPageProps {
    slug: string;
    title: string;
    tagline: string;
    headline: string;
    metaDescription: string;
    keywords: string;
    sectorIcon?: React.ElementType;
    overview: string;
    challenges: { title: string; desc: string }[];
    solutions: { title: string; desc: string; icon?: React.ElementType }[];
    regulatoryCompliance: string[];
    outcomes: { metric: string; title: string; desc: string }[];
}

export const IndustryPageTemplate: React.FC<IndustryPageProps> = ({
    slug,
    title,
    tagline,
    headline,
    metaDescription,
    keywords,
    sectorIcon: SectorIcon = Building2,
    overview,
    challenges,
    solutions,
    regulatoryCompliance,
    outcomes
}) => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title={title}
                description={metaDescription}
                keywords={keywords}
                canonicalPath={`/industries/${slug}`}
            />

            {/* Hero */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <SectorIcon size={14} />
                        <span>{tagline}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight"
                    >
                        {headline}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted leading-relaxed mb-8"
                    >
                        {overview}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <Link
                            to="/book-consultation"
                            className="px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                        >
                            <Calendar size={16} />
                            Schedule Sector Discovery Call
                        </Link>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Sector Pain Points
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Unique Industry Challenges
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {challenges.map((c, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-surface border border-border">
                                <div className="text-xs font-bold text-red-400 mb-2">CHALLENGE 0{i + 1}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20 md:py-28 bg-surface-elevated/30 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Architectural Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            How OneDigitalOffice Solves Them
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {solutions.map((s, i) => (
                            <div key={i} className="p-8 rounded-2xl glass-panel border border-border">
                                <h3 className="text-xl font-heading font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulatory & Compliance Focus */}
            <section className="py-16 border-b border-border/40 bg-surface">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4 text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck size={14} />
                        <span>UK Regulatory Compliance</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Built for Strict UK Statutory Environments
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {regulatoryCompliance.map((reg, i) => (
                            <span key={i} className="px-4 py-2 rounded-xl bg-surface-elevated border border-border text-xs font-bold text-white">
                                {reg}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Measurable Impact
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Target Sector Outcomes
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {outcomes.map((o, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-surface border border-border text-center">
                                <div className="text-4xl font-extrabold text-gradient-primary mb-2">{o.metric}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{o.title}</h3>
                                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation CTA */}
            <section className="py-20 md:py-28 bg-surface-elevated/40">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ConsultationForm
                        initialService={`${title} Sector`}
                        headline={`Transform Your ${title} Operations`}
                        subheadline="Discuss your sector-specific compliance, governance, and Microsoft technology roadmap with our Senior Solutions Architect."
                    />
                </div>
            </section>
        </div>
    );
};
