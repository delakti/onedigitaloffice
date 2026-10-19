import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Building2, Landmark, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

interface ArchitecturePattern {
    id: string;
    sector: string;
    title: string;
    challenge: string;
    architectureSolution: string;
    techStack: string[];
    outcomes: string[];
    icon: React.ElementType;
}

const architecturalBlueprints: ArchitecturePattern[] = [
    {
        id: 'central-gov-records',
        sector: 'Public Sector',
        title: 'Statutory Records Architecture & Compliant Migration',
        challenge: 'A public sector organisation managed tens of millions of digital records spread across legacy file servers, facing statutory compliance mandates and 20-day Freedom of Information obligations.',
        architectureSolution: 'Architected a multi-hub SharePoint Online document structure with automated metadata extraction, default content types, and automated Purview retention labels enforcing statutory retention and disposal.',
        techStack: ['SharePoint Online', 'Microsoft Purview', 'PowerShell (PnP)', 'Microsoft Graph'],
        outcomes: [
            'Over 70% reduction in document retrieval time for FOI officers',
            'Full compliance with UK statutory record retention guidelines',
            'Decommissioned legacy on-premise file storage infrastructure'
        ],
        icon: Building2
    },
    {
        id: 'tier1-copilot-governance',
        sector: 'Financial Services',
        title: 'Tier-1 Copilot Governance & Oversharing Remediation',
        challenge: 'A regulated wealth management firm with 1,200 staff prepared to roll out Microsoft Copilot but had over 50,000 documents with loose or legacy internal permissions, risking critical compensation and client portfolio oversharing.',
        architectureSolution: 'Executed automated tenant hygiene scripts to detect all "Anyone" links and broad access permissions, deployed automated Purview sensitivity labels with mandatory encryption, and enabled Restricted SharePoint Search.',
        techStack: ['Microsoft Copilot for M365', 'Microsoft Purview', 'Entra ID', 'Power BI'],
        outcomes: [
            'Zero data leakage or accidental exposure incidents during pilot and rollout',
            'Automated classification applied across 100% of confidential repositories',
            'Measured 8.5 hours saved per week among executive and analysis cohorts'
        ],
        icon: Landmark
    },
    {
        id: 'higher-ed-workplace',
        sector: 'Higher Education',
        title: 'Higher Education Digital Campus & Workflow Portal',
        challenge: 'A multi-campus higher education institution struggled with paper-based module changes, student extenuating circumstances requests, and unsearchable academic policies across disparate faculties.',
        architectureSolution: 'Engineered a modern SharePoint communication intranet paired with Power Apps and automated Power Automate approval chains connecting directly into their student records database.',
        techStack: ['SharePoint Framework (SPFx)', 'Power Apps', 'Power Automate', 'React'],
        outcomes: [
            'Automated processing of 45,000+ student administration submissions annually',
            'Reduced turnaround times from 14 business days down to 48 hours',
            'Unified digital campus experience across staff and faculty members'
        ],
        icon: GraduationCap
    },
    {
        id: 'professional-services-matter',
        sector: 'Professional Services',
        title: 'Automated Matter Workspace & Ethical Wall Provisioning',
        challenge: 'A mid-sized legal practice required standardized matter workspaces with automated conflict-of-interest ethical walls to prevent unauthorized fee earners from accessing opposing client files.',
        architectureSolution: 'Implemented an automated Power Automate provisioning engine that creates security-trimmed SharePoint matter libraries upon client engagement, enforcing Entra ID group permissions and SRA compliance.',
        techStack: ['Power Automate', 'SharePoint Online', 'Azure Functions', 'Entra ID'],
        outcomes: [
            'Instant automated matter provisioning in under 60 seconds',
            'Zero conflict-of-interest breaches enforced by mathematical permission barriers',
            'Standardised document naming and metadata indexing across all matter files'
        ],
        icon: Briefcase
    }
];

export const Work: React.FC = () => {
    const [selectedSector, setSelectedSector] = useState('All');

    const filteredBlueprints = selectedSector === 'All'
        ? architecturalBlueprints
        : architecturalBlueprints.filter(b => b.sector === selectedSector);

    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Enterprise Architecture Blueprints & Case Studies"
                description="Explore real enterprise architecture patterns and delivery methodologies designed by OneDigitalOffice across Microsoft 365, SharePoint, Copilot, and Power Platform."
                keywords="SharePoint case studies UK, Microsoft 365 architecture blueprints, Copilot implementation examples, Power Platform solutions"
                canonicalPath="/work"
            />

            {/* Header */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Architecture & Case Blueprints
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Proven Delivery Paradigms for <br />
                        <span className="text-gradient">Complex Enterprise Environments</span>
                    </h1>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
                        We do not invent fictional marketing case studies. Instead, we document our battle-tested architectural patterns, delivery frameworks, and measurable outcomes across regulated UK sectors.
                    </p>
                </div>
            </section>

            {/* Filter Pills */}
            <section className="py-8 border-b border-border/40 bg-surface">
                <div className="container mx-auto px-6 flex flex-wrap justify-center gap-2">
                    {['All', 'Public Sector', 'Financial Services', 'Higher Education', 'Professional Services'].map(sector => (
                        <button
                            key={sector}
                            onClick={() => setSelectedSector(sector)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                                selectedSector === sector
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-surface-elevated text-text-muted hover:text-white border border-border'
                            }`}
                        >
                            {sector}
                        </button>
                    ))}
                </div>
            </section>

            {/* Blueprints Grid */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-5xl space-y-12">
                    {filteredBlueprints.map((b, i) => (
                        <motion.div
                            key={b.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 sm:p-12 rounded-3xl glass-panel border border-border relative overflow-hidden"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                        <b.icon size={22} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                            {b.sector}
                                        </span>
                                        <h2 className="text-2xl font-heading font-bold text-white mt-0.5">
                                            {b.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 text-sm">
                                <div className="p-6 rounded-2xl bg-surface border border-border">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                                        The Operational Challenge
                                    </h3>
                                    <p className="text-text-muted leading-relaxed">
                                        {b.challenge}
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-surface border border-border">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                        The Architectural Solution
                                    </h3>
                                    <p className="text-text-muted leading-relaxed">
                                        {b.architectureSolution}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                                    Measurable Outcomes
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {b.outcomes.map((out, oi) => (
                                        <div key={oi} className="p-4 rounded-xl bg-surface-elevated border border-border/80 flex items-start gap-2.5 text-xs text-text-muted">
                                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                            <span>{out}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/60">
                                <div className="flex flex-wrap gap-1.5">
                                    {b.techStack.map((tech, ti) => (
                                        <span key={ti} className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-surface border border-border text-text-dim">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    to="/book-consultation"
                                    className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1.5"
                                >
                                    Discuss a Similar Architecture <ArrowRight size={13} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom Callout */}
            <section className="py-20 md:py-28 bg-surface-elevated/40 text-center border-t border-border/40">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                        Have a Complex Transformation Challenge?
                    </h2>
                    <p className="text-base text-text-muted leading-relaxed mb-8">
                        Our Principal Enterprise Architect is available for 30-minute discovery consultations to evaluate your architecture and determine project feasibility.
                    </p>
                    <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/25"
                    >
                        <Calendar size={18} />
                        Book a Technical Discovery Session
                    </Link>
                </div>
            </section>
        </div>
    );
};
export default Work;
