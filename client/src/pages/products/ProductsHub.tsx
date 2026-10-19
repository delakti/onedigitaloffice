import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

export const ProductsHub: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Proprietary AI & Microsoft 365 Products"
                description="Explore proprietary enterprise software engineered by OneDigitalOffice, designed natively for the Microsoft 365 and Azure cloud ecosystems."
                keywords="ContractFlow AI, Microsoft 365 software, contract lifecycle management AI, legal tech UK"
                canonicalPath="/products"
            />

            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40 overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                        Proprietary Software Engineering
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Software Built Natively for <br />
                        <span className="text-gradient">Microsoft 365</span>
                    </h1>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                        Beyond our strategic consulting services, OneDigitalOffice engineers specialized SaaS products and AI applications that integrate directly into your existing enterprise Microsoft tenant.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 sm:p-12 rounded-3xl glass-panel border border-border relative overflow-hidden"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                                    <FileText size={26} />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                                        ContractFlow AI
                                    </h2>
                                    <p className="text-xs text-text-dim">
                                        Intelligent Contract Lifecycle Management for Microsoft 365
                                    </p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
                                Early Preview / In Active Development
                            </span>
                        </div>

                        <p className="text-base text-text-muted leading-relaxed mb-8">
                            ContractFlow AI transforms how legal and commercial teams draft, review, negotiate, and store agreements. Built to live directly within your Microsoft SharePoint and Teams environment, it uses private Azure OpenAI models to extract metadata, flag liability clauses, and automate approval sign-offs without third-party vendor lock-in.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 pt-4 border-t border-border/50 text-xs text-text-muted">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                                <span>Zero-Data-Leakage Tenant Architecture</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                                <span>Automated Clause Risk & Deviation Scoring</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                                <span>Native Word & Teams Add-in Integration</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                                <span>Automated Renewal & Milestone Reminders</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
                            <div className="text-xs text-text-dim flex items-center gap-2">
                                <Clock size={14} className="text-primary" />
                                <span>Accepting Early Design Partner Inquiries</span>
                            </div>
                            <Link
                                to="/products/contractflow-ai"
                                className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-primary/20"
                            >
                                Explore ContractFlow AI Details <ArrowRight size={14} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default ProductsHub;
