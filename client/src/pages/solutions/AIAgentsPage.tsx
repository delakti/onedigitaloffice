import React from 'react';
import { Cpu } from 'lucide-react';
import { ServicePageTemplate, type ServicePageProps } from '../../components/ServicePageTemplate';

const pageData: ServicePageProps = {
    slug: 'ai-agents',
    title: 'Custom AI Agents & Intelligent Automation UK',
    tagline: 'Autonomous Cognitive Systems',
    headline: 'Deploy Private AI Agents that Automate Complex Multi-Step Operations',
    metaDescription: 'Specialist AI agent development in the UK. We engineer autonomous cognitive workflows operating strictly within your Microsoft tenant boundaries with zero data leakage.',
    keywords: 'AI agents UK, intelligent automation consultancy, custom AI agents Microsoft, private RAG architecture, Azure OpenAI enterprise',
    badgeIcon: Cpu,

    customerProblem: {
        headline: 'Simple chatbots give canned answers. Modern enterprises need agents that execute actual work.',
        description: 'First-generation generative AI tools stop at answering basic questions. When a business process requires reading a PDF contract, cross-referencing an ERP record, generating an approval chain in Teams, and updating a CRM, simple LLMs fail. Organisations need autonomous, error-correcting multi-agent architectures.',
        painPoints: [
            { title: 'Public AI Data Leakage', desc: 'Staff pasting sensitive client financials and proprietary algorithms into unvetted consumer AI chatbots.' },
            { title: 'Disconnected Action Loops', desc: 'Chatbots that generate text but cannot trigger database actions or interact with enterprise software.' },
            { title: 'Hallucination in Critical Tasks', desc: 'Unchecked models inventing answers when missing domain-specific context or verified sources.' },
            { title: 'Manual Cognitive Overload', desc: 'Senior professionals spending 3+ hours daily on document verification and multi-system data reconciliation.' }
        ]
    },

    businessOutcomes: [
        { metric: '80%', title: 'Reduction in Manual Processing', description: 'Automate repetitive cognitive tasks: document intake, contract validation, and customer triage.' },
        { metric: '100%', title: 'Zero Data Leakage Guarantee', description: 'All agent inference runs within your dedicated Azure / Microsoft 365 cloud tenant boundary.' },
        { metric: 'Sub-second', title: 'Accurate Citations', description: 'Private vector indexing with strict citation validation prevents model hallucinations.' }
    ],

    servicesIncluded: [
        {
            title: 'Private Enterprise RAG (Retrieval-Augmented Generation)',
            description: 'Engineering semantic search indexes over your private SharePoint documents, SQL databases, and internal knowledge bases.',
            deliverables: ['Vector database architecture (Azure AI Search)', 'Document chunking & embedding pipeline', 'Citation verification & strict grounding']
        },
        {
            title: 'Autonomous Multi-Agent Workflows',
            description: 'Deploying networks of specialized agents (e.g. Researcher, Reviewer, Auditor, Executor) that collaborate to complete complex tasks.',
            deliverables: ['Agent orchestration engine', 'Self-correcting feedback loops', 'Human-in-the-loop review checkpoints']
        },
        {
            title: 'Microsoft 365 & Line-of-Business Integrations',
            description: 'Enabling agents to read and write directly to Microsoft Teams, Outlook, Dynamics 365, SharePoint, and external REST APIs.',
            deliverables: ['Microsoft Graph agent connectors', 'Custom Teams bot interfaces', 'Secure API webhook integration']
        },
        {
            title: 'Agent Security, Auditing & Observability',
            description: 'Enterprise observability dashboard monitoring latency, token costs, prompt injection defense, and full audit trails.',
            deliverables: ['Telemetry & token usage monitoring', 'Prompt injection mitigation filters', 'Immutable decision audit logging']
        }
    ],

    technicalCapabilities: [
        { name: 'Azure OpenAI & Azure AI Foundry', description: 'Enterprise-grade GPT-4o, reasoning models, and embeddings hosted with strict EU/UK residency.', tags: ['Azure OpenAI', 'GPT-4o', 'UK Data Residency'] },
        { name: 'Azure AI Search', description: 'Hybrid vector search, semantic re-ranking, and access-controlled document retrieval.', tags: ['Vector Search', 'Hybrid RAG', 'Semantic Ranking'] },
        { name: 'Agent Frameworks (Semantic Kernel / LangGraph)', description: 'Production-ready orchestration frameworks supporting stateful workflows and tool execution.', tags: ['Semantic Kernel', 'LangGraph', 'Python/C#'] },
        { name: 'Microsoft Copilot Studio Extensions', description: 'Publishing custom agent actions directly into standard Microsoft Copilot user experiences.', tags: ['Copilot Studio', 'Power Platform', 'Actions'] },
        { name: 'Entra ID RBAC Security', description: 'Agents inherit the calling user’s exact permissions to prevent security elevation.', tags: ['Security Trimmed', 'Zero Trust', 'Entra ID'] },
        { name: 'Real-Time Streaming Webhooks', description: 'High-speed event-driven integration with ERP, CRM, and accounting engines.', tags: ['Event Hubs', 'Azure Functions', 'Cosmos DB'] }
    ],

    engagementProcess: [
        { step: '01', title: 'Agent Use-Case Discovery', timeline: 'Week 1', description: 'Identifying high-impact candidate workflows: assessing data availability, security boundaries, and expected ROI.' },
        { step: '02', title: 'Architecture & PoC Prototype', timeline: 'Weeks 2–3', description: 'Engineering a working prototype with private RAG grounding against your actual internal sample data.' },
        { step: '03', title: 'Enterprise Hardening & Integration', timeline: 'Weeks 4–6', description: 'Implementing Entra ID security trimming, prompt safety filters, human-in-the-loop triggers, and API connections.' },
        { step: '04', title: 'Production Deployment & Monitoring', timeline: 'Weeks 7–8', description: 'Deploying into your production Azure subscription with continuous logging, analytics, and operational handover.' }
    ],

    faqs: [
        {
            question: 'How do you guarantee that our confidential data won’t leak?',
            answer: 'We deploy AI agents exclusively within your dedicated Microsoft Azure subscription. Data is encrypted in transit and at rest. Your files never pass through public consumer endpoints and are never stored or used by OpenAI or Microsoft to train foundation models.'
        },
        {
            question: 'What is a multi-agent system and why is it better than a single prompt?',
            answer: 'Complex workflows require specialization. In a multi-agent system, one agent extracts data, another audits compliance against your rules, and a third prepares the client draft. By separating concerns, accuracy increases by over 90% and hallucinations are prevented through automated peer review.'
        },
        {
            question: 'Can agents interact with legacy on-premise software or custom SQL databases?',
            answer: 'Yes. By leveraging secure Azure On-Premises Data Gateways and hybrid networking, our agents can safely query legacy SQL databases, file systems, and internal ERPs without exposing them to the public internet.'
        },
        {
            question: 'Do you support Human-in-the-Loop (HITL) approval gates?',
            answer: 'Yes. In enterprise systems, high-consequence actions (e.g. issuing payments, approving contracts, or emailing clients) pause for a human reviewer to click "Approve" via an interactive Microsoft Teams card.'
        }
    ]
};

export const AIAgentsPage: React.FC = () => {
    return <ServicePageTemplate {...pageData} />;
};
export default AIAgentsPage;
