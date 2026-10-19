import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ArrowRight, 
    ArrowLeft, 
    Sparkles, 
    RotateCcw,
    BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
    id: string;
    pillar: string;
    title: string;
    description: string;
    options: {
        label: string;
        desc: string;
        score: number;
        flag?: string;
    }[];
}

const assessmentQuestions: Question[] = [
    {
        id: 'm365_maturity',
        pillar: 'Microsoft 365 Maturity',
        title: 'How established is your organisation\'s Microsoft 365 tenant?',
        description: 'Assesses cloud adoption, identity configuration, and current collaboration usage.',
        options: [
            { label: 'Basic Email & Teams', desc: 'Primarily using Exchange Online and chat; minimal cloud storage or governance.', score: 1 },
            { label: 'Standard Hybrid / Hybrid Storage', desc: 'SharePoint and OneDrive adopted, but many legacy network drives remain.', score: 2 },
            { label: 'Cloud-First Workplace', desc: 'Fully in M365; active Teams channels, SharePoint team sites, and Entra ID.', score: 3 },
            { label: 'Optimised Enterprise Tenant', desc: 'Standardised lifecycle policies, conditional access, and automated provisioning.', score: 4 }
        ]
    },
    {
        id: 'sharepoint_governance',
        pillar: 'SharePoint Governance',
        title: 'What is the state of your SharePoint Online permissions and architecture?',
        description: 'Crucial for Copilot and AI safety to prevent sensitive data oversharing.',
        options: [
            { label: 'Uncontrolled / Organic Growth', desc: 'Many "Anyone with link" shares, broken permissions, unmanaged sites.', score: 1, flag: 'High risk of AI oversharing' },
            { label: 'Departmental Silos', desc: 'Sites managed informally by individual department heads without formal policy.', score: 2 },
            { label: 'Defined Permissions Matrix', desc: 'Centralised security groups, access reviews, and restricted sharing rules.', score: 3 },
            { label: 'Automated Lifecycle & Governance', desc: 'Hub architecture, automated site lifecycle, and regular access reviews in place.', score: 4 }
        ]
    },
    {
        id: 'document_management',
        pillar: 'Document Classification & Metadata',
        title: 'How are enterprise documents structured and classified?',
        description: 'Semantic search and AI reasoning quality depend directly on metadata hygiene.',
        options: [
            { label: 'Deep Folder Structures', desc: 'Hierarchies of nested folders with inconsistent naming and duplicate files.', score: 1 },
            { label: 'Basic Content Types', desc: 'Some standardized libraries and naming standards, but primarily unstructured.', score: 2 },
            { label: 'Metadata-Driven Taxonomy', desc: 'Managed metadata term stores, automated columns, and standardized templates.', score: 3 },
            { label: 'Intelligent Enterprise Syntex / AI', desc: 'Automated content classification, extraction models, and continuous indexing.', score: 4 }
        ]
    },
    {
        id: 'copilot_readiness',
        pillar: 'Microsoft Copilot Readiness',
        title: 'Has your organisation evaluated Microsoft Copilot requirements?',
        description: 'Reviewing prerequisite licensing, user readiness, and technical constraints.',
        options: [
            { label: 'Not Evaluated', desc: 'We are curious but have not checked prerequisites or tenant hygiene.', score: 1 },
            { label: 'Ad-hoc Consumer Tools', desc: 'Employees are using public ChatGPT or unapproved AI on personal devices.', score: 1, flag: 'Shadow AI data leak risk' },
            { label: 'Pilot Planning Phase', desc: 'Testing licenses with IT/Champions but need an enterprise governance framework.', score: 3 },
            { label: 'Structured Rollout Ready', desc: 'Targeted user personas identified, success KPIs defined, and security vetted.', score: 4 }
        ]
    },
    {
        id: 'workflow_automation',
        pillar: 'Process Automation Opportunities',
        title: 'How are repetitive business processes currently handled?',
        description: 'Identifies high-impact opportunities for Power Platform and cognitive agents.',
        options: [
            { label: 'Entirely Manual & Email', desc: 'Approvals, data entry, and reports managed via email chains and spreadsheets.', score: 1 },
            { label: 'Basic Power Automate Flows', desc: 'A few isolated alerts or simple notifications created by individual users.', score: 2 },
            { label: 'Departmental Power Apps', desc: 'Several structured business apps connected to SharePoint or Dataverse.', score: 3 },
            { label: 'Enterprise Orchestration', desc: 'ALM pipeline for solutions, custom connectors, and API integrations.', score: 4 }
        ]
    },
    {
        id: 'ai_security',
        pillar: 'AI Security & Information Protection',
        title: 'What data protection frameworks are currently enforced?',
        description: 'Evaluates Microsoft Purview sensitivity labels, DLP, and tenant boundaries.',
        options: [
            { label: 'Default / No Labels', desc: 'No sensitivity labels or Data Loss Prevention (DLP) rules applied.', score: 1, flag: 'Purview baseline required' },
            { label: 'Manual Sensitivity Labels', desc: 'Labels available in Office apps, but user application is sporadic.', score: 2 },
            { label: 'Automated DLP & Encryption', desc: 'Automatic policy-based labeling for financial and personal data (UK GDPR).', score: 3 },
            { label: 'Continuous Purview Governance', desc: 'Insider risk management, customer key, and real-time audit event logging.', score: 4 }
        ]
    }
];

