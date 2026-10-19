import React from 'react';
import { Building2 } from 'lucide-react';
import { IndustryPageTemplate, type IndustryPageProps } from '../../components/IndustryPageTemplate';

const pageData: IndustryPageProps = {
    slug: 'public-sector',
    title: 'Microsoft 365 & Digital Workplace for UK Public Sector',
    tagline: 'Local Authorities & Central Government',
    headline: 'Modernise Citizen Services & Council Workplaces with Secure Microsoft Technologies',
    metaDescription: 'Specialist Microsoft 365 and SharePoint consultancy for UK local authorities, housing associations, and public sector bodies. WCAG 2.2 AA compliant architectures.',
    keywords: 'Public sector Microsoft 365, Local council SharePoint intranet, Government Power Platform, FOI management automation, Public sector cloud transformation UK',
    sectorIcon: Building2,

    overview: 'UK public sector bodies—from county councils to non-departmental public bodies—face mounting citizen demand against severe budget constraints. We deliver robust, WCAG 2.2 AA accessible SharePoint digital workplaces, automated Freedom of Information (FoI) pipelines, and compliant records management on Microsoft 365.',

    challenges: [
        { title: 'Severe Budget & Headcount Pressures', desc: 'Need to deliver more responsive public services with constrained administrative resources and aging legacy technology.' },
        { title: 'Strict Statutory Retention & FoI Deadlines', desc: 'Managing statutory 20-day Freedom of Information responses and 25-to-100-year social care record retention schedules.' },
        { title: 'Accessibility Mandates (WCAG 2.2 AA)', desc: 'Legal requirements that internal intranets and external citizen-facing forms be fully accessible to screen readers and keyboard navigation.' },
        { title: 'Fragmented Departmental Silos', desc: 'Social care, highways, planning, and housing maintaining isolated databases with zero horizontal visibility.' }
    ],

    solutions: [
        { title: 'WCAG 2.2 AA Accessible Council Intranets', desc: 'Engaging, modern SharePoint intranets engineered with high-contrast, keyboard-first, screen-reader verified components.' },
        { title: 'Automated Freedom of Information (FoI) Triage', desc: 'Power Platform case management automatically indexing incoming requests, redacting sensitive PII, and tracking deadlines.' },
        { title: 'Statutory Electronic Document & Records Management', desc: 'Automated SharePoint retention labels ensuring social care, planning, and committee records follow legal destruction schedules.' },
        { title: 'Housing & Citizen Request Portals', desc: 'Secure Power Pages portals enabling citizens and tenants to log repairs, submit planning documents, and track approvals.' }
    ],

    regulatoryCompliance: [
        'The Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018',
        'National Cyber Security Centre (NCSC) Cloud Security Principles',
        'Freedom of Information Act 2000 (FoIA)',
        'Local Government Retention Guidelines (Records Management Code of Practice)'
    ],

    outcomes: [
        { metric: '100%', title: 'WCAG 2.2 AA Compliant', desc: 'All digital touchpoints fully audited and accessible to all staff and citizens.' },
        { metric: '70%', title: 'Faster FoI Turnaround', desc: 'Automated document discovery and workflow tracking prevents statutory deadline breaches.' },
        { metric: 'Zero', title: 'On-Premise Server Costs', desc: 'Migrated aging legacy council file servers to low-maintenance Microsoft cloud.' }
    ]
};

export const PublicSectorPage: React.FC = () => {
    return <IndustryPageTemplate {...pageData} />;
};
export default PublicSectorPage;
