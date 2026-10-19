import React from 'react';
import { Lock } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="w-full bg-background min-h-screen text-text">
            <SEO
                title="Privacy Policy | OneDigitalOffice"
                description="OneDigitalOffice UK GDPR compliant privacy policy outlining how personal information is collected, processed, and safeguarded."
                keywords="OneDigitalOffice privacy policy, UK GDPR compliance, data protection policy"
                canonicalPath="/privacy-policy"
            />

            <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-border/40 overflow-hidden text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <Lock size={14} />
                        <span>Data Protection & Privacy</span>
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-text-muted">
                        Last updated: October 2026 • Compliant with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-3xl space-y-10 text-sm leading-relaxed text-text-muted">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white">1. Introduction</h2>
                        <p>
                            OneDigitalOffice ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy sets out how we collect, use, and protect any personal information that you provide when using our website (<a href="https://www.onedigitaloffice.com" className="text-primary hover:underline">https://www.onedigitaloffice.com</a>) or engaging with our consulting services.
                        </p>
                        <p>
                            OneDigitalOffice operates as the Data Controller in respect of personal data submitted via our website in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white">2. Information We Collect</h2>
                        <p>We may collect and process the following information when you submit an enquiry, book a consultation, or interact with our website:</p>
                        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
                            <li><strong className="text-white">Identity Data:</strong> Full name, job title, and company name.</li>
                            <li><strong className="text-white">Contact Data:</strong> Business email address, telephone number, and preferred contact method.</li>
                            <li><strong className="text-white">Project Information:</strong> Company size, estimated budget range, and project requirements.</li>
                            <li><strong className="text-white">Technical Data:</strong> Internet protocol (IP) address, browser type, operating system, and referral paths collected via basic server analytics.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white">3. How We Use Your Information</h2>
                        <p>We process your personal information strictly for legitimate business purposes:</p>
                        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
                            <li>To respond to your consultation requests, project briefs, and technical enquiries.</li>
                            <li>To assess project suitability and deliver preliminary architectural recommendations.</li>
                            <li>To maintain the security, reliability, and spam-prevention of our website.</li>
                            <li>To comply with statutory legal, regulatory, and accounting obligations in the United Kingdom.</li>
                        </ul>
                        <p>
                            We will never sell, rent, or trade your personal data to third parties for marketing or advertising purposes.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white">4. Lawful Basis for Processing</h2>
                        <p>Under the UK GDPR, our lawful bases for processing your information are:</p>
                        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
                            <li><strong className="text-white">Legitimate Interests:</strong> Processing necessary for us to respond to your commercial business enquiries and provide consulting services.</li>
                            <li><strong className="text-white">Consent:</strong> Explicit consent provided when checking our privacy acknowledgment checkbox on forms.</li>
                            <li><strong className="text-white">Contractual Necessity:</strong> Where processing is required to enter into or perform a consulting contract.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white">5. Data Retention & Security</h2>
                        <p>
                            We retain consultation enquiries only for as long as necessary to fulfil the purposes for which they were collected or to comply with statutory accounting requirements. We implement appropriate technical and organizational measures (including TLS encryption, helmet security headers, and rate limiting) to protect your data against unauthorized access, alteration, or disclosure.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white">6. Your Rights Under UK GDPR</h2>
                        <p>You have the following rights under UK data protection legislation:</p>
                        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
                            <li>The right to request access to your personal data.</li>
                            <li>The right to request correction of inaccurate data.</li>
                            <li>The right to request erasure of your data ("right to be forgotten").</li>
                            <li>The right to object to or restrict processing of your data.</li>
                            <li>The right to withdraw consent at any time.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white">7. Contact & Privacy Inquiries</h2>
                        <p>
                            If you have questions regarding this Privacy Policy or wish to exercise your statutory rights, please contact our Data Protection lead at:
                        </p>
                        <div className="p-4 rounded-xl bg-surface-elevated border border-border text-xs text-white">
                            <p className="font-bold">OneDigitalOffice</p>
                            <p className="text-text-muted mt-1">London & South East, United Kingdom</p>
                            <p className="text-text-muted">Email: <a href="mailto:admin@onedigitaloffice.com" className="text-primary hover:underline">admin@onedigitaloffice.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default PrivacyPolicyPage;
