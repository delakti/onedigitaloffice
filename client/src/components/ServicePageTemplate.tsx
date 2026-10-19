import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Sparkles, 
    Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ConsultationForm } from './ConsultationForm';

export interface ServicePageProps {
    slug: string;
    title: string;
    tagline: string;
    headline: string;
    metaDescription: string;
    keywords: string;
    badgeIcon?: React.ElementType;
    
    // 2. Customer Problem
    customerProblem: {
        headline: string;
        description: string;
        painPoints: { title: string; desc: string }[];
    };

    // 3. Business Outcomes
    businessOutcomes: {
        metric?: string;
        title: string;
        description: string;
    }[];

    // 4. Services Included
    servicesIncluded: {
        title: string;
        description: string;
        deliverables: string[];
    }[];

    // 5. Technical Capabilities
    technicalCapabilities: {
        name: string;
        description: string;
        tags: string[];
    }[];

    // 6. Delivery Methodology
    deliveryMethodology?: {
        phase: string;
        title: string;
        description: string;
    }[];

    // 7. Typical Engagement Process
    engagementProcess: {
        step: string;
        title: string;
        timeline: string;
        description: string;
    }[];

    // 8. Relevant FAQs
    faqs: {
        question: string;
        answer: string;
    }[];
}

const defaultMethodology = [
    { phase: '01', title: 'Discover & Assess', description: 'Deep-dive architectural audit of your existing Microsoft tenant, security posture, data hierarchy, and operational bottlenecks.' },
    { phase: '02', title: 'Architect & Design', description: 'Co-creating target-state blueprints, data models, information architecture, security boundaries, and user experience wireframes.' },
    { phase: '03', title: 'Implement & Validate', description: 'Agile engineering sprints, automated CI/CD deployments, unit/integration testing, and stringent compliance validation.' },
    { phase: '04', title: 'Adopt & Optimise', description: 'Structured persona-driven change enablement, KPI monitoring, performance tuning, and continuous managed support.' }
];

export const ServicePageTemplate: React.FC<ServicePageProps> = ({
    slug,
    title,
    tagline,
    headline,
    metaDescription,
    keywords,
    badgeIcon: BadgeIcon = Sparkles,
    customerProblem,
    businessOutcomes,
    servicesIncluded,
    technicalCapabilities,
    deliveryMethodology = defaultMethodology,
    engagementProcess,
    faqs
}) => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title={title}
                description={metaDescription}
                keywords={keywords}
                canonicalPath={`/solutions/${slug}`}
            />

            {/* 1. HERO SECTION */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            <BadgeIcon size={14} />
                            <span>{tagline}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-[1.15]"
                        >
                            {headline}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-text-muted leading-relaxed mb-10"
                        >
                            {metaDescription}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                        >
                            <Link
                                to="/book-consultation"
                                className="px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 text-center"
                            >
                                <Calendar size={16} />
                                Book Technical Consultation
                            </Link>
                            <a
                                href="#services-included"
                                className="px-7 py-3.5 rounded-xl bg-surface-elevated hover:bg-surface border border-border text-white font-semibold transition-all text-center"
                            >
                                Explore Capabilities
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. CUSTOMER PROBLEM */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                                The Operational Challenge
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                {customerProblem.headline}
                            </h2>
                            <p className="text-base text-text-muted leading-relaxed">
                                {customerProblem.description}
                            </p>
                        </div>
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {customerProblem.painPoints.map((point, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-surface border border-border/80">
                                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs mb-4">
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">{point.title}</h3>
                                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BUSINESS OUTCOMES */}
            <section className="py-20 md:py-28 bg-surface-elevated/40 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Measurable Impact
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Business Outcomes We Deliver
                        </h2>
                        <p className="text-sm md:text-base text-text-muted">
                            Strategic engagements focused on tangible operational acceleration, cost reduction, and robust governance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {businessOutcomes.map((outcome, i) => (
                            <div key={i} className="p-8 rounded-2xl glass-panel border border-border relative overflow-hidden group">
                                {outcome.metric && (
                                    <div className="text-3xl sm:text-4xl font-extrabold text-gradient-primary mb-3">
                                        {outcome.metric}
                                    </div>
                                )}
                                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {outcome.title}
                                </h3>
                                <p className="text-sm text-text-muted leading-relaxed">
                                    {outcome.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SERVICES INCLUDED */}
            <section id="services-included" className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Scope of Services
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            What Is Included
                        </h2>
                        <p className="text-sm md:text-base text-text-muted">
                            Comprehensive, production-ready implementation delivered by senior enterprise specialists.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {servicesIncluded.map((service, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-surface border border-border flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="space-y-2.5 pt-4 border-t border-border/60">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-text-dim block mb-2">
                                        Key Deliverables:
                                    </span>
                                    {service.deliverables.map((d, di) => (
                                        <div key={di} className="flex items-start gap-2 text-xs text-text-muted">
                                            <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                            <span>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TECHNICAL CAPABILITIES */}
            <section className="py-20 md:py-28 bg-surface-elevated/30 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Deep Microsoft Stack
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Technical Capabilities
                        </h2>
                        <p className="text-sm md:text-base text-text-muted">
                            Architected with battle-tested enterprise technologies adhering strictly to Microsoft best practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalCapabilities.map((cap, i) => (
                            <div key={i} className="p-6 rounded-2xl glass-panel border border-border">
                                <h3 className="text-lg font-bold text-white mb-2">{cap.name}</h3>
                                <p className="text-xs text-text-muted leading-relaxed mb-5">{cap.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {cap.tags.map((tag, ti) => (
                                        <span key={ti} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface border border-border text-text-dim">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. DELIVERY METHODOLOGY */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Execution Framework
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Our Delivery Methodology
                        </h2>
                        <p className="text-sm md:text-base text-text-muted">
                            A structured 4-stage lifecycle ensuring seamless enterprise delivery with zero business disruption.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {deliveryMethodology.map((m, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-surface border border-border relative">
                                <div className="text-xs font-bold text-primary mb-2">STAGE {m.phase}</div>
                                <h3 className="text-lg font-bold text-white mb-3">{m.title}</h3>
                                <p className="text-xs text-text-muted leading-relaxed">{m.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. TYPICAL ENGAGEMENT PROCESS */}
            <section className="py-20 md:py-28 bg-surface-elevated/40 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                                Collaboration Roadmap
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                                Typical Engagement Process
                            </h2>
                            <p className="text-sm text-text-muted">
                                From initial discovery call to production handover and knowledge transfer.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {engagementProcess.map((step, i) => (
                                <div key={i} className="p-6 rounded-2xl glass-panel border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                                            <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                    <div className="shrink-0 px-3 py-1 rounded-full bg-surface border border-border text-[11px] font-semibold text-text-dim text-right">
                                        {step.timeline}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. RELEVANT FAQS */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Clarifications & Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} className="rounded-2xl border border-border bg-surface overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full text-left p-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-base font-semibold text-white">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className={`text-text-dim transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-5 pb-5 text-sm text-text-muted leading-relaxed border-t border-border/50 pt-3">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 9. EMBEDDED CONSULTATION CTA */}
            <section className="py-20 md:py-28 bg-surface-elevated/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ConsultationForm
                        initialService={title}
                        headline={`Discuss Your ${title} Project`}
                        subheadline="Reserve a complimentary 30-minute discovery consultation with our Principal Enterprise Architect. Receive actionable recommendations on architecture, tenant readiness, and ROI milestones."
                    />
                </div>
            </section>
        </div>
    );
};
