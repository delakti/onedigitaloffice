import React from 'react';
import { Layers } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'microsoft-365',
    title: 'Microsoft 365 Transformation Consultancy UK',
    tagline: 'Workplace Modernisation',
    headline: 'Modernise Your Digital Workplace with Secure Microsoft 365 Architecture',
    metaDescription: 'OneDigitalOffice provides expert Microsoft 365 transformation consultancy across the UK. We consolidate fragmented cloud tenants, optimise collaboration, and fortify security postures.',
    keywords: 'Microsoft 365 consultancy UK, M365 migration services, Microsoft 365 tenant consolidation, digital workplace transformation, Entra ID governance',
    badgeIcon: Layers,

    customerProblem: {
        headline: 'Tenant sprawl, license waste, and fragmented collaboration undermine productivity.',
        description: 'Most medium-sized organisations have accumulated ad-hoc Microsoft 365 configurations over years of organic growth. This results in duplicate licensing, insecure external sharing, disjointed Teams architectures, and bewildered users.',
        painPoints: [
            { title: 'Fragmented Collaboration', desc: 'Teams channels multiplying uncontrollably with zero lifecycle or governance policies.' },
            { title: 'Suboptimal Licensing', desc: 'Paying for high-tier E3/E5 licenses without activating core security or automation features.' },
            { title: 'Security Exposure', desc: 'Inconsistent MFA enforcement, unmanaged guest access, and unprotected confidential files.' },
            { title: 'Slow Search & Retrieval', desc: 'Staff wasting 30+ minutes daily hunting across disconnected document libraries and emails.' }
        ]
    },

    businessOutcomes: [
        { metric: '35%', title: 'License Cost Optimisation', description: 'Rationalise inactive accounts, downgrade surplus tiers, and fully exploit included Microsoft capabilities.' },
        { metric: '4x', title: 'Faster File Retrieval', description: 'Unified enterprise search and standardised taxonomy across Teams, SharePoint, and OneDrive.' },
        { metric: '100%', title: 'Security Baseline Compliance', description: 'Enforce Conditional Access, automated guest lifecycle, and Microsoft Purview data protection.' }
    ],

    servicesIncluded: [
        {
            title: 'M365 Tenant Architecture & Consolidation',
            description: 'Comprehensive review and rationalisation of your Microsoft 365 tenant, domains, Entra ID, and cloud workloads.',
            deliverables: ['Tenant health & hygiene report', 'Domain & identity architecture blueprint', 'Consolidation & migration roadmap']
        },
        {
            title: 'Collaboration & Teams Governance',
            description: 'Structured governance framework for Microsoft Teams, SharePoint modern sites, and cross-departmental collaboration.',
            deliverables: ['Automated team provisioning flow', 'Guest access & lifecycle rules', 'Standardised channel & folder taxonomy']
        },
        {
            title: 'Security & Entra ID Identity Hardening',
            description: 'Protecting corporate identities with zero-trust principles, device compliance policies, and granular access controls.',
            deliverables: ['Conditional Access policy deployment', 'MFA & passwordless rollout', 'Privileged Identity Management (PIM)']
        },
        {
            title: 'User Adoption & Change Enablement',
            description: 'Persona-specific training, executive sponsorship coaching, and self-serve documentation to drive genuine engagement.',
            deliverables: ['Role-based champion workshops', 'Interactive user training cheat-sheets', '90-day adoption KPI monitoring']
        }
    ],

    technicalCapabilities: [
        { name: 'Microsoft Entra ID', description: 'Cloud identity, Single Sign-On (SSO), Conditional Access, and B2B guest collaboration.', tags: ['SSO', 'Conditional Access', 'PIM'] },
        { name: 'Microsoft Graph API', description: 'Automating administrative tasks and connecting Line-of-Business systems into M365.', tags: ['REST API', 'Webhooks', 'Batching'] },
        { name: 'Exchange Online & Outlook', description: 'Modern mailflow hygiene, SPF/DKIM/DMARC authentication, and shared mailbox governance.', tags: ['Email Security', 'Retention', 'Transport Rules'] },
        { name: 'Microsoft Teams Architecture', description: 'Enterprise voice, custom app deployment, and automated team lifecycle provisioning.', tags: ['Teams Governance', 'Apps', 'Voice'] },
        { name: 'OneDrive for Business', description: 'Known Folder Move, secure external sharing policies, and automated quota management.', tags: ['Sync', 'Storage', 'DLP'] },
        { name: 'PowerShell Automation', description: 'DevOps scripts for continuous tenant configuration, audit logging, and bulk administration.', tags: ['PnP PowerShell', 'Graph PowerShell', 'CI/CD'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Initial Tenant Discovery Call', timeline: 'Week 1', description: '30-minute review of your organisation size, licensing, current pain points, and strategic milestones.' },
        { step: '02', title: 'Architectural Audit & Assessment', timeline: 'Weeks 1–2', description: 'Comprehensive diagnostic of your M365 configuration, security scores, and permission matrices.' },
        { step: '03', title: 'Remediation & Implementation Sprints', timeline: 'Weeks 3–6', description: 'Iterative technical deployment of governance rules, identity controls, and site structures.' },
        { step: '04', title: 'User Enablement & Handover', timeline: 'Weeks 7–8', description: 'Staff champion training, IT team documentation handover, and ongoing managed support transition.' }
    ],

    faqs: [
        {
            question: 'How long does a typical Microsoft 365 transformation project take?',
            answer: 'Most engagements for organisations with 50–500 employees take between 4 to 8 weeks. We execute in iterative sprints so your team experiences immediate productivity improvements from Week 2.'
        },
        {
            question: 'Will our day-to-day operations be disrupted during the migration or consolidation?',
            answer: 'No. We perform data migrations and policy cutovers in staging environments and schedule user-facing transitions during off-peak hours with zero downtime.'
        },
        {
            question: 'Can you help us reduce our Microsoft 365 licensing expenditure?',
            answer: 'Yes. Our licensing audit frequently identifies 15–30% in potential savings by removing dormant accounts, adjusting license assignments based on actual usage, and eliminating redundant third-party subscriptions.'
        },
        {
            question: 'Do you provide ongoing support after project completion?',
            answer: 'Yes. We offer Managed Microsoft 365 Services that provide continuous tenant monitoring, monthly health checks, and direct senior architect escalations.'
        }
    ]
};

export const Microsoft365Page: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default Microsoft365Page;
