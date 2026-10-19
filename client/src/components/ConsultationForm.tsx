import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Calendar, ShieldCheck, Clock } from 'lucide-react';

interface ConsultationFormProps {
    initialService?: string;
    headline?: string;
    subheadline?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
    initialService,
    headline = 'Book a 30-Minute Discovery Consultation',
    subheadline = 'Speak directly with our Principal Enterprise Architect to review your Microsoft 365 architecture, AI readiness, and workflow automation goals.'
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        companySize: '50-250',
        serviceInterest: initialService ? [initialService] : [] as string[],
        budget: '£10k - £25k',
        contactMethod: 'Teams / Video Call',
        phone: '',
        message: '',
        consent: false,
        botField: '' // Honeypot
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const servicesList = [
        'Microsoft 365 Transformation',
        'SharePoint Online Solutions',
        'Microsoft Copilot Implementation',
        'AI Agents & Automation',
        'Microsoft Power Platform',
        'Enterprise Applications',
        'AI Governance & Security',
        'Managed Services'
    ];

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!formData.name.trim() || formData.name.trim().length < 2) {
            errs.name = 'Please enter your full name';
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            errs.email = 'Please provide a valid business email address';
        }
        if (!formData.company.trim()) {
            errs.company = 'Company name is required';
        }
        if (!formData.message.trim() || formData.message.trim().length < 5) {
            errs.message = 'Please provide brief details of your objectives or challenges';
        }
        if (!formData.consent) {
            errs.consent = 'You must acknowledge the privacy notice to proceed';
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            serviceInterest: prev.serviceInterest.includes(service)
                ? prev.serviceInterest.filter(s => s !== service)
                : [...prev.serviceInterest, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Anti-spam honeypot
        if (formData.botField) {
            setStatus('success');
            return;
        }

        if (!validate()) {
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            // Relative endpoint works seamlessly on Vercel and local Express proxy
            const apiUrl = import.meta.env.VITE_API_URL 
                ? `${import.meta.env.VITE_API_URL}/api/lead` 
                : '/api/lead';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'There was an issue processing your submission. Please try again.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Unable to connect to the consultation server. Please email us at admin@onedigitaloffice.com.');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-8 md:p-14 rounded-3xl border border-primary/30 text-center max-w-2xl mx-auto"
            >
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mx-auto mb-6">
                    <CheckCircle2 size={36} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-4">
                    Consultation Request Confirmed
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry regarding <strong className="text-white">{formData.company}</strong> has been received by our senior architecture team.
                </p>
                <div className="p-4 rounded-2xl bg-surface-elevated border border-border text-left mb-8 space-y-2 text-sm text-text-muted">
                    <div className="flex items-center gap-2 text-white font-medium">
                        <Clock size={16} className="text-accent" />
                        <span>What happens next:</span>
                    </div>
                    <p className="text-xs text-text-dim">
                        1. A Principal Architect reviews your tenant and technical requirements.<br />
                        2. You will receive an invitation email within 24 hours to select your preferred 30-minute slot.<br />
                        3. We conduct a zero-obligation, high-value technical discovery session.
                    </p>
                </div>
                <button
                    onClick={() => {
                        setStatus('idle');
                        setFormData({
                            name: '',
                            email: '',
                            company: '',
                            jobTitle: '',
                            companySize: '50-250',
                            serviceInterest: [],
                            budget: '£10k - £25k',
                            contactMethod: 'Teams / Video Call',
                            phone: '',
                            message: '',
                            consent: false,
                            botField: ''
                        });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all text-sm"
                >
                    Submit Another Request
                </button>
            </motion.div>
        );
    }

    return (
        <div className="glass-panel p-6 sm:p-10 md:p-12 rounded-3xl border border-border relative overflow-hidden">
            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-3 text-xs font-bold uppercase tracking-wider">
                    <Calendar size={13} />
                    <span>Discovery Consultation</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    {headline}
                </h2>
                <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    {subheadline}
                </p>
            </div>

            {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-sm text-red-200">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-400" />
                    <div>
                        <p className="font-semibold">Submission Notice</p>
                        <p className="text-xs text-red-300/90 mt-0.5">{errorMessage}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot field (hidden from genuine users) */}
                <div className="hidden" aria-hidden="true">
                    <label htmlFor="botField">Leave this field blank</label>
                    <input
                        type="text"
                        id="botField"
                        name="botField"
                        value={formData.botField}
                        onChange={e => setFormData({ ...formData, botField: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={e => {
                                setFormData({ ...formData, name: e.target.value });
                                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                                errors.name ? 'border-red-500/60' : 'border-border'
                            }`}
                        />
                        {errors.name && <p id="name-error" className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Business Email <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            placeholder="e.g. s.jenkins@enterprise.co.uk"
                            value={formData.email}
                            onChange={e => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                                errors.email ? 'border-red-500/60' : 'border-border'
                            }`}
                        />
                        {errors.email && <p id="email-error" className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                </div>

                {/* Row 2: Company Name, Job Title & Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Company / Organisation <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="company"
                            required
                            aria-invalid={!!errors.company}
                            aria-describedby={errors.company ? 'company-error' : undefined}
                            placeholder="e.g. Apex Legal LLP"
                            value={formData.company}
                            onChange={e => {
                                setFormData({ ...formData, company: e.target.value });
                                if (errors.company) setErrors(prev => ({ ...prev, company: '' }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                                errors.company ? 'border-red-500/60' : 'border-border'
                            }`}
                        />
                        {errors.company && <p id="company-error" className="text-xs text-red-400 mt-1">{errors.company}</p>}
                    </div>

                    <div>
                        <label htmlFor="jobTitle" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="jobTitle"
                            placeholder="e.g. Head of IT / COO"
                            value={formData.jobTitle}
                            onChange={e => setFormData({ ...formData, jobTitle: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="companySize" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Organisation Size
                        </label>
                        <select
                            id="companySize"
                            value={formData.companySize}
                            onChange={e => setFormData({ ...formData, companySize: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                            <option value="1-49">1 - 49 employees</option>
                            <option value="50-100">50 - 100 employees</option>
                            <option value="101-250">101 - 250 employees</option>
                            <option value="251-500">251 - 500 employees</option>
                            <option value="501-1000">501 - 1,000 employees</option>
                            <option value="1000+">1,000+ employees</option>
                        </select>
                    </div>
                </div>

                {/* Service Interest Multi-select Pills */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-2">
                        Primary Areas of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {servicesList.map(service => {
                            const selected = formData.serviceInterest.includes(service);
                            return (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => handleServiceToggle(service)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                        selected
                                            ? 'bg-primary text-white border border-primary shadow-sm'
                                            : 'bg-surface border border-border text-text-muted hover:text-white hover:border-border-hover'
                                    }`}
                                >
                                    {service}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Row 3: Estimated Budget & Preferred Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Estimated Budget
                        </label>
                        <select
                            id="budget"
                            value={formData.budget}
                            onChange={e => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                            <option value="Under £10k">Under £10,000</option>
                            <option value="£10k - £25k">£10,000 - £25,000</option>
                            <option value="£25k - £50k">£25,000 - £50,000</option>
                            <option value="£50k - £100k">£50,000 - £100,000</option>
                            <option value="£100k+">£100,000+</option>
                            <option value="Exploring Options">Exploring Options</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="contactMethod" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Preferred Contact
                        </label>
                        <select
                            id="contactMethod"
                            value={formData.contactMethod}
                            onChange={e => setFormData({ ...formData, contactMethod: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                            <option value="Teams / Video Call">Teams / Video Call</option>
                            <option value="Email">Email</option>
                            <option value="Phone Call">Phone Call</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                            Phone (Optional)
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="e.g. +44 20 7946 0991"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-text-dim mb-1.5">
                        Project Description & Objectives <span className="text-red-400">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        required
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="Tell us about your current Microsoft 365 setup, upcoming initiatives, pain points, or automation objectives..."
                        value={formData.message}
                        onChange={e => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                            errors.message ? 'border-red-500/60' : 'border-border'
                        }`}
                    />
                    {errors.message && <p id="message-error" className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Consent & Privacy */}
                <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={e => {
                                setFormData({ ...formData, consent: e.target.checked });
                                if (errors.consent) setErrors(prev => ({ ...prev, consent: '' }));
                            }}
                            className="mt-1 h-4 w-4 rounded border-border bg-surface text-primary focus:ring-primary accent-primary"
                        />
                        <span className="text-xs text-text-muted leading-relaxed">
                            I understand that OneDigitalOffice will process my details solely to respond to this consultation enquiry in accordance with UK GDPR. No data will be shared with third parties.
                        </span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-400 mt-1 pl-7">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                        {status === 'submitting' ? (
                            <span>Submitting Request...</span>
                        ) : (
                            <>
                                <span>Book 30-Minute Consultation</span>
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                    <p className="text-[11px] text-text-dim mt-3 flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-accent" />
                        Senior architect response within 24 hours. No sales pressure, strictly technical and strategic guidance.
                    </p>
                </div>
            </form>
        </div>
    );
};
