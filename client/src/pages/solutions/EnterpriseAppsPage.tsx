import React from 'react';
import { Code } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'enterprise-applications',
    title: 'Enterprise Application Engineering & Cloud Solutions UK',
    tagline: 'Custom Software Engineering',
    headline: 'High-Performance Enterprise Applications Built with .NET, React, TypeScript & Azure',
    metaDescription: 'Specialist enterprise application development consultancy in the UK. We engineer mission-critical cloud software, Microsoft Graph integrations, and modern web architectures.',
    keywords: 'Enterprise application development UK, .NET Core development, React TypeScript consultancy, Azure cloud architecture, Microsoft Graph API developers',
    badgeIcon: Code,

    customerProblem: {
        headline: 'Off-the-shelf software doesn’t fit your unique business model, and legacy systems are too slow to change.',
        description: 'Growing mid-market enterprises reach a ceiling with generic SaaS platforms that cannot support their proprietary processes, compliance rules, or multi-system data flows. Concurrently, legacy on-premise applications create technical debt, security vulnerabilities, and brittle maintenance cycles.',
        painPoints: [
            { title: 'Rigid Commercial SaaS', desc: 'Forced to adapt your business processes to fit generic software instead of software fitting your strategy.' },
            { title: 'Fragile Legacy Architectures', desc: 'Old monoliths with undocumented code, high failure rates, and severe security compliance risks.' },
            { title: 'Disconnected Data Silos', desc: 'Critical information scattered between ERP, CRM, and cloud services without unified API integration.' },
            { title: 'Scalability & Performance Lag', desc: 'Slow page loads, unresponsive database queries, and system downtime during peak operations.' }
        ]
    },

    businessOutcomes: [
        { metric: '99.99%', title: 'Uptime & Reliability', description: 'Cloud-native Azure microservices with automated failover, autoscaling, and disaster recovery.' },
        { metric: '10x', title: 'Feature Velocity', description: 'Modern CI/CD pipelines and modular TypeScript / .NET architectures enabling rapid deployments.' },
        { metric: '100%', title: 'Proprietary IP Ownership', description: 'Bespoke software engineered specifically for your workflow with total intellectual property ownership.' }
    ],

    servicesIncluded: [
        {
            title: 'Full-Stack Web & Cloud Application Engineering',
            description: 'Engineering responsive, ultra-fast web applications using React, TypeScript, C#, and ASP.NET Core.',
            deliverables: ['Production-ready web application architecture', 'RESTful & GraphQL API microservices', 'Accessible, mobile-optimised UI/UX design']
        },
        {
            title: 'Azure Cloud Architecture & Serverless Microservices',
            description: 'Designing resilient cloud infrastructure using Azure App Services, Functions, Container Apps, and Cosmos DB.',
            deliverables: ['Infrastructure as Code (Terraform / Bicep)', 'Automated CI/CD deployment pipelines', 'Scalability & disaster recovery configuration']
        },
        {
            title: 'Microsoft Graph & Enterprise API Integrations',
            description: 'Deep integration with Microsoft 365 services—reading emails, scheduling Teams meetings, updating SharePoint lists.',
            deliverables: ['Custom Microsoft Graph daemon services', 'Webhook event listeners & queue processing', 'Secure Entra ID OAuth 2.0 authentication']
        },
        {
            title: 'Legacy Modernisation & Cloud Migration',
            description: 'Refactoring on-premise desktop applications, legacy ASP.NET systems, and SQL databases into modern cloud architectures.',
            deliverables: ['Technical debt & codebase audit', 'Strangler fig migration roadmap', 'Zero-downtime database migration']
        }
    ],

    technicalCapabilities: [
        { name: 'C# & ASP.NET Core', description: 'High-throughput enterprise backend APIs, background workers, and microservices.', tags: ['C#', '.NET 8/9', 'ASP.NET Core'] },
        { name: 'React & TypeScript', description: 'Type-safe, responsive user interfaces built with modern functional component patterns.', tags: ['React 19', 'TypeScript', 'Tailwind CSS'] },
        { name: 'Microsoft Azure Ecosystem', description: 'Cloud-native infrastructure optimized for security, global latency, and compliance.', tags: ['Azure App Service', 'Functions', 'Cosmos DB'] },
        { name: 'Microsoft Graph API', description: 'Bridging enterprise software directly into user collaboration and identity streams.', tags: ['Microsoft Graph', 'Entra ID', 'Webhooks'] },
        { name: 'SQL & NoSQL Database Architecture', description: 'Performance tuning, indexing, and modeling across Azure SQL, PostgreSQL, and Cosmos DB.', tags: ['Azure SQL', 'Entity Framework', 'PostgreSQL'] },
        { name: 'DevOps & Automated Testing', description: 'GitHub Actions, Azure DevOps, Playwright end-to-end testing, and Docker containerization.', tags: ['Docker', 'Playwright', 'CI/CD'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Technical Architecture & Scoping', timeline: 'Weeks 1–2', description: 'Collaborative domain-driven design workshops, API specifications, database modeling, and prototype wireframes.' },
        { step: '02', title: 'Agile Engineering Sprints', timeline: 'Weeks 3–8', description: 'Two-week bi-weekly development sprints with continuous staging deployments and regular stakeholder demos.' },
        { step: '03', title: 'Security, Pen-Testing & QA', timeline: 'Weeks 9–10', description: 'Rigorous automated end-to-end testing, accessibility audits (WCAG 2.2), and OWASP security vulnerability scans.' },
        { step: '04', title: 'Production Go-Live & SLA Handover', timeline: 'Weeks 11–12', description: 'Blue/green deployment to production Azure tenants, comprehensive code documentation, and maintenance SLAs.' }
    ],

    faqs: [
        {
            question: 'Who owns the intellectual property (IP) of the software you build?',
            answer: 'You do. 100% of the code, designs, and database schemas created during the project belong entirely to your organisation upon completion.'
        },
        {
            question: 'Can you integrate custom applications with Microsoft 365 and Entra ID?',
            answer: 'Yes. Every application we engineer supports Microsoft Single Sign-On (SSO) with Entra ID, Multi-Factor Authentication (MFA), and deep Microsoft Graph API integration.'
        },
        {
            question: 'What standards do you adhere to for security and accessibility?',
            answer: 'We develop strictly against OWASP Top 10 security guidelines, implement role-based access control (RBAC), and ensure all user interfaces comply with WCAG 2.2 AA accessibility standards.'
        },
        {
            question: 'Can you maintain and support the application after launch?',
            answer: 'Yes. We offer continuous application management SLAs covering proactive monitoring, dependency updates, bug fixes, and continuous feature enhancements.'
        }
    ]
};

export const EnterpriseAppsPage: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default EnterpriseAppsPage;
