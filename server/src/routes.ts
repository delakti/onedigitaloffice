import { Router, Request, Response } from 'express';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export const router = Router();

// Zod Schemas
const leadSchema = z.object({
    name: z.string().min(2, 'Full name is required'),
    email: z.string().email('Valid business email is required'),
    company: z.string().min(1, 'Company name is required'),
    jobTitle: z.string().optional(),
    companySize: z.string().optional(),
    serviceInterest: z.union([z.array(z.string()), z.string()]).optional(),
    services: z.array(z.string()).optional(),
    budget: z.string().optional(),
    message: z.string().min(5, 'Please provide brief details of your project or requirements'),
    contactMethod: z.string().optional(),
    phone: z.string().optional(),
    consent: z.boolean().optional(),
    botField: z.string().optional(), // Honeypot
});

// Seed Data - Enterprise Microsoft & AI Solutions
const services = [
    { id: 1, slug: 'microsoft-365', title: 'Microsoft 365 Transformation', description: 'Architect, modernise, and secure your cloud workplace with expert guidance.', icon: 'Layers' },
    { id: 2, slug: 'sharepoint', title: 'SharePoint Online Solutions', description: 'High-performing enterprise intranets, document architecture, and SPFx customisation.', icon: 'FileText' },
    { id: 3, slug: 'microsoft-copilot', title: 'Microsoft Copilot Implementation', description: 'Licensing, data hygiene, governance, and organizational adoption of Copilot.', icon: 'Bot' },
    { id: 4, slug: 'ai-agents', title: 'AI Agents & Intelligent Automation', description: 'Deploy autonomous cognitive agents that automate multi-step operations.', icon: 'Cpu' },
    { id: 5, slug: 'power-platform', title: 'Microsoft Power Platform', description: 'Low-code enterprise applications, workflow orchestration, and Power BI dashboards.', icon: 'Workflow' },
    { id: 6, slug: 'enterprise-applications', title: 'Enterprise Application Engineering', description: 'Scalable .NET, React, TypeScript, and Azure cloud application architecture.', icon: 'Code' },
    { id: 7, slug: 'ai-governance', title: 'AI Governance & Security', description: 'Information protection, tenant boundaries, risk mitigation, and compliance frameworks.', icon: 'ShieldCheck' },
    { id: 8, slug: 'managed-services', title: 'Managed Microsoft 365 Services', description: 'Proactive tenant management, continuous optimisation, and senior engineering support.', icon: 'Zap' },
];

const caseStudies = [
    {
        id: 1,
        title: 'Central Government Records Modernisation',
        sector: 'Public Sector',
        challenge: 'Tens of millions of legacy records in disparate silos requiring compliant migration.',
        solution: 'SharePoint Online information architecture with automated classification and compliance labels.',
        outcomes: '70% reduction in search time, full statutory retention compliance.',
        techStack: ['SharePoint Online', 'Microsoft Graph', 'Azure Functions', 'PowerShell']
    },
    {
        id: 2,
        title: 'Tier-1 Financial Services Copilot Governance',
        sector: 'Financial Services',
        challenge: 'Strict regulatory oversight requiring zero oversharing prior to Microsoft Copilot rollout.',
        solution: 'Automated permission remediation, sensitivity labels, and tenant data hygiene policies.',
        outcomes: 'Safe enterprise deployment for 2,500+ users with zero unauthorized access incidents.',
        techStack: ['Microsoft Purview', 'Copilot for M365', 'Entra ID', 'Power BI']
    },
    {
        id: 3,
        title: 'Higher Education Digital Workplace & Portal',
        sector: 'Education',
        challenge: 'Disjointed faculty and student administrative workflows across multiple campuses.',
        solution: 'Unified SharePoint modern intranet with Power Platform automated approval chains.',
        outcomes: 'Processed 45,000+ administrative requests with 85% reduction in manual turnaround.',
        techStack: ['SharePoint Framework (SPFx)', 'Power Apps', 'Power Automate', 'React']
    }
];

// Routes Configuration
router.get('/services', (req: Request, res: Response) => {
    res.json(services);
});

router.get('/case-studies', (req: Request, res: Response) => {
    res.json(caseStudies);
});

router.post('/lead', async (req: Request, res: Response) => {
    try {
        const data = leadSchema.parse(req.body);

        // Anti-spam honeypot check: if botField is filled, silently discard
        if (data.botField && data.botField.trim() !== '') {
            return res.status(200).json({ success: true, message: 'Consultation request received.' });
        }

        // Send Email notification if SMTP configured
        if (process.env.SMTP_HOST) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || '587'),
                secure: process.env.SMTP_SECURE === 'true',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const interest = Array.isArray(data.serviceInterest) 
                ? data.serviceInterest.join(', ') 
                : (data.serviceInterest || data.services?.join(', ') || 'General Enquiry');

            await transporter.sendMail({
                from: '"OneDigitalOffice Portal" <no-reply@onedigitaloffice.com>',
                to: process.env.CONTACT_EMAIL || 'admin@onedigitaloffice.com',
                subject: `New Consultation Enquiry: ${data.name} (${data.company})`,
                text: `
Consultation Request Details:
-----------------------------
Full Name: ${data.name}
Business Email: ${data.email}
Company: ${data.company}
Job Title: ${data.jobTitle || 'N/A'}
Company Size: ${data.companySize || 'N/A'}
Preferred Contact: ${data.contactMethod || 'Email'}
Phone: ${data.phone || 'N/A'}
Service Interest: ${interest}
Estimated Budget: ${data.budget || 'Not specified'}

Project Description:
${data.message}
                `,
            });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Thank you. Your consultation request has been received. Our senior solution architect will review your brief and be in touch within 24 hours.' 
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, errors: error.issues });
        } else {
            console.error('Lead submission error:', error);
            return res.status(500).json({ success: false, message: 'An unexpected error occurred. Please contact us directly.' });
        }
    }
});
