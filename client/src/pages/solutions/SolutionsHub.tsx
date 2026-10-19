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
    Zap, 
    ArrowRight, 
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { AITransformationAssistant } from '../../components/AITransformationAssistant';
import { AIReadinessAssessment } from '../../components/AIReadinessAssessment';

const solutions = [
    {
        slug: 'microsoft-365',
        title: 'Microsoft 365 Transformation',
        description: 'Modernise tenant infrastructure, streamline hybrid collaboration, and secure your cloud workplace with expert guidance.',
        icon: Layers,
        deliverables: ['Tenant Architecture & Consolidation', 'Security & Compliance Baseline', 'Identity & Entra ID Strategy']
    },
    {
        slug: 'sharepoint',
        title: 'SharePoint Online Solutions',
        description: 'High-performing enterprise intranets, metadata-driven document management systems, and custom SPFx component engineering.',
        icon: FileText,
        deliverables: ['Hub Site Architecture', 'Migration from File Shares & Legacy Servers', 'SPFx Web Parts & Extensions']
    },
    {
        slug: 'microsoft-copilot',
        title: 'Microsoft Copilot Implementation',
        description: 'Prepare your tenant for Microsoft Copilot with zero oversharing, prerequisite licensing reviews, and structured user adoption.',
        icon: Bot,
        deliverables: ['Copilot Data Hygiene & Permissions Audit', 'Sensitivity Labels & Purview Policies', 'Persona-Based Pilot Framework']
    },
    {
        slug: 'ai-agents',
        title: 'AI Agents & Intelligent Automation',
        description: 'Autonomous cognitive agents built strictly inside your Microsoft cloud boundary to execute complex, multi-step operations.',
        icon: Cpu,
        deliverables: ['Private RAG Knowledge Bases', 'Multi-Agent Autonomous Workflows', 'Zero-Data-Leakage Tenant Boundaries']
    },
    {
        slug: 'power-platform',
        title: 'Microsoft Power Platform',
        description: 'Rapid low-code enterprise applications, workflow orchestration with Power Automate, and high-impact Power BI reporting.',
        icon: Workflow,
        deliverables: ['Enterprise Power Apps Development', 'Multi-System Power Automate Flows', 'Power BI Executive Dashboards']
    },
    {
        slug: 'enterprise-applications',
        title: 'Enterprise Application Engineering',
        description: 'Scalable custom software engineered with modern React, TypeScript, C#, .NET, Azure serverless, and Microsoft Graph APIs.',
        icon: Code,
        deliverables: ['Custom .NET Core & React Cloud Apps', 'Microsoft Graph Enterprise Integrations', 'Azure Microservices Architecture']
    },
    {
        slug: 'ai-governance',
        title: 'AI Governance & Security',
        description: 'Information barriers, Microsoft Purview DLP policies, and compliance safeguards ensuring your data stays private and compliant.',
        icon: ShieldCheck,
        deliverables: ['Microsoft Purview DLP & Classification', 'Information Barriers & Access Reviews', 'UK GDPR & Statutory Compliance']
    },
    {
        slug: 'managed-services',
        path: '/managed-services',
        title: 'Managed Microsoft 365 Services',
        description: 'Proactive tenant administration, continuous architectural optimisation, and dedicated senior UK engineering support.',
        icon: Zap,
        deliverables: ['Continuous Tenant Health Monitoring', 'Quarterly Roadmap & Feature Enablement', 'Senior Microsoft Specialist Support']
    }
];

export const SolutionsHub: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Enterprise Microsoft 365, SharePoint & AI Solutions"
                description="Explore OneDigitalOffice enterprise solutions across Microsoft 365 transformation, SharePoint Online, Copilot readiness, custom AI agents, Power Platform, and managed services."
                keywords="Microsoft 365 solutions, SharePoint consultancy, Copilot readiness UK, AI agents enterprise, Power Platform engineering"
                canonicalPath="/solutions"
            />

            {/* Header Hero */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <Layers size={14} />
                        <span>Enterprise Solutions & Architecture</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight"
                    >
                        Solutions Built on the <br />
                        <span className="text-gradient">Microsoft Cloud Ecosystem</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-text-muted leading-relaxed mb-8"
                    >
                        We design intelligent digital workplaces, automate complex business processes, and deploy secure AI within your Microsoft 365 tenant boundaries.
                    </motion.p>
                </div>
            </section>

            {/* Interactive Navigator Section */}
            <section className="py-12 border-b border-border/40 bg-surface-elevated/20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <AITransformationAssistant />
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((item, index) => {
                            const targetPath = item.path || `/solutions/${item.slug}`;
                            return (
                                <motion.div
                                    key={item.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-8 rounded-3xl glass-panel border border-border flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
                                >
                                    <div>
                                        <div className="p-3.5 rounded-2xl bg-surface border border-border text-primary group-hover:text-accent group-hover:border-accent/40 transition-colors w-fit mb-6">
                                            <item.icon size={26} />
                                        </div>

                                        <h2 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h2>

                                        <p className="text-sm text-text-muted leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <div className="space-y-2 mb-8 pt-4 border-t border-border/50">
                                            {item.deliverables.map((d, di) => (
                                                <div key={di} className="flex items-start gap-2 text-xs text-text-muted">
                                                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                                    <span>{d}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        to={targetPath}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors pt-2"
                                    >
                                        Explore Solution <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Interactive Assessment Callout */}
            <section className="py-20 md:py-28 bg-surface-elevated/40 border-t border-border/40">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Self-Assessment Tool
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Test Your Organisation's AI & M365 Readiness
                        </h2>
                        <p className="text-sm md:text-base text-text-muted">
                            Complete our 2-minute diagnostic to receive your tenant readiness score and prioritized next steps.
                        </p>
                    </div>

                    <AIReadinessAssessment />
                </div>
            </section>
        </div>
    );
};
export default SolutionsHub;
