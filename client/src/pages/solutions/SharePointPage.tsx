import React from 'react';
import { FileText } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'sharepoint',
    title: 'SharePoint Online Solutions & Intranet Consultancy UK',
    tagline: 'Document & Knowledge Architecture',
    headline: 'High-Performing SharePoint Online Intranets and Modern Document Management',
    metaDescription: 'Specialist SharePoint Online consultancy in the UK. We architect intuitive company intranets, migrate complex file shares, and engineer custom SharePoint Framework (SPFx) solutions.',
    keywords: 'SharePoint consultant UK, SharePoint Online migration, modern SharePoint intranet, SPFx development, document management system, SharePoint governance',
    badgeIcon: FileText,

    customerProblem: {
        headline: 'Chaotic folder depths, version collisions, and unsearchable data paralyse staff.',
        description: 'Organisations frequently treat SharePoint like a traditional network drive, dumping unstructured files into deep subfolders. Without metadata or taxonomy, documents disappear into black holes, security permissions fragment, and employees spend hours every week searching for verified information.',
        painPoints: [
            { title: 'The 15-Folder Deep Abyss', desc: 'Critical corporate assets buried under nested directories with arbitrary naming conventions.' },
            { title: 'Dangerous Permission Drift', desc: 'Inherited permissions broken across thousands of folders, resulting in accidental data leaks.' },
            { title: 'Outdated, Ugly Intranets', desc: 'Static communication portals that staff avoid visiting, resulting in ignored announcements.' },
            { title: 'Failed Legacy Migrations', desc: 'Half-completed file share migrations that replicated 15 years of digital junk into the cloud.' }
        ]
    },

    businessOutcomes: [
        { metric: '75%', title: 'Faster Information Retrieval', description: 'Intuitive modern search refiners, managed metadata, and automated content classification.' },
        { metric: '100%', title: 'Permission Transparency', description: 'Eliminate broken folder permissions and implement clean, group-based access models.' },
        { metric: '3x', title: 'Intranet Engagement Lift', description: 'Visually stunning, responsive SharePoint portals that staff actively use as their daily digital hub.' }
    ],

    servicesIncluded: [
        {
            title: 'Modern Intranet Architecture & Design',
            description: 'Designing intuitive, engaging corporate intranets with personalised news feeds, department hubs, and employee resource directories.',
            deliverables: ['Information architecture & wireframes', 'Hub-and-spoke site structure', 'Branded, accessible communication sites']
        },
        {
            title: 'File Share & Legacy Server Migration',
            description: 'End-to-end migration from on-premise Windows file servers, network drives, and older SharePoint Server versions.',
            deliverables: ['Data audit & ROT (Redundant, Obsolete, Trivial) analysis', 'Automated SharePoint Migration Tool (SPMT) pipelines', 'Zero-downtime cutover']
        },
        {
            title: 'Metadata Taxonomy & Document Management',
            description: 'Replacing nested folders with clean content types, managed metadata term sets, and automated retention labels.',
            deliverables: ['Corporate taxonomy & term store setup', 'Custom document library templates', 'Automated versioning & check-in policies']
        },
        {
            title: 'Custom SPFx (SharePoint Framework) Development',
            description: 'Engineering bespoke, lightning-fast web parts and extensions tailored to your unique internal business requirements.',
            deliverables: ['Custom React + TypeScript SPFx web parts', 'Application Customizers (headers/footers)', 'Microsoft Teams tab integration']
        }
    ],

    technicalCapabilities: [
        { name: 'SharePoint Framework (SPFx)', description: 'Modern client-side development using React, TypeScript, and Microsoft Fluent UI.', tags: ['React', 'TypeScript', 'Fluent UI'] },
        { name: 'SharePoint Hub Architecture', description: 'Flexible modern site topologies that adapt without breaking URL structures.', tags: ['Hub Sites', 'Modern UI', 'Cross-site Search'] },
        { name: 'Managed Metadata Service (MMS)', description: 'Enterprise-wide term stores and hierarchical taxonomy for unified categorization.', tags: ['Taxonomy', 'Content Types', 'Term Store'] },
        { name: 'PnP PowerShell & CLI for M365', description: 'Automated provisioning scripts, template templating, and bulk metadata updates.', tags: ['PnP Core', 'DevOps', 'Site Provisioning'] },
        { name: 'Search Schema & KQL', description: 'Custom search refiners, result sources, and managed properties for instantaneous discovery.', tags: ['KQL', 'Search Refiners', 'Custom Result Types'] },
        { name: 'Microsoft Graph Integration', description: 'Surfacing SharePoint files, lists, and activity streams directly into custom applications.', tags: ['Graph REST', 'Delta Queries', 'Webhooks'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Information Architecture Discovery', timeline: 'Week 1', description: 'Reviewing current content stores, departmental workflows, naming rules, and security classifications.' },
        { step: '02', title: 'Site Structure & Prototype Design', timeline: 'Weeks 2–3', description: 'Creating interactive Figma wireframes and staging hub architectures for executive sign-off.' },
        { step: '03', title: 'Migration & Development Sprints', timeline: 'Weeks 4–6', description: 'Cleansing data, running automated migration batches, and developing custom SPFx web parts.' },
        { step: '04', title: 'Launch, Testing & Training', timeline: 'Weeks 7–8', description: 'Conducting site owner masterclasses, publishing user guides, and initiating intranet go-live.' }
    ],

    faqs: [
        {
            question: 'Why should we use metadata instead of folders in SharePoint?',
            answer: 'Folders create arbitrary silos where a document can only live in one place. Metadata tags allow files to be filtered, grouped, and searched dynamically across multiple dimensions (e.g. by Client, Year, Status, Department) while preventing broken URLs and character limit errors.'
        },
        {
            question: 'Can you migrate data from on-premise Windows file servers?',
            answer: 'Yes. We have executed multi-terabyte migrations from local file servers, legacy SharePoint 2013/2016/2019 environments, Box, and Google Drive, preserving timestamps and metadata.'
        },
        {
            question: 'Do custom SPFx web parts work in Microsoft Teams and Viva Connections?',
            answer: 'Yes! Modern SharePoint Framework (SPFx) solutions are cross-compatible across SharePoint Online, Microsoft Teams personal apps, and Microsoft Viva Connections mobile apps.'
        },
        {
            question: 'How do you handle sensitive permissions during an intranet build?',
            answer: 'We design a strict permission architecture based on Microsoft 365 security groups and Entra ID roles, eliminating unique folder permissions and ensuring confidential HR, Board, and Financial records remain strictly segregated.'
        }
    ]
};

export const SharePointPage: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default SharePointPage;
