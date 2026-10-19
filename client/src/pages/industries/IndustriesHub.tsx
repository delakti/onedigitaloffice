import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, GraduationCap, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const industries = [
    {
        slug: 'financial-services',
        title: 'Financial Services',
        icon: Landmark,
        tagline: 'FCA & PRA Compliance',
        description: 'Secure Microsoft 365 and AI architectures designed for wealth managers, fintechs, and insurance firms with rigorous information barriers and zero oversharing.',
        highlights: ['Strict tenant data boundaries', 'Automated sensitivity classification', 'Audit-ready compliance reporting']
    },
    {
        slug: 'education',
        title: 'Higher Education & Trusts',
        icon: GraduationCap,
        tagline: 'Campus & Research Collaboration',
        description: 'Streamlining multi-campus student administration, academic committee workflows, and research data governance using SharePoint and Power Platform.',
        highlights: ['Automated student lifecycle flows', 'Modern faculty intranets', 'Controlled research data sharing']
    },
    {
        slug: 'public-sector',
        title: 'Public Sector & Local Government',
        icon: Building2,
        tagline: 'Citizen Workplaces & Accessibility',
        description: 'Compliant digital transformation for councils, government agencies, and non-profits, delivering accessible citizen services and secure electronic records.',
        highlights: ['WCAG 2.2 AA accessible portals', 'Statutory retention & FoI management', 'Crown Commercial aligned security']
    },
    {
        slug: 'professional-services',
        title: 'Professional Services',
        icon: Briefcase,
        tagline: 'Legal, Accounting & Consultancies',
        description: 'Empowering law firms, accountants, and consultancies to automate document drafting, matter management, and client onboarding.',
        highlights: ['Confidential matter boundaries', 'Contract lifecycle automation', 'Fast semantic knowledge search']
    }
];

export const IndustriesHub: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Industry-Specific Microsoft 365 & AI Solutions"
                description="Specialised Microsoft 365 and AI solutions for UK Financial Services, Higher Education, Public Sector, and Professional Services organisations."
                keywords="Financial services Microsoft 365, Higher education SharePoint, Public sector M365 UK, Professional services automation"
                canonicalPath="/industries"
            />

            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        UK Industry Specialisation
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Tailored for Highly Regulated UK Sectors
                    </h1>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                        Every industry faces unique regulatory demands, data sensitivities, and operating models. We engineer Microsoft technologies to match your compliance mandates.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={ind.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 sm:p-10 rounded-3xl glass-panel border border-border flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3.5 rounded-2xl bg-surface border border-border text-primary group-hover:text-accent group-hover:border-accent/40 transition-colors">
                                            <ind.icon size={28} />
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-elevated text-text-dim border border-border">
                                            {ind.tagline}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {ind.title}
                                    </h2>

                                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                                        {ind.description}
                                    </p>

                                    <div className="space-y-2 mb-8 pt-4 border-t border-border/50">
                                        {ind.highlights.map((h, hi) => (
                                            <div key={hi} className="text-xs text-text-muted flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to={`/industries/${ind.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors"
                                >
                                    Explore Sector Blueprint <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default IndustriesHub;
