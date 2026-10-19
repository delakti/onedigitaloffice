import React from 'react';
import { Bot } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'microsoft-copilot',
    title: 'Microsoft Copilot Implementation Consultancy UK',
    tagline: 'Enterprise Copilot Readiness',
    headline: 'Deploy Microsoft Copilot with Zero Oversharing and Measurable ROI',
    metaDescription: 'Specialist Microsoft Copilot implementation consultancy in the UK. We conduct data hygiene audits, configure Microsoft Purview governance, and drive persona-focused adoption.',
    keywords: 'Microsoft Copilot consultancy UK, Copilot readiness assessment, Microsoft 365 Copilot governance, Purview sensitivity labels Copilot, AI adoption UK',
    badgeIcon: Bot,

    customerProblem: {
        headline: 'If your users have access to it, Microsoft Copilot will find it. Are you sure your permissions are safe?',
        description: 'Microsoft Copilot respects existing user permissions. If sensitive files—such as executive compensation spreadsheets, redundancy plans, or legal correspondence—have loose permissions or open sharing links, any employee can inadvertently surface them simply by asking Copilot.',
        painPoints: [
            { title: 'The Oversharing Trap', desc: '"Anyone with link" and broad "Everyone except external users" shares exposing private files to Copilot indexing.' },
            { title: 'License Waste ($30/user/mo)', desc: 'Deploying expensive licenses indiscriminately across staff who only use Copilot for basic email summaries.' },
            { title: 'Unstructured Grounding Data', desc: 'Outdated drafts, duplicate policies, and obsolete files polluting Copilot answers with hallucinated inaccuracies.' },
            { title: 'Resistance & Low Adoption', desc: 'Lack of prompt engineering education leading employees to abandon Copilot after 2 weeks of trial.' }
        ]
    },

    businessOutcomes: [
        { metric: 'Zero', title: 'Data Leaks or Oversharing', description: 'Remediate high-risk permissions and deploy Purview sensitivity labels before users receive licenses.' },
        { metric: '8.5 hrs', title: 'Saved Per Employee / Week', description: 'Persona-targeted prompt training enabling staff to automate research, meeting notes, and executive drafting.' },
        { metric: '100%', title: 'License Utility Tracking', description: 'Identify active power users, reallocate underutilised seats, and validate ROI milestones.' }
    ],

    servicesIncluded: [
        {
            title: 'Copilot Technical Readiness & Permissions Audit',
            description: 'In-depth scan of your SharePoint, OneDrive, and Teams repositories to identify and remediate overexposed confidential files.',
            deliverables: ['Oversharing & open link risk report', 'Restricted SharePoint Search configuration', 'Remediation scripts for orphaned permissions']
        },
        {
            title: 'Microsoft Purview Data Protection & Labels',
            description: 'Enforcing automated sensitivity labels, data loss prevention (DLP) rules, and encryption to protect high-value assets.',
            deliverables: ['Standardised sensitivity label taxonomy', 'Automated document classification rules', 'Information barriers between sensitive groups']
        },
        {
            title: 'Targeted Pilot Program & Persona Mapping',
            description: 'Designing a 30-to-60 day pilot cohort focusing on high-ROI roles: Executives, HR, Legal, Sales, and Project Managers.',
            deliverables: ['Role-specific prompt library & playbook', 'Pre- and post-pilot productivity benchmarks', 'Champion training & feedback loops']
        },
        {
            title: 'Copilot Studio Custom Agent Extensions',
            description: 'Extending Copilot capabilities with bespoke internal plugins that query your CRM, ERP, and internal databases securely.',
            deliverables: ['Copilot Studio declarative agents', 'Microsoft Graph connectors', 'Enterprise plugin governance review']
        }
    ],

    technicalCapabilities: [
        { name: 'Microsoft Copilot for M365', description: 'Native integration across Word, Excel, PowerPoint, Outlook, Teams, and Copilot Chat.', tags: ['M365 Copilot', 'Graph Grounding', 'Semantic Index'] },
        { name: 'Microsoft Purview Information Protection', description: 'Unified data classification, encryption, and sensitivity labels controlling AI access.', tags: ['Sensitivity Labels', 'DLP', 'Insider Risk'] },
        { name: 'Microsoft Copilot Studio', description: 'Low-code conversational agent authoring with custom plugins and topic trees.', tags: ['Copilot Studio', 'Generative Answers', 'Plugins'] },
        { name: 'Restricted SharePoint Search', description: 'Limiting enterprise-wide search grounding to curated, verified authoritative sites.', tags: ['Search Scope', 'Tenant Policy', 'Security Baseline'] },
        { name: 'Microsoft Graph Connectors', description: 'Indexing external databases, Jira, and custom APIs into Copilot semantic search.', tags: ['Graph Ingestion', 'External Data', 'Vector Grounding'] },
        { name: 'Copilot Analytics & Power BI', description: 'Monitoring tenant prompt frequency, application usage, and ROI metrics.', tags: ['Viva Insights', 'Power BI Dashboard', 'Usage Reports'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Readiness & Permissions Scan', timeline: 'Weeks 1–2', description: 'Executing automated tenant hygiene scripts to detect overexposed sites, open links, and licensing requirements.' },
        { step: '02', title: 'Data Hygiene Remediation', timeline: 'Weeks 3–4', description: 'Restricting open shares, publishing Purview sensitivity labels, and establishing authoritative knowledge bases.' },
        { step: '03', title: 'Pilot Cohort Deployment', timeline: 'Weeks 5–6', description: 'Provisioning licenses for targeted champion groups and hosting interactive prompt workshops.' },
        { step: '04', title: 'ROI Review & Enterprise Rollout', timeline: 'Weeks 7–8', description: 'Reviewing pilot metrics, refining adoption strategies, and preparing executive business cases for expansion.' }
    ],

    faqs: [
        {
            question: 'Does Microsoft use our corporate data to train public AI models?',
            answer: 'No. Microsoft 365 Copilot operates strictly inside your tenant boundary. Prompts, responses, and internal documents are never used to train OpenAI foundation models or shared outside your organization.'
        },
        {
            question: 'What happens if we don’t clean up our permissions before rolling out Copilot?',
            answer: 'Any file accessible by a user—even if forgotten in a generic site—will be searched and summarized by Copilot. Without data hygiene, employees can easily surface confidential salaries, board minutes, and client contracts.'
        },
        {
            question: 'How do you measure ROI for Microsoft Copilot?',
            answer: 'We measure baseline hours spent on high-frequency tasks (meeting recaps, proposal writing, contract summaries) before the rollout and compare them at 30 and 60 days using Viva Insights and structured user surveys.'
        },
        {
            question: 'What is the difference between Copilot for M365 and Copilot Studio?',
            answer: 'Copilot for M365 is the productivity assistant embedded within Office apps. Copilot Studio is the developer platform used to build custom standalone agents, connecting Copilot to external databases and Line-of-Business systems.'
        }
    ]
};

export const CopilotPage: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default CopilotPage;
