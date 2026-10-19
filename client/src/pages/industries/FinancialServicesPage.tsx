import React from 'react';
import { Landmark } from 'lucide-react';
import { IndustryPageTemplate, type IndustryPageProps } from '../../components/IndustryPageTemplate';

const pageData: IndustryPageProps = {
    slug: 'financial-services',
    title: 'Microsoft 365 & AI for Financial Services UK',
    tagline: 'FCA & PRA Regulated Cloud',
    headline: 'Secure Microsoft 365, Copilot & AI Architecture for Financial Services',
    metaDescription: 'Specialist Microsoft 365 and AI consultancy for UK Financial Services. Ensure FCA/PRA compliance, enforce ethical walls, and prevent data oversharing.',
    keywords: 'Financial services Microsoft 365, FCA compliant cloud, Copilot for financial services, Purview information barriers, financial AI automation',
    sectorIcon: Landmark,

    overview: 'Financial institutions must balance rapid digital acceleration with stringent regulatory scrutiny from the FCA and PRA. We design secure Microsoft 365 environments with automated sensitivity classification, customer data protection, and audited AI workflows.',

    challenges: [
        { title: 'Strict Regulatory Scrutiny (FCA / PRA / UK GDPR)', desc: 'Severe financial and reputational penalties for data breaches, accidental record exposure, or non-compliant communications.' },
        { title: 'Complex Ethical Walls & Information Barriers', desc: 'Need to prevent investment banking, advisory, and trading teams from accessing each other’s confidential client materials.' },
        { title: 'AI Oversharing Anxiety', desc: 'Reluctance to deploy Microsoft Copilot due to fears that confidential deal rooms and client portfolios might be exposed.' },
        { title: 'Legacy On-Premise Silos', desc: 'Mission-critical portfolio and accounting systems that fail to integrate cleanly with modern cloud collaboration tools.' }
    ],

    solutions: [
        { title: 'Microsoft Purview Information Barriers', desc: 'Enforce mathematical boundaries between conflicting business units in Microsoft Teams, SharePoint, and OneDrive.' },
        { title: 'Automated Financial Data Classification', desc: 'Deep DLP inspection automatically scanning for bank account numbers, NI numbers, and credit details to prevent external leakage.' },
        { title: 'Restricted Copilot Deployment Framework', desc: 'Ground Microsoft Copilot strictly within vetted, pre-audited repositories with full immutable audit logging.' },
        { title: 'Compliant Communication Archiving', desc: 'Automated retention and supervision policies across Teams chat, channel messages, and Exchange emails.' }
    ],

    regulatoryCompliance: [
        'FCA SYSC (Senior Management Arrangements, Systems and Controls)',
        'PRA Supervisory Statements (Operational Resilience)',
        'UK GDPR & Data Protection Act 2018',
        'ISO 27001 & Cyber Essentials Plus Baseline'
    ],

    outcomes: [
        { metric: 'Zero', title: 'Data Spillage Incidents', desc: 'Automated Purview labels encrypt and protect files wherever they travel.' },
        { metric: '65%', title: 'Faster KYC/Onboarding', desc: 'Power Automate workflows reduce document turnaround times from days to hours.' },
        { metric: '100%', title: 'Audit Readiness', desc: 'Complete immutable log trails for regulatory audits and compliance inspections.' }
    ]
};

export const FinancialServicesPage: React.FC = () => {
    return <IndustryPageTemplate {...pageData} />;
};
export default FinancialServicesPage;
