import React from 'react';
import { Calendar, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ConsultationForm } from '../components/ConsultationForm';

export const BookConsultationPage: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Book a Discovery Consultation | OneDigitalOffice"
                description="Schedule a complimentary 30-minute discovery consultation with our Principal Solutions Architect. Discuss your Microsoft 365, SharePoint, Copilot, or AI project."
                keywords="Book Microsoft 365 consultation, SharePoint discovery call, Copilot readiness consultation, hire enterprise architect UK"
                canonicalPath="/book-consultation"
            />

            <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <Calendar size={14} />
                        <span>Direct Architect Access</span>
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Book Your 30-Minute <br />
                        <span className="text-gradient">Discovery Consultation</span>
                    </h1>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
                        Reserve a high-value technical session directly with our Principal Solutions Architect. We review your current environment, answer technical questions, and propose realistic delivery roadmaps.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 rounded-2xl glass-panel border border-border text-center">
                            <Clock size={24} className="text-primary mx-auto mb-3" />
                            <h3 className="text-base font-bold text-white mb-1">30 Minutes Focused</h3>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Efficient, structured agenda respecting your busy schedule.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl glass-panel border border-border text-center">
                            <UserCheck size={24} className="text-accent mx-auto mb-3" />
                            <h3 className="text-base font-bold text-white mb-1">Principal Architect</h3>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Direct guidance from 23+ years enterprise engineering experience.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl glass-panel border border-border text-center">
                            <ShieldCheck size={24} className="text-accent-cyan mx-auto mb-3" />
                            <h3 className="text-base font-bold text-white mb-1">Zero Sales Pressure</h3>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Candid technical evaluation with zero obligation to proceed.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <ConsultationForm
                            headline="Reserve Your Consultation Slot"
                            subheadline="Provide your details below. We will review your requirements and immediately send a calendar invitation with available time slots."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default BookConsultationPage;
