import React from 'react';
import { GraduationCap } from 'lucide-react';
import { IndustryPageTemplate, type IndustryPageProps } from '../../components/IndustryPageTemplate';

const pageData: IndustryPageProps = {
    slug: 'education',
    title: 'Microsoft 365 & SharePoint for Higher Education UK',
    tagline: 'Colleges, Universities & Multi-Academy Trusts',
    headline: 'Modernise Campus Collaboration, Academic Admin & Student Workflows',
    metaDescription: 'Specialist Microsoft 365 and SharePoint consultancy for UK Higher Education and MATs. Unify faculty portals, automate student requests, and protect research data.',
    keywords: 'Higher education Microsoft 365, University SharePoint intranet, Student lifecycle automation, Academic committee governance, DfE cloud compliance',
    sectorIcon: GraduationCap,

    overview: 'Universities and multi-academy trusts manage complex ecosystems spanning thousands of students, faculty members, external researchers, and administrative staff. We design unified SharePoint portals and Power Platform automations that eliminate paper bottlenecks and protect intellectual property.',

    challenges: [
        { title: 'Campus & Departmental Disconnection', desc: 'Faculties and research groups operating as isolated islands with fragmented communication channels and outdated portals.' },
        { title: 'Overwhelming Manual Admin', desc: 'Course transfers, exam appeals, extenuating circumstances, and research grants handled via paper forms and unmonitored mailboxes.' },
        { title: 'Research Data Security & Export Controls', desc: 'Multi-million-pound research contracts requiring strict international data handling, export controls, and granular access rules.' },
        { title: 'Student Churn & Identity Management', desc: 'Managing the rapid influx and departure of tens of thousands of student identities and cloud storage quotas every term.' }
    ],

    solutions: [
        { title: 'Modern Faculty & Staff Intranets', desc: 'Departmental SharePoint hubs providing single-sign-on access to academic policies, committee papers, and teaching resources.' },
        { title: 'Automated Student Lifecycle Workflows', desc: 'Power Apps and Power Automate flows for module registrations, extenuating circumstances, and automated admissions routing.' },
        { title: 'Secure Research Collaboration Rooms', desc: 'Encrypted SharePoint document vaults with time-bound external guest access for multi-institution research consortiums.' },
        { title: 'Automated M365 Account Lifecycle', desc: 'Entra ID automated provisioning, licensing optimization, and post-graduation archive workflows.' }
    ],

    regulatoryCompliance: [
        'Higher Education Statistics Agency (HESA) & OfS Standards',
        'DfE Cyber Standards for Colleges and Universities',
        'UK GDPR & Data Protection Act 2018',
        'Jisc Cloud Procurement & Security Guidelines'
    ],

    outcomes: [
        { metric: '80%', title: 'Faster Admin Turnaround', desc: 'Student extenuating circumstance and appeal requests processed in days instead of weeks.' },
        { metric: '25k+', title: 'Students Seamlessly Supported', desc: 'Scalable cloud infrastructure handling peak term-start traffic without bottlenecks.' },
        { metric: '100%', title: 'Research Data Compliance', desc: 'Secured grant repositories complying with UKRI data governance requirements.' }
    ]
};

export const EducationPage: React.FC = () => {
    return <IndustryPageTemplate {...pageData} />;
};
export default EducationPage;
