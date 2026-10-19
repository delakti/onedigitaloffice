import React from 'react';
import { Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ConsultationForm } from '../components/ConsultationForm';

export const Contact: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Contact OneDigitalOffice | Book a Technical Consultation"
                description="Contact OneDigitalOffice for Microsoft 365, SharePoint, Copilot, and AI automation consulting enquiries. Connect directly with our Senior Solutions Architect."
                keywords="Contact OneDigitalOffice, Microsoft 365 consultant contact, hire SharePoint specialist UK, Copilot discovery call"
                canonicalPath="/contact"
            />

            {/* Header */}
            <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Start Your Microsoft 365 & <br />
                        <span className="text-gradient">AI Transformation</span>
                    </h1>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
                        Whether you are planning a tenant modernisation, securing data prior to Microsoft Copilot, or automating complex workflows, we are ready to assist.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Direct Info & Booking Value */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="p-8 rounded-3xl glass-panel border border-border space-y-6">
                                <h2 className="text-2xl font-heading font-bold text-white">
                                    Direct Contact Information
                                </h2>
                                <p className="text-sm text-text-muted leading-relaxed">
                                    We value high-signal conversations. When you reach out, you communicate directly with a Principal Enterprise Architect, not an aggressive sales SDR.
                                </p>

                                <div className="space-y-4 pt-2 text-sm">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2.5 rounded-xl bg-surface border border-border text-primary shrink-0">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-text-dim block">
                                                Consultation Enquiries
                                            </span>
                                            <a href="mailto:admin@onedigitaloffice.com" className="text-white hover:text-primary transition-colors font-medium">
                                                admin@onedigitaloffice.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2.5 rounded-xl bg-surface border border-border text-primary shrink-0">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-text-dim block">
                                                Location & Service Area
                                            </span>
                                            <span className="text-white font-medium">
                                                London & South East, United Kingdom
                                            </span>
                                            <p className="text-xs text-text-dim mt-0.5">
                                                Delivering on-site and remote consulting nationwide.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2.5 rounded-xl bg-surface border border-border text-primary shrink-0">
                                            <Clock size={18} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-text-dim block">
                                                Response SLA
                                            </span>
                                            <span className="text-white font-medium">
                                                Within 24 Business Hours
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What to expect in a discovery session */}
                            <div className="p-8 rounded-3xl bg-surface-elevated/40 border border-border space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-accent" />
                                    What to Expect in Discovery
                                </h3>
                                <ul className="space-y-2.5 text-xs text-text-muted leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                        <span>30-minute structured technical discovery via Microsoft Teams.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                        <span>Review of your current Microsoft 365 licensing and security posture.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                        <span>Targeted recommendations on Copilot readiness, automation, or SharePoint.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                        <span>Zero-obligation estimation of project timelines and phases.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Full Consultation Form */}
                        <div className="lg:col-span-7">
                            <ConsultationForm
                                headline="Submit Your Project Brief"
                                subheadline="Complete the form below with your requirements. We will review your brief and send an invitation for a tailored 30-minute technical discovery session."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Contact;
