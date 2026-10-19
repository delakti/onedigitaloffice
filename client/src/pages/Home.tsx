import React from 'react';
import { motion } from 'framer-motion';
import { 
    Layers, 
    FileText, 
    Bot, 
    Cpu, 
    Workflow, 
    Code, 
    ShieldCheck, 
    ArrowRight, 
    Calendar,
    Building2,
    Landmark,
    GraduationCap,
    Briefcase,
    Zap,
    Sparkles,
    AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AITransformationAssistant } from '../components/AITransformationAssistant';

export const Home: React.FC = () => {
    const expertiseItems = [
        { name: 'Microsoft 365', slug: 'microsoft-365', icon: Layers, desc: 'Architecture, cloud security & tenant governance.' },
        { name: 'SharePoint Online', slug: 'sharepoint', icon: FileText, desc: 'Modern intranets, document systems & SPFx.' },
        { name: 'Microsoft Copilot', slug: 'microsoft-copilot', icon: Bot, desc: 'Zero oversharing, data hygiene & user adoption.' },
        { name: 'AI Agents', slug: 'ai-agents', icon: Cpu, desc: 'Private cognitive workflows inside your tenant.' },
        { name: 'Power Platform', slug: 'power-platform', icon: Workflow, desc: 'Power Apps, Power Automate & Power BI.' },
        { name: 'Enterprise Apps', slug: 'enterprise-applications', icon: Code, desc: 'Scalable .NET, React, TypeScript & Azure.' }
    ];

    const businessChallenges = [
        {
            problem: 'Disconnected Systems',
            problemDesc: 'Critical business data trapped across isolated email threads, legacy file servers, third-party SaaS, and fragmented databases.',
            solutionTitle: 'Unified Microsoft 365 Architecture',
            solutionDesc: 'We integrate your disparate repositories into a single source of truth using Microsoft Graph APIs, SharePoint Hubs, and cloud microservices.'
        },
        {
            problem: 'Manual Business Processes',
            problemDesc: 'Valuable professionals spending 30%+ of their working hours re-keying data, chasing approvals, and manually formatting reports.',
            solutionTitle: 'Intelligent Power Platform Automation',
            solutionDesc: 'We replace fragile spreadsheets and inbox bottlenecks with automated multi-stage Power Automate flows and responsive Power Apps.'
        },
        {
            problem: 'Unstructured Enterprise Information',
            problemDesc: 'Decades of unindexed files, loose sharing links, and missing metadata making search impossible and exposing data to AI leaks.',
            solutionTitle: 'Governance-First Purview & Taxonomy',
            solutionDesc: 'We deploy managed metadata taxonomies and Microsoft Purview sensitivity labels, creating the essential foundation for safe Microsoft Copilot adoption.'
        }
    ];

    const whyChooseUs = [
        {
            title: '23+ Years Founder Experience',
            desc: 'Led by Adeyemi Adelakun, bringing decades of senior enterprise software engineering and solution architecture to every project.'
        },
        {
            title: 'Enterprise Architecture Rigour',
            desc: 'We engineer solutions with the resilience, security boundaries, and scalability required by regulated financial and public institutions.'
        },
        {
            title: 'End-to-End Software Engineering',
            desc: 'From initial high-level business strategy to custom C#, React, TypeScript, and SPFx code deployment—we deliver production systems.'
        },
        {
            title: 'Microsoft Technology Specialisation',
            desc: 'Deep, specialized mastery across the entire Microsoft ecosystem: Entra ID, Purview, SharePoint, Copilot Studio, and Azure.'
        },
        {
            title: 'Governance-First AI Implementation',
            desc: 'We guarantee zero data leakage. All AI inference and vector indexing operates strictly within your secure tenant boundary.'
        }
    ];

    const industries = [
        { name: 'Financial Services', slug: 'financial-services', icon: Landmark, desc: 'FCA-aligned data barriers, automated DLP, and secure AI adoption.' },
        { name: 'Higher Education', slug: 'education', icon: GraduationCap, desc: 'Unified campus portals, automated student admin, and research vaults.' },
        { name: 'Public Sector', slug: 'public-sector', icon: Building2, desc: 'WCAG 2.2 AA accessible intranets, statutory retention, and FoI workflows.' },
        { name: 'Professional Services', slug: 'professional-services', icon: Briefcase, desc: 'Matter management automation, client onboarding, and precedent search.' }
    ];

    const deliveryStages = [
        { phase: '01', title: 'Discover', desc: 'Comprehensive audit of your Microsoft tenant, licensing, data hygiene, and operational bottlenecks.' },
        { phase: '02', title: 'Design', desc: 'Co-creating target-state blueprints, information architecture, security boundaries, and UI wireframes.' },
        { phase: '03', title: 'Implement', desc: 'Agile engineering sprints, automated CI/CD deployments, unit/integration testing, and compliance validation.' },
        { phase: '04', title: 'Optimise', desc: 'Persona-driven adoption training, KPI tracking, performance tuning, and proactive managed support.' }
    ];

    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Microsoft 365, SharePoint & AI Transformation Consultancy"
                description="OneDigitalOffice helps UK organisations modernise their digital workplaces, automate complex business processes, and unlock artificial intelligence through secure Microsoft technologies."
                keywords="Microsoft 365 consultancy UK, SharePoint consultant UK, Power Platform development UK, Microsoft Copilot consultancy UK, AI automation consultancy UK"
                canonicalPath="/"
            />

            {/* ==================================================
                SECTION 1: HERO
            ================================================== */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 border-b border-border/40 overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-primary/15 rounded-full blur-[150px] animate-subtle-drift" />
                    <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[150px] animate-subtle-drift delay-1000" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 text-xs font-bold uppercase tracking-wider"
                    >
                        <Zap size={14} className="fill-current" />
                        <span>Intelligent Workplaces. Automated Businesses.</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white mb-8 leading-[1.12]"
                    >
                        Transform Your Business with <br className="hidden sm:block" />
                        <span className="text-gradient">Microsoft 365, AI</span> and <br className="hidden sm:block" />
                        Intelligent Automation.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        We design intelligent digital workplaces, automate business processes, and connect enterprise systems using Microsoft technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/book-consultation"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 group text-sm sm:text-base"
                        >
                            <Calendar size={18} />
                            Book a Free Consultation
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/solutions"
                            className="w-full sm:w-auto px-8 py-4 glass-panel glass-panel-hover rounded-xl font-bold transition-all text-white border border-border text-center text-sm sm:text-base"
                        >
                            Explore Our Solutions
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <div className="mt-14 pt-8 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-text-dim">
                        <div>
                            <span className="text-white font-bold block text-base font-heading">23+ Years</span>
                            Founder Engineering Experience
                        </div>
                        <div>
                            <span className="text-white font-bold block text-base font-heading">UK Focused</span>
                            Medium-Sized Enterprises
                        </div>
                        <div>
                            <span className="text-white font-bold block text-base font-heading">Zero Leakage</span>
                            Tenant-Enclosed AI Security
                        </div>
                        <div>
                            <span className="text-white font-bold block text-base font-heading">WCAG 2.2 AA</span>
                            Accessible & Compliant Systems
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================================
                SECTION 2: EXPERTISE
            ================================================== */}
            <section className="py-20 md:py-28 border-b border-border/40 bg-surface-elevated/20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Core Disciplines
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Our Areas of Enterprise Expertise
                        </h2>
                        <p className="text-sm md:text-base text-text-muted">
                            Specialized technical competencies covering the breadth of Microsoft’s cloud ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expertiseItems.map((item) => (
                            <Link
                                key={item.slug}
                                to={`/solutions/${item.slug}`}
                                className="p-8 rounded-2xl glass-panel border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="p-3.5 rounded-xl bg-surface border border-border text-primary group-hover:text-accent group-hover:border-accent/40 transition-colors w-fit mb-6">
                                        <item.icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-6 pt-4 border-t border-border/50">
                                    Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================================================
                INTERACTIVE TOOLS TEASER
            ================================================== */}
            <section className="py-16 border-b border-border/40 bg-surface">
                <div className="container mx-auto px-6 max-w-4xl">
                    <AITransformationAssistant />
                </div>
            </section>

            {/* ==================================================
                SECTION 3: BUSINESS CHALLENGES
            ================================================== */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Common Roadblocks
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Three Challenges Killing Enterprise Momentum
                        </h2>
                        <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
                            How OneDigitalOffice solves the critical friction points holding back modern organisations.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {businessChallenges.map((item, i) => (
                            <div key={i} className="p-8 sm:p-10 rounded-3xl glass-panel border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border/60 pb-6 lg:pb-0 lg:pr-8">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                                        <AlertCircle size={15} />
                                        <span>Problem 0{i + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                                        {item.problem}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                        {item.problemDesc}
                                    </p>
                                </div>
                                <div className="lg:col-span-7">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                        <Sparkles size={15} />
                                        <span>OneDigitalOffice Solution</span>
                                    </div>
                                    <h4 className="text-xl font-heading font-bold text-white mb-2">
                                        {item.solutionTitle}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                        {item.solutionDesc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================================================
                SECTION 4: SERVICES
            ================================================== */}
            <section className="py-20 md:py-28 bg-surface-elevated/30 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                                Service Portfolio
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                                Professional Consulting Services
                            </h2>
                        </div>
                        <Link to="/solutions" className="text-xs sm:text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1.5">
                            View All 8 Solutions <ArrowRight size={15} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Microsoft 365 Advisory', slug: 'microsoft-365', icon: Layers, desc: 'Tenant consolidation, licensing optimisation, and Entra ID security.' },
                            { title: 'SharePoint Modernisation', slug: 'sharepoint', icon: FileText, desc: 'Enterprise intranets, file migration, and custom SPFx components.' },
                            { title: 'Copilot Governance', slug: 'microsoft-copilot', icon: Bot, desc: 'Data hygiene, oversharing remediation, and user adoption cohorts.' },
                            { title: 'AI Agent Engineering', slug: 'ai-agents', icon: Cpu, desc: 'Private cognitive agents executing complex multi-step workflows.' },
                            { title: 'Power Platform Systems', slug: 'power-platform', icon: Workflow, desc: 'Enterprise Power Apps, Power Automate flows, and Power BI dashboards.' },
                            { title: 'Cloud Software Dev', slug: 'enterprise-applications', icon: Code, desc: 'Full-stack .NET, React, TypeScript, and Azure microservices.' },
                            { title: 'AI Security & Purview', slug: 'ai-governance', icon: ShieldCheck, desc: 'Information barriers, DLP policies, and statutory compliance.' },
                            { title: 'Managed M365 Support', slug: 'managed-services', icon: Zap, desc: 'Proactive tenant management, health monitoring, and expert guidance.' }
                        ].map((s, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between group hover:border-primary/40 transition-all">
                                <div>
                                    <s.icon size={22} className="text-primary mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                                    <p className="text-xs text-text-muted leading-relaxed mb-4">{s.desc}</p>
                                </div>
                                <Link
                                    to={s.slug === 'managed-services' ? '/managed-services' : `/solutions/${s.slug}`}
                                    className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 pt-3 border-t border-border/50"
                                >
                                    Service Details →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================================================
                SECTION 5: WHY ONEDIGITALOFFICE
            ================================================== */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Our Distinct Advantage
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Why Organisations Choose OneDigitalOffice
                        </h2>
                        <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
                            We combine deep technical engineering capability with pragmatic business clarity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((w, i) => (
                            <div key={i} className="p-8 rounded-2xl glass-panel border border-border flex flex-col justify-between">
                                <div>
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold text-xs mb-4">
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{w.title}</h3>
                                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{w.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-surface to-surface border border-primary/30 flex flex-col justify-between">
                            <div>
                                <Sparkles size={28} className="text-accent mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Ready to Transform?</h3>
                                <p className="text-xs text-text-muted leading-relaxed">
                                    Speak directly with our senior architecture team to review your technical roadmap.
                                </p>
                            </div>
                            <Link
                                to="/book-consultation"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-primary px-4 py-2 rounded-xl mt-4 w-fit hover:bg-primary-hover transition-all"
                            >
                                Book Discovery <ArrowRight size={13} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================================
                SECTION 6: INDUSTRIES
            ================================================== */}
            <section className="py-20 md:py-28 bg-surface-elevated/20 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Target Sectors
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Solutions Tailored to UK Industries
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((ind) => (
                            <Link
                                key={ind.slug}
                                to={`/industries/${ind.slug}`}
                                className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="p-3 rounded-xl bg-surface-elevated border border-border text-primary group-hover:text-accent transition-colors w-fit mb-5">
                                        <ind.icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {ind.name}
                                    </h3>
                                    <p className="text-xs text-text-muted leading-relaxed">
                                        {ind.desc}
                                    </p>
                                </div>
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-6 pt-3 border-t border-border/50">
                                    Explore Sector →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================================================
                SECTION 7: DELIVERY PROCESS
            ================================================== */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Our Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            The Delivery Process
                        </h2>
                        <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
                            A battle-tested 4-stage lifecycle delivering predictable, high-value business outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {deliveryStages.map((stage, i) => (
                            <div key={i} className="p-6 rounded-2xl glass-panel border border-border relative">
                                <span className="text-2xl font-extrabold text-primary font-heading mb-2 block">
                                    {stage.phase}
                                </span>
                                <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                                <p className="text-xs text-text-muted leading-relaxed">{stage.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================================================
                SECTION 8: CONSULTATION CTA
            ================================================== */}
            <section className="py-20 md:py-32 bg-surface relative overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 rounded-full blur-[160px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <Calendar size={14} />
                        <span>Take The Next Step</span>
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Ready to Build Your Intelligent <br />
                        <span className="text-gradient">Digital Workplace?</span>
                    </h2>

                    <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
                        Speak directly with our Principal Solutions Architect to review your Microsoft 365 environment, automation potential, or Copilot readiness.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/book-consultation"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 group text-sm sm:text-base"
                        >
                            <Calendar size={18} />
                            Book a Discovery Call
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-8 py-4 glass-panel glass-panel-hover rounded-xl font-bold transition-all text-white border border-border text-center text-sm sm:text-base"
                        >
                            Send a Project Brief
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home;
