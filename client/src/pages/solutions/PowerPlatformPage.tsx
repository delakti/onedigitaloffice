import React from 'react';
import { Workflow } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'power-platform',
    title: 'Microsoft Power Platform Consultancy UK',
    tagline: 'Enterprise Low-Code & Automation',
    headline: 'Accelerate Operations with Enterprise Power Apps, Automate & Power BI',
    metaDescription: 'Expert Microsoft Power Platform consultancy in the UK. We build robust Power Apps, automate mission-critical workflows with Power Automate, and deploy Power BI executive analytics.',
    keywords: 'Power Platform consultant UK, Power Apps development, Power Automate consultancy, Power BI dashboards UK, Dataverse solutions, Power Platform ALM',
    badgeIcon: Workflow,

    customerProblem: {
        headline: 'Critical business processes trapped in fragile spreadsheets and clunky email approval threads.',
        description: 'Too many organisations run core operations—purchase orders, employee onboarding, asset tracking, client requests—using disconnected Excel sheets and endless back-and-forth emails. This creates data silos, zero auditability, human calculation errors, and extreme key-person dependency.',
        painPoints: [
            { title: 'Spreadsheet Sprawl', desc: 'Dozens of conflicting versions of "master" tracking sheets circulating on local desktops.' },
            { title: 'Endless Approval Bottlenecks', desc: 'Requests languishing in executive inboxes for days with no status tracking or automated reminders.' },
            { title: 'Citizen Developer Chaos', desc: 'Isolated apps built by departed employees with no documentation, error handling, or security oversight.' },
            { title: 'Blind Decision-Making', desc: 'Senior leaders waiting until the end of the month for manual reports that are outdated on arrival.' }
        ]
    },

    businessOutcomes: [
        { metric: '85%', title: 'Faster Process Turnaround', description: 'Automate multi-stage approvals, notifications, and cross-system data sync in real time.' },
        { metric: 'Zero', title: 'Manual Data Re-Entry', description: 'Seamless bidirectional integration between SharePoint, Dataverse, ERPs, and Microsoft Teams.' },
        { metric: 'Real-Time', title: 'Executive Visibility', description: 'Live interactive Power BI dashboards providing instant clarity on operational KPIs.' }
    ],

    servicesIncluded: [
        {
            title: 'Custom Power Apps Development (Canvas & Model-Driven)',
            description: 'Engineering responsive, role-based business applications with intuitive user experiences on desktop and mobile devices.',
            deliverables: ['Custom Canvas Apps for mobile workers', 'Model-Driven Apps on Microsoft Dataverse', 'Reusable UI components & design system']
        },
        {
            title: 'Power Automate Enterprise Orchestration',
            description: 'Automating complex business logic, approval chains, scheduled synchronisations, and exception alerts.',
            deliverables: ['Cloud flows with error-handling logic', 'Interactive Teams adaptive cards', 'Document approval & e-signature workflows']
        },
        {
            title: 'Power BI Analytics & Executive Dashboards',
            description: 'Connecting disparate data sources into automated semantic data models with executive-ready visualizations.',
            deliverables: ['Automated ETL & Power Query pipelines', 'DAX calculations & business metrics', 'Row-Level Security (RLS) configuration']
        },
        {
            title: 'Power Platform CoE & ALM Governance',
            description: 'Establishing an enterprise Centre of Excellence (CoE) with dev/test/production environments and Azure DevOps pipelines.',
            deliverables: ['Centre of Excellence Starter Kit setup', 'Environment strategy & DLP policies', 'Solution packaging & CI/CD deployment']
        }
    ],

    technicalCapabilities: [
        { name: 'Microsoft Dataverse', description: 'Enterprise relational data platform with built-in security, business rules, and audit logs.', tags: ['Dataverse', 'Relational DB', 'Audit Trails'] },
        { name: 'Power Automate Desktop (RPA)', description: 'Robotic Process Automation bridging the gap to legacy software without modern APIs.', tags: ['RPA', 'Desktop Flows', 'Screen Scraping'] },
        { name: 'Custom Connectors & Azure Functions', description: 'Writing secure OpenAPI connectors linking Power Platform to proprietary APIs.', tags: ['OpenAPI', 'Swagger', 'Azure Functions'] },
        { name: 'Power Pages (Portals)', description: 'Secure external-facing web portals allowing external partners and customers to submit data.', tags: ['Power Pages', 'External Auth', 'Dataverse'] },
        { name: 'Application Lifecycle Management (ALM)', description: 'Version-controlled solutions managed through GitHub Actions and Azure DevOps.', tags: ['Azure DevOps', 'GitHub Actions', 'Managed Solutions'] },
        { name: 'Data Loss Prevention (DLP) Policies', description: 'Restricting unauthorized data connectors to prevent enterprise data from reaching public endpoints.', tags: ['DLP', 'Connector Governance', 'Security'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Process Mapping & Wireframing', timeline: 'Week 1', description: 'Documenting the current manual workflow, identifying edge cases, and drafting interactive click-through UI wireframes.' },
        { step: '02', title: 'Data Modelling & Core Build', timeline: 'Weeks 2–3', description: 'Building the Dataverse or SharePoint schema, security roles, and constructing the core application forms.' },
        { step: '03', title: 'Automation & Integration Sprints', timeline: 'Weeks 4–5', description: 'Developing Power Automate workflows, connecting external systems, and setting up error handling.' },
        { step: '04', title: 'UAT & ALM Deployment', timeline: 'Weeks 6–7', description: 'User acceptance testing with department stakeholders, deploying managed solutions to production, and training.' }
    ],

    faqs: [
        {
            question: 'What is the difference between SharePoint Lists and Dataverse for Power Apps?',
            answer: 'SharePoint Lists are suitable for simpler apps with fewer than 10,000 records and basic security needs. Microsoft Dataverse is a true enterprise relational database with granular record-level security, complex data relationships, and native support for model-driven apps.'
        },
        {
            question: 'Can Power Apps be used on mobile phones and tablets?',
            answer: 'Yes! Power Apps run natively within the Power Apps mobile client for iOS and Android, taking advantage of device hardware such as cameras (for barcode/receipt scanning) and GPS location.'
        },
        {
            question: 'How do you prevent "sprawl" and unmanaged Power Platform flows?',
            answer: 'We deploy the Microsoft Centre of Excellence (CoE) Starter Kit, configure Data Loss Prevention (DLP) policies to block unapproved connectors, and implement structured Dev, Test, and Production environments.'
        },
        {
            question: 'Can Power Automate connect to software outside the Microsoft ecosystem?',
            answer: 'Yes. Power Automate has hundreds of pre-built connectors for services like Salesforce, SAP, Jira, Xero, and DocuSign, and we can engineer bespoke custom connectors for any REST API.'
        }
    ]
};

export const PowerPlatformPage: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default PowerPlatformPage;
