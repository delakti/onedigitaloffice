import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
    const founderExperience = [
        'HSBC',
        'Visa',
        'UK Home Office',
        'UK Ministry of Defence',
        'Cheshire East Council',
        'University of Edinburgh',
        'Royal Holloway, University of London',
        'Royal Central School of Speech & Drama',
        'European Economic & Social Committee',
        'United Nations Organisations'
    ];

    const coreValues = [
        {
            title: 'Governance-First Engineering',
            desc: 'We never deploy technology for the sake of novelty. Every solution is architected with strict security boundaries, tenant hygiene, and statutory compliance from day one.'
        },
        {
            title: 'Enterprise Architecture Depth',
            desc: 'We bring 23+ years of battle-tested enterprise solution design to mid-market UK organisations, delivering the resilience of tier-1 consulting without the bureaucracy.'
        },
        {
            title: 'Measurable Business ROI',
            desc: 'Every project is anchored to concrete operational outcomes: hours saved per week, manual steps eradicated, and software licensing rationalised.'
        },
        {
            title: 'Independent Technical Integrity',
            desc: 'We provide candid architectural guidance. If an off-the-shelf Microsoft feature satisfies your needs, we will advise using it rather than building unnecessary custom code.'
        }
    ];

    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="About OneDigitalOffice | Founder Experience & Enterprise Vision"
                description="Learn about OneDigitalOffice, led by Founder Adeyemi Adelakun with 23+ years of enterprise software engineering and Microsoft 365 solution architecture expertise."
                keywords="OneDigitalOffice founder, Adeyemi Adelakun, Microsoft 365 solutions architect, enterprise software engineering UK, SharePoint consultant"
                canonicalPath="/about"
            />

            {/* Vision Hero */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <Award size={14} />
                        <span>Our Heritage & Purpose</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight"
                    >
                        Enterprise Rigour for the <br />
                        <span className="text-gradient">Modern Digital Workplace</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto"
                    >
                        OneDigitalOffice bridges the gap between complex enterprise technology and high-velocity mid-market execution. We help UK organisations modernise their digital workplaces, automate complex business processes, and unlock artificial intelligence through secure Microsoft technologies.
                    </motion.p>
                </div>
            </section>

            {/* Founder Profile */}
            <section className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5">
                            <div className="p-8 rounded-3xl glass-panel border border-border space-y-6">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-2xl font-bold font-heading">
                                    AA
                                </div>
                                <div>
                                    <h2 className="text-2xl font-heading font-bold text-white">
                                        Adeyemi Adelakun
                                    </h2>
                                    <p className="text-sm font-semibold text-primary mt-1">
                                        Founder & Principal Solutions Architect
                                    </p>
                                    <p className="text-xs text-text-dim mt-0.5">
                                        23+ Years Enterprise Software Engineering
                                    </p>
                                </div>
                                <div className="space-y-2 pt-4 border-t border-border/50 text-xs text-text-muted">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                                        <span>Microsoft 365 & SharePoint Online</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                                        <span>Power Platform & Workflow Automation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                                        <span>Enterprise C#, .NET & React Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                                        <span>Microsoft Graph & Azure Cloud Systems</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                                Leadership Perspective
                            </span>
                            <h3 className="text-3xl font-heading font-bold text-white leading-snug">
                                Over Two Decades of Engineering Mission-Critical Microsoft Architectures
                            </h3>
                            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                                Adeyemi Adelakun founded OneDigitalOffice with a clear mission: to bring true enterprise-grade architecture, rigorous information governance, and robust software engineering to growing UK organisations.
                            </p>
                            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                                Over 23+ years, Adeyemi has architected, engineered, and delivered complex cloud transformations, high-volume intranet migrations, and secure integration solutions across global enterprises, central government departments, local authorities, higher education institutions, and non-profits.
                            </p>
                            <div className="p-6 rounded-2xl bg-surface-elevated border border-border">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                                    Founder's Enterprise Engagement Experience
                                </h4>
                                <p className="text-xs text-text-muted mb-4 leading-relaxed">
                                    Prior professional engagements and enterprise consulting experience of our founder encompass complex digital and architectural initiatives across leading UK and international organisations:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs font-medium text-white/90">
                                    {founderExperience.map((org, i) => (
                                        <div key={i} className="flex items-center gap-1.5 py-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                            <span>{org}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-text-dim mt-4 border-t border-border/50 pt-2 italic">
                                    Note: Represents the professional background and past engagement experience of the founder.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 md:py-28 bg-surface-elevated/20 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Our Principles
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            How We Deliver Value
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {coreValues.map((v, i) => (
                            <div key={i} className="p-8 rounded-2xl glass-panel border border-border">
                                <h3 className="text-xl font-heading font-bold text-white mb-3">{v.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                        Ready to Discuss Your Digital Transformation?
                    </h2>
                    <p className="text-base text-text-muted leading-relaxed mb-8">
                        Speak directly with our Principal Solutions Architect to review your current architecture and strategic roadmap.
                    </p>
                    <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/25"
                    >
                        <Calendar size={18} />
                        Book a 30-Minute Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    );
};
export default About;
