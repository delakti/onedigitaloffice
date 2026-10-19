import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, ArrowRight, FileText, Cpu, Workflow, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceMatch {
    title: string;
    description: string;
    path: string;
    matchRate: string;
    primaryBenefit: string;
}

export const AITransformationAssistant: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

    const goals = [
        { id: 'copilot', label: 'Adopt Microsoft Copilot safely', icon: Bot, desc: 'Avoid data oversharing and ensure enterprise data readiness.' },
        { id: 'intranet', label: 'Modernise SharePoint Intranet & Records', icon: FileText, desc: 'Replace legacy file shares with searchable, compliant document architecture.' },
        { id: 'automate', label: 'Automate manual business processes', icon: Workflow, desc: 'Eliminate repetitive email approvals and spreadsheet tracking.' },
        { id: 'agents', label: 'Deploy custom AI agents for our team', icon: Cpu, desc: 'Cognitive assistants connected to internal documents and systems.' },
        { id: 'm365_gov', label: 'Secure & streamline Microsoft 365', icon: ShieldCheck, desc: 'Purview sensitivity labels, tenant hygiene, and compliance.' }
    ];

    const getRecommendation = (): ServiceMatch => {
        switch (selectedGoal) {
            case 'copilot':
                return {
                    title: 'Microsoft Copilot Implementation',
                    description: 'Structured readiness assessment, data hygiene remediation, licensing optimization, and persona-driven change management.',
                    path: '/solutions/microsoft-copilot',
                    matchRate: '98% Alignment',
                    primaryBenefit: 'Eliminates oversharing risks before licenses are provisioned.'
                };
            case 'intranet':
                return {
                    title: 'SharePoint Online Solutions',
                    description: 'Modern hub architecture, metadata taxonomy, SPFx custom web parts, and migration from legacy file systems.',
                    path: '/solutions/sharepoint',
                    matchRate: '96% Alignment',
                    primaryBenefit: 'Provides an intuitive, high-speed single source of truth for your staff.'
                };
            case 'automate':
                return {
                    title: 'Microsoft Power Platform',
                    description: 'Low-code enterprise applications using Power Apps, multi-stage approval flows with Power Automate, and Power BI dashboards.',
                    path: '/solutions/power-platform',
                    matchRate: '95% Alignment',
                    primaryBenefit: 'Cuts manual process turnaround times by 70–85%.'
                };
            case 'agents':
                return {
                    title: 'AI Agents & Intelligent Automation',
                    description: 'Private cognitive agents operating strictly within your Microsoft tenant boundaries, using Azure AI and Graph API.',
                    path: '/solutions/ai-agents',
                    matchRate: '99% Alignment',
                    primaryBenefit: 'Zero data leakage—your proprietary data never trains external models.'
                };
            case 'm365_gov':
            default:
                return {
                    title: 'Microsoft 365 Transformation & AI Governance',
                    description: 'Holistic workplace modernisation, Microsoft Purview information protection, and managed tenant administration.',
                    path: '/solutions/microsoft-365',
                    matchRate: '94% Alignment',
                    primaryBenefit: 'Fortifies security postures and ensures statutory UK compliance.'
                };
        }
    };

    return (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-border relative">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <Bot size={22} />
                </div>
                <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                        Digital Transformation Navigator
                    </h3>
                    <p className="text-xs text-text-muted">
                        Answer 1 question to discover your optimal Microsoft & AI engagement path.
                    </p>
                </div>
            </div>

            {step === 1 && (
                <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-dim">
                        What is your organisation's most urgent priority right now?
                    </p>
                    <div className="grid grid-cols-1 gap-2.5">
                        {goals.map(goal => (
                            <button
                                key={goal.id}
                                onClick={() => {
                                    setSelectedGoal(goal.id);
                                    setStep(2);
                                }}
                                className="w-full text-left p-3.5 rounded-xl bg-surface hover:bg-surface-elevated border border-border hover:border-primary/40 transition-all flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-surface-elevated border border-border text-primary group-hover:text-accent transition-colors shrink-0">
                                        <goal.icon size={16} />
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors block">
                                            {goal.label}
                                        </span>
                                        <span className="text-xs text-text-muted">
                                            {goal.desc}
                                        </span>
                                    </div>
                                </div>
                                <ChevronRight size={16} className="text-text-dim group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && selectedGoal && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                >
                    {(() => {
                        const rec = getRecommendation();
                        return (
                            <div className="space-y-5">
                                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                        Recommended Architecture
                                    </span>
                                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        {rec.matchRate}
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-2xl font-heading font-bold text-white mb-2">
                                        {rec.title}
                                    </h4>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {rec.description}
                                    </p>
                                </div>

                                <div className="p-4 rounded-xl bg-surface-elevated border border-border flex items-start gap-2.5 text-xs text-text-muted">
                                    <Sparkles size={16} className="text-accent shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-white">Expected Business Impact: </span>
                                        {rec.primaryBenefit}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                                    <Link
                                        to={rec.path}
                                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-primary/20"
                                    >
                                        Explore Solution Details <ArrowRight size={14} />
                                    </Link>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-xs text-text-dim hover:text-white transition-colors"
                                    >
                                        ← Choose another priority
                                    </button>
                                </div>
                            </div>
                        );
                    })()}
                </motion.div>
            )}
        </div>
    );
};