export const AIReadinessAssessment: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [showResults, setShowResults] = useState(false);

    const question = assessmentQuestions[currentStep];
    const totalQuestions = assessmentQuestions.length;

    const handleSelectOption = (score: number) => {
        const newAnswers = { ...answers, [question.id]: score };
        setAnswers(newAnswers);

        if (currentStep < totalQuestions - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleReset = () => {
        setAnswers({});
        setCurrentStep(0);
        setShowResults(false);
    };

    // Calculate score
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const maxScore = totalQuestions * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let stage = 'Foundational Explorer';
    let summary = 'Your organisation is in the early stages of Microsoft 365 governance. Before adopting Copilot or custom AI, establish tenant boundaries and permissions to avoid oversharing sensitive data.';
    let recommendations = [
        'Conduct a comprehensive SharePoint Online permissions audit to identify open links.',
        'Implement Microsoft Purview baseline sensitivity labels for confidential documents.',
        'Migrate remaining file-shares into structured SharePoint document libraries.'
    ];

    if (percentage >= 75) {
        stage = 'Enterprise AI Ready';
        summary = 'Your organisation has a robust foundation with strong governance and structured data. You are primed to deploy Microsoft Copilot at scale and introduce autonomous AI agents.';
        recommendations = [
            'Launch persona-driven Microsoft Copilot adoption programs with ROI metrics.',
            'Deploy multi-agent cognitive workflows connected to Line-of-Business systems.',
            'Establish an AI Centre of Excellence (CoE) for continuous innovation.'
        ];
    } else if (percentage >= 50) {
        stage = 'Accelerating Workplace';
        summary = 'You have good cloud momentum and active M365 usage. Targeted enhancements in document metadata, automated labelling, and Power Platform governance will unlock full AI potential.';
        recommendations = [
            'Standardise taxonomy and content types across core SharePoint repositories.',
            'Implement automated Data Loss Prevention (DLP) rules for UK GDPR compliance.',
            'Execute a 30-user targeted Copilot pilot with clear success criteria.'
        ];
    } else if (percentage >= 30) {
        stage = 'Emerging Practitioner';
        summary = 'Cloud foundations exist, but informal governance and unstructured data create friction. Focus on tenant hygiene and workflow consolidation.';
        recommendations = [
            'Remediate high-risk "Anyone with link" sharing settings in SharePoint.',
            'Consolidate disjointed email approvals into managed Power Automate workflows.',
            'Schedule a professional M365 architecture discovery to chart your roadmap.'
        ];
    }

    return (
        <div className="glass-panel p-6 sm:p-10 md:p-12 rounded-3xl border border-border">
            {!showResults ? (
                <div>
                    {/* Header & Progress Bar */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                Question {currentStep + 1} of {totalQuestions}
                            </span>
                            <h3 className="text-sm font-semibold text-text-dim mt-0.5">
                                Pillar: {question.pillar}
                            </h3>
                        </div>
                        <div className="w-full sm:w-48 bg-surface-elevated rounded-full h-2 border border-border">
                            <div
                                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Question Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={question.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                                    {question.title}
                                </h4>
                                <p className="text-sm text-text-muted leading-relaxed">
                                    {question.description}
                                </p>
                            </div>

                            {/* Options */}
                            <div className="space-y-3">
                                {question.options.map((opt, i) => {
                                    const isSelected = answers[question.id] === opt.score;
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => handleSelectOption(opt.score)}
                                            className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                                isSelected
                                                    ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10'
                                                    : 'bg-surface hover:bg-surface-elevated border-border hover:border-border-hover'
                                            }`}
                                        >
                                            <div className={`w-5 h-5 rounded-full border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                                                isSelected ? 'border-primary bg-primary' : 'border-border group-hover:border-text-muted'
                                            }`}>
                                                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                                                        {opt.label}
                                                    </span>
                                                    {opt.flag && (
                                                        <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                                                            {opt.flag}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                                                    {opt.desc}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex justify-between items-center pt-4 border-t border-border/50">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentStep === 0}
                                    className="px-4 py-2 rounded-xl text-xs font-semibold text-text-muted hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                                >
                                    <ArrowLeft size={14} /> Previous
                                </button>
                                <span className="text-xs text-text-dim">
                                    Click an option to proceed
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            ) : (
                /* Results View */
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-8"
                >
                    <div className="text-center max-w-xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4 text-xs font-bold uppercase tracking-wider">
                            <Sparkles size={14} />
                            <span>Assessment Scorecard</span>
                        </div>
                        <h4 className="text-3xl font-heading font-bold text-white mb-2">
                            {stage}
                        </h4>
                        <div className="text-5xl font-extrabold text-gradient-primary my-4">
                            {percentage}%
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">
                            {summary}
                        </p>
                    </div>

                    {/* Recommendations Box */}
                    <div className="p-6 rounded-2xl bg-surface-elevated border border-border space-y-4">
                        <h5 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                            <BarChart3 size={16} className="text-primary" />
                            Priority Architectural Next Steps
                        </h5>
                        <ul className="space-y-2.5 text-xs text-text-muted">
                            {recommendations.map((rec, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{rec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 text-xs font-semibold text-text-muted hover:text-white transition-colors flex items-center gap-1.5"
                        >
                            <RotateCcw size={14} /> Retake Assessment
                        </button>
                        <Link
                            to="/book-consultation"
                            className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                        >
                            Discuss Your Score with an Architect <ArrowRight size={15} />
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
};
