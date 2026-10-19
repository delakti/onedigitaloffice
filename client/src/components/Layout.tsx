import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Layers,
    FileText,
    Bot,
    Cpu,
    Workflow,
    Code,
    ShieldCheck,
    Zap,
    Building2,
    GraduationCap,
    Landmark,
    Briefcase,
    Calendar,
    Mail,
    MapPin
} from 'lucide-react';

interface DropdownItem {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
}

const solutionsList: DropdownItem[] = [
    {
        name: 'Microsoft 365 Transformation',
        description: 'Modernise architecture, collaboration, and tenant security.',
        href: '/solutions/microsoft-365',
        icon: Layers
    },
    {
        name: 'SharePoint Online Solutions',
        description: 'Modern intranets, document management, and SPFx solutions.',
        href: '/solutions/sharepoint',
        icon: FileText
    },
    {
        name: 'Microsoft Copilot Implementation',
        description: 'Enterprise data hygiene, licensing, and user adoption.',
        href: '/solutions/microsoft-copilot',
        icon: Bot
    },
    {
        name: 'AI Agents & Automation',
        description: 'Custom cognitive agents automating complex operations.',
        href: '/solutions/ai-agents',
        icon: Cpu
    },
    {
        name: 'Microsoft Power Platform',
        description: 'Power Apps, Power Automate, and enterprise Power BI.',
        href: '/solutions/power-platform',
        icon: Workflow
    },
    {
        name: 'Enterprise Applications',
        description: 'Scalable .NET, React, TypeScript, and Azure cloud systems.',
        href: '/solutions/enterprise-applications',
        icon: Code
    },
    {
        name: 'AI Governance & Security',
        description: 'Information barriers, Purview labels, and risk frameworks.',
        href: '/solutions/ai-governance',
        icon: ShieldCheck
    },
    {
        name: 'Managed M365 Services',
        description: 'Proactive tenant management, support, and continuous optimisation.',
        href: '/managed-services',
        icon: Zap
    }
];

const industriesList: DropdownItem[] = [
    {
        name: 'Financial Services',
        description: 'Compliant records, data protection, and secure automation.',
        href: '/industries/financial-services',
        icon: Landmark
    },
    {
        name: 'Education & Universities',
        description: 'Student lifecycle systems, faculty portals, and collaboration.',
        href: '/industries/education',
        icon: GraduationCap
    },
    {
        name: 'Public Sector & Local Gov',
        description: 'Citizen workflows, secure SharePoint archives, and accessibility.',
        href: '/industries/public-sector',
        icon: Building2
    },
    {
        name: 'Professional Services',
        description: 'Knowledge retrieval, automated billing, and matter management.',
        href: '/industries/professional-services',
        icon: Briefcase
    }
];

