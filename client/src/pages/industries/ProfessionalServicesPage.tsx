import React from 'react';
import { Briefcase } from 'lucide-react';
import { IndustryPageTemplate, type IndustryPageProps } from '../../components/IndustryPageTemplate';

const pageData: IndustryPageProps = {
    slug: 'professional-services',
    title: 'Microsoft 365 & AI for Professional Services UK',
    tagline: 'Legal, Accounting & Management Consultancies',
    headline: 'Accelerate Matter Management, Client Onboarding & Contract Review with Microsoft Cloud',
    metaDescription: 'Specialist Microsoft 365 and AI consultancy for UK law firms, accounting practices, and consultancies. Automate client onboarding, matter files, and document drafting.',
    keywords: 'Professional services Microsoft 365, Law firm SharePoint intranet, Matter management automation, SRA compliant cloud, Contract review AI UK',
    sectorIcon: Briefcase,

    overview: 'In professional services firms, time is revenue. High billable rates require lawyers, accountants, and consultants to focus on strategic client counsel rather than formatting engagement letters, chasing KYC documents, and hunting across legacy document repositories.',

    challenges: [
        { title: 'Billable Time Lost to Repetitive Admin', desc: 'Fee earners spending 20%+ of billable capacity re-keying data, drafting boilerplate letters, and filing matter correspondence.' },
        { title: 'Strict Matter Confidentiality (SRA / ICAEW)', desc: 'Managing conflicts of interest and ensuring that lawyers working on conflicting matters cannot view opposing case documents.' },
        { title: 'Slow Client Onboarding & Engagement Letters', desc: 'Onboarding new corporate clients taking weeks due to disjointed identity checks, manual engagement letters, and signature chasing.' },
        { title: 'Dispersed Knowledge & Precedents', desc: 'Valuable firm precedents, pitch decks, and work products scattered across local drives and personal mailboxes.' }
    ],

    solutions: [
        { title: 'Automated Matter Management Architecture', desc: 'Automated provisioning of standardized, security-trimmed SharePoint matter workspaces with unified document templates.' },
        { title: 'Client Onboarding & AML Workflow Automation', desc: 'Power Automate and Power Apps streamlining client intake, automated KYC checklist gathering, and e-signature execution.' },
        { title: 'Precedent Knowledge Search & RAG AI', desc: 'Semantic search allowing fee earners to instantaneously query thousands of historical contracts, opinions, and pitch decks.' },
        { title: 'Ethical Walls & Conflict of Interest Controls', desc: 'Granular Microsoft Purview information barriers automatically isolating sensitive matter workspaces from unauthorized staff.' }
    ],

    regulatoryCompliance: [
        'Solicitors Regulation Authority (SRA) Standards & Regulations',
        'ICAEW Practice Assurance Standards',
        'UK Anti-Money Laundering (AML) Regulations 2017',
        'UK GDPR & Client Confidentiality Common Law Duty'
    ],

    outcomes: [
        { metric: '75%', title: 'Faster Matter Workspace Setup', desc: 'Instant automated provisioning of standardized matter repositories in seconds.' },
        { metric: '15 hrs', title: 'Saved Per Fee Earner / Month', desc: 'Eliminate repetitive document drafting and manual file indexing.' },
        { metric: 'Zero', title: 'Conflict of Interest Breaches', desc: 'Enforce mathematical ethical walls across Teams, SharePoint, and emails.' }
    ]
};

export const ProfessionalServicesPage: React.FC = () => {
    return <IndustryPageTemplate {...pageData} />;
};
export default ProfessionalServicesPage;
