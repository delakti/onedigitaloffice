import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, AlertTriangle, Bot, Zap, Calendar } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { ConsultationForm } from '../../components/ConsultationForm';

export const ContractFlowAIPage: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="ContractFlow AI | Intelligent Contract Lifecycle for Microsoft 365"
                description="ContractFlow AI is an enterprise contract lifecycle management solution engineered natively for Microsoft 365, SharePoint, and Teams. Currently in early engineering preview."
                keywords="ContractFlow AI, contract management Microsoft 365, CLM SharePoint, legal AI contract review, Azure OpenAI contracts"
                canonicalPath="/products/contractflow-ai"
            />

            {/* Development Status Banner */}
            <div className="bg-amber-500/10 border-b border-amber-500/20 py-3 px-6 text-center">
                <div className="container mx-auto flex items-center justify-center gap-2 text-xs text-amber-300 font-medium">
                    <AlertTriangle size={15} className="text-amber-400 shrink-0" />
                    <span>
                        <strong>Development Status:</strong> In Active Engineering & Early Design Partner Preview. Not yet commercially available for general release.
                    </span>
                </div>
            </div>

            {/* Hero */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-accent/10 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <Sparkles size={14} />
                        <span>Proprietary AI Product Preview</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight"
                    >
                        ContractFlow AI: Intelligent Contract Lifecycle for <span className="text-gradient">Microsoft 365</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-3xl mx-auto"
                    >
                        ContractFlow AI empowers legal, finance, and procurement teams to draft, review, redline, and track contracts natively within SharePoint and Teams—without migrating sensitive agreements to proprietary third-party clouds.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#design-partner"
                            className="px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                        >
                            <Calendar size={16} />
                            Apply for Early Design Partner Program
                        </a>
                        <a
                            href="#architecture"
                            className="px-7 py-3.5 rounded-xl bg-surface-elevated hover:bg-surface border border-border text-white font-semibold transition-all"
                        >
                            Review Technical Architecture
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Native M365 */}
            <section id="architecture" className="py-20 md:py-28 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Architectural Philosophy
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Why Store Contracts in Third-Party SaaS When You Own SharePoint?
                        </h2>
                        <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
                            Traditional CLM software forces companies to export confidential agreements to external vendor databases. ContractFlow AI runs entirely inside your own Microsoft 365 tenant.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-2xl glass-panel border border-border">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Zero Data Spillage</h3>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Your contracts reside in your existing SharePoint document libraries. They are never ingested or stored by OneDigitalOffice or third-party SaaS vendors.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl glass-panel border border-border">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-6">
                                <Bot size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Cognitive Clause Extraction</h3>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Azure OpenAI models scan agreements automatically to extract indemnity limits, non-solicitation clauses, renewal dates, and jurisdiction terms.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl glass-panel border border-border">
                            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Seamless Teams Approvals</h3>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Executives and managers review and sign off on deviations directly inside Microsoft Teams via interactive adaptive cards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-20 md:py-28 bg-surface-elevated/30 border-b border-border/40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                            Key Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Engineered for High-Velocity Commercial Teams
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
                            <h3 className="text-lg font-bold text-white">Automated Risk & Deviation Scoring</h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                Flags deviations from your standard corporate playbook (e.g. uncapped liabilities, non-standard payment terms, governing law outside England & Wales).
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
                            <h3 className="text-lg font-bold text-white">SharePoint Metadata Synced Automatically</h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                Extracted contract counterparties, values, and expiration dates are populated directly into custom SharePoint columns for instant filtering and search.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
                            <h3 className="text-lg font-bold text-white">Automated Renewal & Milestone Alerts</h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                Power Automate alerts notify account owners 90, 60, and 30 days prior to auto-renewals, preventing costly rollover penalties.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
                            <h3 className="text-lg font-bold text-white">E-Signature Gateway Integration</h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                Seamless one-click routing to DocuSign or Adobe Sign with automatic countersigned PDF archiving back to SharePoint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Partner Form */}
            <section id="design-partner" className="py-20 md:py-28 bg-surface-elevated/40">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-8 p-4 rounded-2xl bg-accent/10 border border-accent/20 flex items-start gap-3">
                        <Sparkles size={20} className="text-accent shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-bold text-white">Join the Early Design Partner Program</p>
                            <p className="text-xs text-text-muted mt-1">
                                We are accepting inquiries from selected UK mid-market organisations to participate in our closed preview program. Partners receive tailored pilot configuration and executive architectural guidance.
                            </p>
                        </div>
                    </div>

                    <ConsultationForm
                        initialService="ContractFlow AI Design Partner"
                        headline="Apply for the ContractFlow AI Preview"
                        subheadline="Tell us about your current contract volume, Microsoft 365 environment, and legal workflow pain points."
                    />
                </div>
            </section>
        </div>
    );
};
export default ContractFlowAIPage;