const productsList: DropdownItem[] = [
    {
        name: 'ContractFlow AI',
        description: 'Intelligent contract lifecycle management for Microsoft 365.',
        href: '/products/contractflow-ai',
        icon: FileText,
        badge: 'Early Access'
    }
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
    
    const location = useLocation();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (name: string) => {
        setActiveDropdown(prev => (prev === name ? null : name));
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-text bg-background selection:bg-primary/30 selection:text-white">
            {/* 0. Accessible Skip Link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-xl focus:ring-2 focus:ring-white"
            >
                Skip to main content
            </a>

            {/* 1. Header & Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50">
                <nav
                    aria-label="Main Navigation"
                    className={`transition-all duration-300 ${
                        isScrolled
                            ? 'bg-background/90 backdrop-blur-md py-3 border-b border-border shadow-xl'
                            : 'bg-transparent py-5'
                    }`}
                >
                    <div className="container mx-auto px-6 flex items-center justify-between" ref={dropdownRef}>
                        {/* Logo */}
                        <Link 
                            to="/" 
                            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1 px-1.5"
                            aria-label="OneDigitalOffice - Home"
                        >
                            <span className="text-xl md:text-2xl font-heading font-extrabold tracking-tight text-white">
                                One<span className="text-accent">Digital</span>Office
                            </span>
                            <span className="hidden lg:inline-block text-[11px] font-medium text-text-dim border-l border-border pl-2.5 ml-1">
                                Microsoft 365 & AI
                            </span>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
                            {/* Solutions Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('solutions')}
                                    onMouseEnter={() => setActiveDropdown('solutions')}
                                    aria-expanded={activeDropdown === 'solutions'}
                                    className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                        location.pathname.startsWith('/solutions') || activeDropdown === 'solutions'
                                            ? 'text-white bg-white/5'
                                            : 'text-text-muted hover:text-white'
                                    }`}
                                >
                                    Solutions
                                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'solutions' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                            className="absolute top-full left-0 w-[540px] mt-2 p-4 rounded-2xl glass-panel shadow-2xl border border-border grid grid-cols-2 gap-2"
                                        >
                                            <div className="col-span-2 pb-2 mb-2 border-b border-border/50 flex justify-between items-center px-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-text-dim">Our Core Capabilities</span>
                                                <Link to="/solutions" className="text-xs text-primary hover:text-primary-hover flex items-center gap-1 font-semibold">
                                                    View All Solutions <ArrowRight size={12} />
                                                </Link>
                                            </div>
                                            {solutionsList.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    className="p-2.5 rounded-xl hover:bg-surface-elevated transition-colors flex items-start gap-3 group"
                                                >
                                                    <div className="p-2 rounded-lg bg-surface border border-border text-primary group-hover:text-accent group-hover:border-accent/40 transition-colors shrink-0">
                                                        <item.icon size={16} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors flex items-center gap-1.5">
                                                            {item.name}
                                                        </div>
                                                        <p className="text-xs text-text-muted line-clamp-1 mt-0.5">{item.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Industries Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('industries')}
                                    onMouseEnter={() => setActiveDropdown('industries')}
                                    aria-expanded={activeDropdown === 'industries'}
                                    className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                        location.pathname.startsWith('/industries') || activeDropdown === 'industries'
                                            ? 'text-white bg-white/5'
                                            : 'text-text-muted hover:text-white'
                                    }`}
                                >
                                    Industries
                                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'industries' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                            className="absolute top-full left-0 w-[420px] mt-2 p-4 rounded-2xl glass-panel shadow-2xl border border-border space-y-1.5"
                                        >
                                            <div className="pb-2 mb-2 border-b border-border/50 flex justify-between items-center px-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-text-dim">Tailored UK Sectors</span>
                                                <Link to="/industries" className="text-xs text-primary hover:text-primary-hover flex items-center gap-1 font-semibold">
                                                    All Industries <ArrowRight size={12} />
                                                </Link>
                                            </div>
                                            {industriesList.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    className="p-2.5 rounded-xl hover:bg-surface-elevated transition-colors flex items-start gap-3 group"
                                                >
                                                    <div className="p-2 rounded-lg bg-surface border border-border text-accent group-hover:border-accent/40 transition-colors shrink-0">
                                                        <item.icon size={16} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <p className="text-xs text-text-muted line-clamp-1 mt-0.5">{item.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Products Link / Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('products')}
                                    onMouseEnter={() => setActiveDropdown('products')}
                                    aria-expanded={activeDropdown === 'products'}
                                    className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                        location.pathname.startsWith('/products') || activeDropdown === 'products'
                                            ? 'text-white bg-white/5'
                                            : 'text-text-muted hover:text-white'
                                    }`}
                                >
                                    Products
                                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'products' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                            className="absolute top-full left-0 w-[360px] mt-2 p-4 rounded-2xl glass-panel shadow-2xl border border-border"
                                        >
                                            <div className="pb-2 mb-2 border-b border-border/50 flex justify-between items-center px-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-text-dim">Proprietary Software</span>
                                                <Link to="/products" className="text-xs text-primary hover:text-primary-hover flex items-center gap-1 font-semibold">
                                                    Overview <ArrowRight size={12} />
                                                </Link>
                                            </div>
                                            {productsList.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    className="p-3 rounded-xl hover:bg-surface-elevated transition-colors flex items-start gap-3 group"
                                                >
                                                    <div className="p-2 rounded-lg bg-surface border border-border text-accent-cyan group-hover:border-accent-cyan/40 transition-colors shrink-0">
                                                        <item.icon size={16} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                                            {item.name}
                                                            {item.badge && (
                                                                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-accent/20 text-accent border border-accent/30">
                                                                    {item.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-text-muted mt-1 leading-snug">{item.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Direct Links */}
                            <NavLink to="/managed-services">Managed Services</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/work">Case Studies</NavLink>
                            <NavLink to="/insights">Insights</NavLink>
                        </div>

                        {/* Action Buttons */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                to="/contact"
                                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                            >
                                Contact
                            </Link>
                            <Link
                                to="/book-consultation"
                                className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-hover transition-all flex items-center gap-2 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <Calendar size={15} />
                                Book Consultation
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="xl:hidden p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-24 pb-12 px-6 overflow-y-auto xl:hidden flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            {/* Mobile Solutions Accordion */}
                            <div className="border-b border-border pb-4">
                                <button
                                    onClick={() => setMobileExpandedSection(prev => prev === 'solutions' ? null : 'solutions')}
                                    className="w-full flex items-center justify-between text-xl font-heading font-semibold text-white py-1"
                                >
                                    <span>Solutions</span>
                                    <ChevronDown size={18} className={`transition-transform ${mobileExpandedSection === 'solutions' ? 'rotate-180' : ''}`} />
                                </button>
                                {mobileExpandedSection === 'solutions' && (
                                    <div className="mt-3 pl-3 space-y-3">
                                        <Link to="/solutions" className="block text-sm text-primary font-bold">
                                            View Solutions Hub →
                                        </Link>
                                        {solutionsList.map(item => (
                                            <Link
                                                key={item.href}
                                                to={item.href}
                                                className="block text-sm text-text-muted hover:text-white py-1"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Industries Accordion */}
                            <div className="border-b border-border pb-4">
                                <button
                                    onClick={() => setMobileExpandedSection(prev => prev === 'industries' ? null : 'industries')}
                                    className="w-full flex items-center justify-between text-xl font-heading font-semibold text-white py-1"
                                >
                                    <span>Industries</span>
                                    <ChevronDown size={18} className={`transition-transform ${mobileExpandedSection === 'industries' ? 'rotate-180' : ''}`} />
                                </button>
                                {mobileExpandedSection === 'industries' && (
                                    <div className="mt-3 pl-3 space-y-3">
                                        <Link to="/industries" className="block text-sm text-primary font-bold">
                                            View Industries Hub →
                                        </Link>
                                        {industriesList.map(item => (
                                            <Link
                                                key={item.href}
                                                to={item.href}
                                                className="block text-sm text-text-muted hover:text-white py-1"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Direct Mobile Links */}
                            <MobileNavLink to="/managed-services">Managed Services</MobileNavLink>
                            <MobileNavLink to="/products/contractflow-ai">ContractFlow AI (Preview)</MobileNavLink>
                            <MobileNavLink to="/about">About Us</MobileNavLink>
                            <MobileNavLink to="/work">Case Studies</MobileNavLink>
                            <MobileNavLink to="/insights">Insights</MobileNavLink>
                            <MobileNavLink to="/contact">Contact</MobileNavLink>
                        </div>

                        <div className="pt-8 border-t border-border space-y-3">
                            <Link
                                to="/book-consultation"
                                className="w-full bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-center"
                            >
                                <Calendar size={18} />
                                Book Discovery Consultation
                            </Link>
                            <p className="text-xs text-center text-text-dim">
                                Free 30-minute strategic consultation with our Senior Solutions Architect.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Main Landmark */}
            <main id="main-content" className="flex-grow pt-24 md:pt-28">
                {children}
            </main>

            {/* 3. Comprehensive Enterprise Footer */}
            <footer className="bg-surface py-16 md:py-24 border-t border-border relative overflow-hidden" role="contentinfo">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                        {/* Column 1: Company Info */}
                        <div className="lg:col-span-2 space-y-4">
                            <Link to="/" className="inline-block text-2xl font-heading font-extrabold text-white">
                                One<span className="text-accent">Digital</span>Office
                            </Link>
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Intelligent Workplaces. Automated Businesses.
                            </p>
                            <p className="text-sm text-text-muted max-w-md leading-relaxed">
                                Specialist UK technology consultancy helping organisations with 50–1,000 employees modernise their Microsoft 365 environments, automate complex workflows, and implement secure, governance-first AI systems.
                            </p>
                            <div className="pt-2 space-y-2 text-xs text-text-dim">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-primary shrink-0" />
                                    <span>London & South East, United Kingdom</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={14} className="text-primary shrink-0" />
                                    <a href="mailto:admin@onedigitaloffice.com" className="hover:text-white transition-colors">
                                        admin@onedigitaloffice.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Solutions */}
                        <div>
                            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
                                Solutions
                            </h3>
                            <ul className="space-y-2.5 text-sm text-text-muted">
                                <li><Link to="/solutions/microsoft-365" className="hover:text-white transition-colors">Microsoft 365</Link></li>
                                <li><Link to="/solutions/sharepoint" className="hover:text-white transition-colors">SharePoint Online</Link></li>
                                <li><Link to="/solutions/microsoft-copilot" className="hover:text-white transition-colors">Microsoft Copilot</Link></li>
                                <li><Link to="/solutions/ai-agents" className="hover:text-white transition-colors">AI Agents & Automation</Link></li>
                                <li><Link to="/solutions/power-platform" className="hover:text-white transition-colors">Power Platform</Link></li>
                                <li><Link to="/solutions/enterprise-applications" className="hover:text-white transition-colors">Enterprise Apps</Link></li>
                                <li><Link to="/solutions/ai-governance" className="hover:text-white transition-colors">AI Governance</Link></li>
                                <li><Link to="/managed-services" className="hover:text-white transition-colors">Managed Services</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Industries & Products */}
                        <div>
                            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
                                Industries
                            </h3>
                            <ul className="space-y-2.5 text-sm text-text-muted">
                                <li><Link to="/industries/financial-services" className="hover:text-white transition-colors">Financial Services</Link></li>
                                <li><Link to="/industries/education" className="hover:text-white transition-colors">Higher Education</Link></li>
                                <li><Link to="/industries/public-sector" className="hover:text-white transition-colors">Public Sector</Link></li>
                                <li><Link to="/industries/professional-services" className="hover:text-white transition-colors">Professional Services</Link></li>
                            </ul>

                            <h3 className="font-heading font-bold text-white mt-8 mb-4 text-sm uppercase tracking-wider">
                                Products
                            </h3>
                            <ul className="space-y-2.5 text-sm text-text-muted">
                                <li>
                                    <Link to="/products/contractflow-ai" className="hover:text-white transition-colors flex items-center gap-1.5">
                                        ContractFlow AI
                                        <span className="text-[9px] uppercase px-1 py-0.5 rounded bg-accent/20 text-accent font-bold">Preview</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Company & Engagement */}
                        <div>
                            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
                                Company
                            </h3>
                            <ul className="space-y-2.5 text-sm text-text-muted">
                                <li><Link to="/about" className="hover:text-white transition-colors">About OneDigitalOffice</Link></li>
                                <li><Link to="/work" className="hover:text-white transition-colors">Case Studies & Architecture</Link></li>
                                <li><Link to="/insights" className="hover:text-white transition-colors">Insights & Articles</Link></li>
                                <li><Link to="/book-consultation" className="hover:text-white transition-colors">Book Consultation</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            </ul>

                            <div className="mt-8 p-4 rounded-xl bg-surface-elevated border border-border">
                                <p className="text-xs font-semibold text-white mb-1">Looking for AI Guidance?</p>
                                <p className="text-xs text-text-muted mb-3">Request a structured 30-minute readiness discovery.</p>
                                <Link
                                    to="/book-consultation"
                                    className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"
                                >
                                    Get Started <ArrowRight size={12} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim">
                        <p>© {new Date().getFullYear()} OneDigitalOffice. All rights reserved. Registered in the United Kingdom.</p>
                        <div className="flex items-center gap-6">
                            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link to="/contact" className="hover:text-white transition-colors">Security & Compliance</Link>
                            <a href="#main-content" className="hover:text-white transition-colors">Back to top ↑</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

    return (
        <Link
            to={to}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive ? 'text-white bg-white/5 font-semibold' : 'text-text-muted hover:text-white'
            }`}
        >
            {children}
        </Link>
    );
};

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link 
            to={to} 
            className={`block text-xl font-heading font-semibold py-1 transition-colors ${
                isActive ? 'text-primary' : 'text-text-muted hover:text-white'
            }`}
        >
            {children}
        </Link>
    );
};
