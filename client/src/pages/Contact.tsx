import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
        services: [] as string[]
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('http://localhost:3000/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    if (status === 'success') {
        return (
            <div className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center container mx-auto px-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h1 className="text-4xl font-bold mb-4">Message Received</h1>
                    <p className="text-xl text-text-muted mb-8">Thank you for your interest. We'll be in touch shortly.</p>
                    <button onClick={() => setStatus('idle')} className="text-accent hover:text-white transition-colors">
                        Send another message
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's build something <br /> <span className="text-gradient">extraordinary.</span></h1>
                    <p className="text-xl text-text-muted">Tell us about your project.</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-surface/30 p-8 md:p-12 rounded-3xl border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Name</label>
                            <input
                                required
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-background border border-white/10 rounded-lg p-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-700"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Email</label>
                            <input
                                required
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-background border border-white/10 rounded-lg p-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-700"
                                placeholder="john@company.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Company</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                                className="w-full bg-background border border-white/10 rounded-lg p-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-700"
                                placeholder="Company Ltd."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Budget Range</label>
                            <select
                                value={formData.budget}
                                onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                className="w-full bg-background border border-white/10 rounded-lg p-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-text"
                            >
                                <option value="">Select Range</option>
                                <option value="10k-30k">$10k - $30k</option>
                                <option value="30k-50k">$30k - $50k</option>
                                <option value="50k-100k">$50k - $100k</option>
                                <option value="100k+">$100k+</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Interested Services</label>
                        <div className="flex flex-wrap gap-3">
                            {['App Development', 'Web Design', 'Cloud', 'Mobile', 'Video', 'Other'].map(service => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => handleServiceToggle(service)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${formData.services.includes(service)
                                            ? 'bg-accent border-accent text-black'
                                            : 'bg-transparent border-white/20 text-text-muted hover:border-white'
                                        }`}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Message</label>
                        <textarea
                            required
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            rows={6}
                            className="w-full bg-background border border-white/10 rounded-lg p-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-700 resize-none"
                            placeholder="Tell us more about your goals..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-5 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {status === 'submitting' ? 'Sending...' : (
                            <>Send Inquiry <Send size={18} /></>
                        )}
                    </button>

                    {status === 'error' && (
                        <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
