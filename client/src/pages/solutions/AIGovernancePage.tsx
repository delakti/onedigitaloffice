import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'ai-governance',
    title: 'Enterprise AI Governance, Security & Purview Consultancy UK',
    tagline: 'Risk, Security & Compliance',
    headline: 'Protect Your Enterprise Data with Robust AI Governance & Microsoft Purview',
    metaDescription: 'Specialist AI governance and Microsoft Purview consultancy in the UK. We establish data boundaries, configure automated sensitivity labels, and safeguard your tenant against AI data leaks.',
    keywords: 'AI governance UK, Microsoft Purview consultancy, Copilot security assessment, data loss prevention DLP, AI compliance UK GDPR',
    badgeIcon: ShieldCheck,

    customerProblem: {
        headline: 'Uncontrolled AI adoption introduces unprecedented intellectual property and data compliance risks.',
        description: 'As generative AI adoption surges across every industry, organisations face a dangerous compliance gap. Unvetted consumer tools, unmonitored employee prompts, and unmanaged SharePoint file sharing expose sensitive client information, personal data (UK GDPR), and board discussions to catastrophic leakage.',
        painPoints: [
            { title: 'Shadow AI Spread', desc: 'Employees pasting customer data, financial records, and medical details into public consumer AI models.' },
            { title: 'Inadvertent AI Ingestion', desc: 'Internal AI tools indexing confidential HR, remuneration, or legal data due to poor access boundaries.' },
            { title: 'Regulatory Non-Compliance', desc: 'Failing to satisfy UK GDPR, FCA, or NHS statutory regulations on algorithmic transparency and data residency.' },
            { title: 'Zero Audit Visibility', desc: 'Inability to track which employee submitted what prompt, when, and what proprietary data was returned.' }
        ]
    },

    businessOutcomes: [
        { metric: '100%', title: 'Audit Trail Visibility', description: 'Log, monitor, and alert on all AI queries and data classification interactions across your tenant.' },
        { metric: 'Zero', title: 'Data Loss Prevention Incidents', description: 'Automated Purview policies block confidential files and PII from exiting your secure perimeter.' },
        { metric: 'Fully', title: 'UK GDPR & ISO 27001 Aligned', description: 'Implement structured data retention, consent mechanisms, and statutory risk assessments.' }
    ],

    servicesIncluded: [
        {
            title: 'Microsoft Purview Information Protection Setup',
            description: 'Designing and deploying a structured sensitivity label taxonomy across emails, documents, Teams, and SharePoint sites.',
            deliverables: ['Custom sensitivity label hierarchy', 'Automated document classification policies', 'Client encryption & rights management']
        },
        {
            title: 'AI Data Loss Prevention (DLP) Policies',
            description: 'Configuring real-time rules that detect and block attempts to share financial, personal, or classified data with AI tools.',
            deliverables: ['Endpoint DLP rules for AI websites', 'Teams chat DLP content inspection', 'Automated incident alert workflows']
        },
        {
            title: 'Copilot & Tenant Boundary Hardening',
            description: 'Auditing existing permission hierarchies, disabling open link sharing, and setting up Restricted SharePoint Search.',
            deliverables: ['Overexposure risk remediation report', 'Site access governance policies', 'Information barrier configuration']
        },
        {
            title: 'Corporate AI Acceptable Use Policy & Training',
            description: 'Drafting executive AI governance policies, employee usage guidelines, and executive risk management protocols.',
            deliverables: ['Enterprise AI Acceptable Use Policy', 'Staff awareness training modules', 'Quarterly AI risk review framework']
        }
    ],

    technicalCapabilities: [
        { name: 'Microsoft Purview Information Protection', description: 'Automated labeling, encryption, and visual markings applied to sensitive enterprise content.', tags: ['Purview', 'Sensitivity Labels', 'Encryption'] },
        { name: 'Data Loss Prevention (DLP)', description: 'Deep content inspection preventing unauthorized sharing across endpoints, web, and Teams.', tags: ['DLP Policies', 'Endpoint DLP', 'PII Detection'] },
        { name: 'Microsoft Entra ID Conditional Access', description: 'Restricting access to AI services based on user location, device compliance, and risk score.', tags: ['Conditional Access', 'Zero Trust', 'Device Health'] },
        { name: 'Insider Risk Management', description: 'Correlating risk signals to detect potential data exfiltration or policy violations.', tags: ['Risk Signals', 'Audit Logs', 'Behavior Analysis'] },
        { name: 'Information Barriers', description: 'Preventing conflicting business departments from communicating or sharing files in regulated spaces.', tags: ['Compliance', 'Ethical Walls', 'FCA Regulated'] },
        { name: 'Microsoft Sentinel SIEM Integration', description: 'Aggregating security and AI telemetry into unified security operations dashboards.', tags: ['Sentinel', 'SIEM', 'Threat Detection'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Data Discovery & Risk Audit', timeline: 'Week 1', description: 'Scanning tenant data stores to quantify sensitive PII, intellectual property, and existing sharing permissions.' },
        { step: '02', title: 'Governance Blueprint & Policy Design', timeline: 'Weeks 2–3', description: 'Defining the sensitivity label taxonomy, DLP rules, and executive AI acceptable use frameworks.' },
        { step: '03', title: 'Purview Technical Deployment', timeline: 'Weeks 4–5', description: 'Enforcing policies in staging mode (audit-only), validating false positives, and activating blocking rules.' },
        { step: '04', title: 'Employee Education & Continuous Review', timeline: 'Weeks 6–7', description: 'Delivering end-user training sessions, executive sign-off, and transitioning to quarterly risk audits.' }
    ],

    faqs: [
        {
            question: 'How does Microsoft Purview protect data when using AI tools?',
            answer: 'Purview sensitivity labels follow the file wherever it travels. If an Excel file is marked "Highly Confidential - Financials", Purview encrypts it so that unauthorized users and unapproved AI tools cannot open, inspect, or process the document.'
        },
        {
            question: 'Can we block staff from using public consumer AI tools on corporate devices?',
            answer: 'Yes. Through Microsoft Defender for Cloud Apps and Purview Endpoint DLP, we can block access to unapproved consumer AI websites or prevent users from copying and pasting corporate data into them.'
        },
        {
            question: 'Is AI governance only necessary for large enterprises?',
            answer: 'No. Mid-sized organisations (50–500 staff) are often targeted by regulators and cyber threats because they possess high-value commercial data but lack dedicated enterprise compliance teams. Our frameworks are specifically scaled for mid-market efficiency.'
        },
        {
            question: 'What is Restricted SharePoint Search and why is it important for Copilot?',
            answer: 'Restricted SharePoint Search allows administrators to restrict Copilot’s enterprise-wide search indexing to a curated list of approved, authoritative sites, preventing it from crawling unvetted departmental folders.'
        }
    ]
};

export const AIGovernancePage: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default AIGovernancePage;
