import React from 'react';
import { Zap } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'managed-services',
    title: 'Managed Microsoft 365 & AI Services UK',
    tagline: 'Continuous Cloud Optimisation',
    headline: 'Proactive Managed Microsoft 365 Services Backed by Senior Enterprise Architects',
    metaDescription: 'OneDigitalOffice provides specialist managed Microsoft 365 and AI services across the UK. Keep your tenant secure, optimized, and continuously evolving with dedicated expert support.',
    keywords: 'Managed Microsoft 365 services UK, M365 tenant support, Microsoft 365 managed service provider, SharePoint support UK, Power Platform support',
    badgeIcon: Zap,

    customerProblem: {
        headline: 'Microsoft releases over 400 feature updates every year. Is your team keeping pace?',
        description: 'Managing modern Microsoft 365 environments requires deep, specialized architectural expertise across Entra ID, SharePoint, Teams, Purview, and Power Platform. Internal IT teams are overwhelmed by daily helpdesk tickets, leaving cloud security, updates, and strategic automations unaddressed.',
        painPoints: [
            { title: 'The Feature Firehose', desc: 'Continuous Microsoft roadmap releases breaking existing customisations and overwhelming internal IT staff.' },
            { title: 'Unmanaged Security Drift', desc: 'Security scores degrading over time as new services, apps, and guest accounts are provisioned unmonitored.' },
            { title: 'Helpdesk Stagnation', desc: 'Internal IT tied down in password resets instead of building high-value automation or strategic AI workflows.' },
            { title: 'Lack of Senior Guidance', desc: 'Hiring full-time senior enterprise architects is costly and unnecessary for mid-sized organisations.' }
        ]
    },

    businessOutcomes: [
        { metric: '99.9%', title: 'Tenant Health & Uptime', description: 'Continuous proactive monitoring and rapid escalation resolution prevent critical disruptions.' },
        { metric: 'Quarterly', title: 'Roadmap & Feature Adoption', description: 'Scheduled executive briefing sessions translating new Microsoft innovations into strategic advantages.' },
        { metric: 'Direct', title: 'Senior Architect Access', description: 'Zero junior call centres—deal directly with senior UK-based Microsoft solution architects.' }
    ],

    servicesIncluded: [
        {
            title: 'Proactive Tenant Monitoring & Health Checks',
            description: 'Continuous surveillance of tenant health, sync logs, security alerts, service advisories, and Entra ID audit streams.',
            deliverables: ['Monthly executive tenant health report', 'Microsoft Secure Score improvement tracking', 'Automated incident triage and response']
        },
        {
            title: 'SharePoint & Power Platform Continuous Support',
            description: 'Dedicated hours for bug fixing, minor enhancements, SPFx maintenance, and flow troubleshooting.',
            deliverables: ['Priority SLA response windows', 'Flow & Power App performance tuning', 'Site template and permission updates']
        },
        {
            title: 'Quarterly Strategic Innovation Reviews',
            description: 'Executive roadmap sessions evaluating newly released Microsoft 365 and AI features relevant to your industry.',
            deliverables: ['Quarterly roadmap presentation', 'Proof-of-concept feature pilots', 'Executive technology alignment briefings']
        },
        {
            title: 'License & Cost Rationalisation',
            description: 'Ongoing tracking of user license allocation, dormant accounts, and recommendations for tier downgrades.',
            deliverables: ['Quarterly license efficiency report', 'Dormant user reclamation workflows', 'Add-on consolidation advice']
        }
    ],

    technicalCapabilities: [
        { name: 'Microsoft 365 Admin Center', description: 'Comprehensive tenant governance, service health tracking, and policy orchestration.', tags: ['M365 Admin', 'Service Health', 'Audit Logs'] },
        { name: 'Microsoft Defender for Office 365', description: 'Advanced anti-phishing, safe attachments, and email quarantine management.', tags: ['Defender', 'Email Security', 'Safe Links'] },
        { name: 'Entra ID Governance', description: 'Periodic access reviews, Privileged Identity Management, and guest lifecycle auditing.', tags: ['PIM', 'Access Reviews', 'Lifecycle'] },
        { name: 'Power Platform Admin Center', description: 'Monitoring capacity, tenant-level DLP policies, and flow execution health.', tags: ['Capacity Management', 'Environment Health', 'ALM'] },
        { name: 'Continuous PnP Automation', description: 'Scheduled maintenance scripts inspecting broken permissions and orphaned assets.', tags: ['PowerShell', 'PnP Core', 'Automated Auditing'] },
        { name: 'Microsoft Graph Telemetry', description: 'Custom webhooks reporting anomalous document downloads and sharing events.', tags: ['Telemetry', 'Audit Stream', 'SIEM'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Tenant Onboarding & Baseline Audit', timeline: 'Month 1', description: 'Comprehensive baseline audit of your tenant architecture, security posture, and documentation of all custom apps.' },
        { step: '02', title: 'SLA & Escalation Protocol Setup', timeline: 'Month 1', description: 'Establishing dedicated communication channels, emergency escalation contacts, and ticketing workflows.' },
        { step: '03', title: 'Active Proactive Management', timeline: 'Ongoing', description: 'Executing monthly health audits, resolving escalated tickets, and applying security baseline patches.' },
        { step: '04', title: 'Quarterly Strategic Advisory', timeline: 'Every 90 Days', description: 'Executive roadmap sessions to prioritize new feature adoption, automation candidates, and licensing reviews.' }
    ],

    faqs: [
        {
            question: 'How is this different from standard Tier-1 IT managed service providers (MSPs)?',
            answer: 'Traditional MSPs focus on desktop hardware, printer issues, and resetting passwords. OneDigitalOffice provides senior architectural specialists focused on high-value business outcomes: SharePoint, Power Platform, Copilot adoption, security governance, and enterprise cloud architecture.'
        },
        {
            question: 'Do you replace our internal IT team?',
            answer: 'No. We typically partner with and empower internal IT managers. We act as their specialized senior Microsoft engineering tier, taking care of complex cloud architecture and strategic roadmaps so they can focus on internal user support.'
        },
        {
            question: 'What response SLAs do you provide for urgent issues?',
            answer: 'We offer standard response SLAs ranging from 1 to 4 hours for critical tenant-impacting incidents, with direct phone and Teams escalation to senior engineers.'
        },
        {
            question: 'Are we locked into long-term restrictive contracts?',
            answer: 'No. Our managed service agreements are structured on transparent annual or rolling terms designed around mutual trust and demonstrable value.'
        }
    ]
};

export const ManagedServicesPage: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default ManagedServicesPage;
