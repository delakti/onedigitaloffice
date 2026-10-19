import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

interface Article {
    slug: string;
    tag: string;
    title: string;
    excerpt: string;
    readTime: string;
    date: string;
    author: string;
    keyPoints: string[];
}

const articles: Article[] = [
    {
        slug: 'microsoft-copilot-oversharing-trap',
        tag: 'Copilot Security',
        title: 'The Microsoft Copilot Oversharing Trap: Why Permissions Must Precede Licensing',
        excerpt: 'Deploying Microsoft 365 Copilot before performing a comprehensive SharePoint permissions audit exposes sensitive salary, strategy, and client data to every user in your organisation.',
        readTime: '6 min read',
        date: 'October 2026',
        author: 'Adeyemi Adelakun',
        keyPoints: [
            'Copilot does not bypass permissions—it strictly exposes what is already open.',
            'Why "Anyone with link" and broad group sharing create instant leakage vectors.',
            'A 4-step framework for using Restricted SharePoint Search and Purview labels prior to rollout.'
        ]
    },
    {
        slug: 'death-of-the-15-deep-folder-structure',
        tag: 'SharePoint Architecture',
        title: 'The Death of the 15-Deep Folder Structure: Building a Modern Metadata Intranet',
        excerpt: 'Why nested Windows file share hierarchies fail in the cloud, and how modern managed metadata term stores unlock semantic enterprise search and AI grounding.',
        readTime: '8 min read',
        date: 'September 2026',
        author: 'Adeyemi Adelakun',
        keyPoints: [
            'Character limit errors and broken URL inheritance in legacy folder models.',
            'Designing hierarchical managed metadata taxonomies that staff actually use.',
            'How clean metadata elevates Copilot prompt grounding accuracy by over 80%.'
        ]
    },
    {
        slug: 'autonomous-agents-vs-chatbots',
        tag: 'AI Engineering',
        title: 'Beyond the Chatbot: Why UK Enterprises Need Multi-Agent Cognitive Workflows',
        excerpt: 'Simple Q&A chatbots stop short of executing work. Exploring how multi-agent architectures running inside private tenant boundaries automate end-to-end business operations.',
        readTime: '7 min read',
        date: 'August 2026',
        author: 'Adeyemi Adelakun',
        keyPoints: [
            'The limitation of single-prompt LLMs for complex, multi-system operational tasks.',
            'How specialized agent networks (Ingestor, Auditor, Drafter) eliminate hallucinations.',
            'Ensuring complete UK GDPR compliance and zero external model training.'
        ]
    },
    {
        slug: 'power-platform-enterprise-governance',
        tag: 'Low-Code Strategy',
        title: 'Governing the Power Platform: Preventing Citizen Developer Chaos',
        excerpt: 'How mid-market organisations can foster low-code innovation across business departments while maintaining strict DLP policies, environment isolation, and ALM pipelines.',
        readTime: '5 min read',
        date: 'July 2026',
        author: 'Adeyemi Adelakun',
        keyPoints: [
            'Configuring the Centre of Excellence (CoE) Starter Kit for automatic app inventory.',
            'Blocking unapproved consumer API connectors using tenant Data Loss Prevention.',
            'Implementing lightweight Azure DevOps pipelines for managed solution deployments.'
        ]
    }
];

export const Insights: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Strategic Insights & Technical Whitepapers | OneDigitalOffice"
                description="Thought leadership and architectural guidance from OneDigitalOffice on Microsoft 365 governance, Copilot readiness, SharePoint modernization, and AI automation."
                keywords="Microsoft 365 insights, Copilot best practices, SharePoint architecture articles, enterprise AI whitepapers UK"
                canonicalPath="/insights"
            />

            {/* Header */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Technical Intelligence & Strategy
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Insights for Digital Leaders & <br />
                        <span className="text-gradient">Enterprise Architects</span>
                    </h1>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
                        In-depth architectural analysis, governance frameworks, and technical best practices for navigating the Microsoft and enterprise AI landscape.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-5xl space-y-10">
                    {articles.map((article, i) => (
                        <motion.article
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 sm:p-12 rounded-3xl glass-panel border border-border group hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-xs text-text-dim">
                                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-wider">
                                    {article.tag}
                                </span>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={13} /> {article.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={13} /> {article.readTime}
                                    </span>
                                </div>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors leading-snug">
                                {article.title}
                            </h2>

                            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                                {article.excerpt}
                            </p>

                            <div className="p-4 rounded-2xl bg-surface-elevated border border-border/80 mb-6 space-y-1.5">
                                <span className="text-xs font-bold uppercase tracking-wider text-white block mb-1">
                                    Key Architectural Takeaways:
                                </span>
                                {article.keyPoints.map((kp, kpi) => (
                                    <div key={kpi} className="text-xs text-text-muted flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1" />
                                        <span>{kp}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border/60">
                                <div className="flex items-center gap-2 text-xs text-text-dim">
                                    <User size={13} className="text-primary" />
                                    <span>By {article.author}</span>
                                </div>
                                <Link
                                    to="/book-consultation"
                                    className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 group-hover:gap-2 transition-all"
                                >
                                    Discuss with Author <ArrowRight size={13} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default Insights;
