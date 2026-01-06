import { Router, Request, Response } from 'express';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export const router = Router();

// Zod Schemas
const leadSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    company: z.string().optional(),
    budget: z.string().optional(),
    services: z.array(z.string()).optional(),
    message: z.string().min(1),
});

// Seed Data
const services = [
    { id: 1, title: 'Application Development', description: 'Custom software tailored to your business needs.', icon: 'Code' },
    { id: 2, title: 'Cloud App Development', description: 'Scalable cloud-native architectures.', icon: 'Cloud' },
    { id: 3, title: 'Database Development', description: 'Robust data modeling and optimization.', icon: 'Database' },
    { id: 4, title: 'Information Management', description: 'Organize and secure your enterprise data.', icon: 'FileText' },
    { id: 5, title: 'Mobile App Development', description: 'Native and cross-platform mobile solutions.', icon: 'Smartphone' },
    { id: 6, title: 'iOS & Android Dev', description: 'Dedicated development for Apple and Google ecosystems.', icon: 'Smartphone' },
    { id: 7, title: 'Web Design', description: 'Visual storytelling and user-centric interfaces.', icon: 'Layout' },
    { id: 8, title: 'Visual Design', description: 'Brand identity and graphic design assets.', icon: 'PenTool' },
    { id: 9, title: 'Videography', description: 'Professional video production.', icon: 'Video' },
    { id: 10, title: 'Video Editing', description: 'Post-production and motion graphics.', icon: 'Film' },
];

const caseStudies = [
    {
        id: 1,
        title: 'Global Logistics Cloud Migration',
        client: 'LogiGlobal',
        category: 'Cloud',
        problem: 'Legacy on-premise systems causing bottlenecks.',
        approach: 'Migrated to AWS with microservices architecture.',
        outcomes: '40% cost reduction, 99.99% uptime.',
        techStack: ['AWS', 'Docker', 'Kubernetes', 'Node.js'],
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 2,
        title: 'FinTech Mobile Banking App',
        client: 'NeoBank',
        category: 'Mobile',
        problem: 'Need for a secure, user-friendly mobile banking experience.',
        approach: 'Native iOS and Android apps with biometric security.',
        outcomes: '100k+ downloads in first month, 4.8 star rating.',
        techStack: ['Swift', 'Kotlin', 'Firebase', 'Spring Boot'],
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 3,
        title: 'E-commerce Database Modernization',
        client: 'ShopTrend',
        category: 'Database',
        problem: 'Slow query times during peak traffic.',
        approach: 'Sharded MongoDB cluster implementation.',
        outcomes: '5x faster query speeds, linear scalability.',
        techStack: ['MongoDB', 'Redis', 'Express', 'React'],
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef5487b67cf4?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 4,
        title: 'Corporate Knowledge Portal',
        client: 'InfoCorp',
        category: 'Information Management',
        problem: 'Siloed information across departments.',
        approach: 'SharePoint-based intranet with AI search.',
        outcomes: '30% increase in employee productivity.',
        techStack: ['SharePoint', 'React', 'Azure', 'OpenAI'],
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 5,
        title: 'Luxury Brand Redesign',
        client: 'Aura',
        category: 'Web Design',
        problem: 'Outdated website not reflecting brand premiumness.',
        approach: 'Minimalist, motion-heavy design system.',
        outcomes: '200% increase in lead conversion.',
        techStack: ['Framer Motion', 'React', 'TailwindCSS', 'Sanity'],
        imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 6,
        title: 'Tech Conference Coverage',
        client: 'DevCon',
        category: 'Videography',
        problem: 'Need high-quality recap videos for social media.',
        approach: 'On-site videography and same-day editing.',
        outcomes: '1M+ views across social platforms.',
        techStack: ['Premiere Pro', 'After Effects', 'SonyFX3'],
        imageUrl: 'https://images.unsplash.com/photo-1574717432729-32130e927c36?auto=format&fit=crop&q=80&w=1000'
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

        // TODO: Save to Firestore

        // Send Email (Mocked if no credentials)
        if (process.env.SMTP_HOST) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || '587'),
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail({
                from: '"One Digital Office" <no-reply@onedigitaloffice.com>',
                to: process.env.CONTACT_EMAIL || 'admin@onedigitaloffice.com', // Change to admin email
                subject: `New Lead: ${data.name}`,
                text: `
          Name: ${data.name}
          Email: ${data.email}
          Company: ${data.company}
          Budget: ${data.budget}
          Message: ${data.message}
          Services: ${data?.services?.join(', ')}
        `,
            });
        }

        res.status(200).json({ success: true, message: 'Inquiry received' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ success: false, errors: error.issues });
        } else {
            console.error(error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
});
