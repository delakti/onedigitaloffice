import React from 'react';

const Insights: React.FC = () => {
    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-12">Insights</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-surface rounded-2xl border border-white/10">
                    <span className="text-accent text-sm font-bold mb-4 block">LATEST</span>
                    <h2 className="text-2xl font-bold mb-4">The Future of Cloud Native Development</h2>
                    <p className="text-text-muted mb-6">Explore the trends shaping the next decade of software engineering...</p>
                    <a href="#" className="text-white hover:text-accent font-medium">Read Article →</a>
                </div>
                <div className="p-8 bg-surface rounded-2xl border border-white/10 opacity-50">
                    <h2 className="text-2xl font-bold mb-4">More Coming Soon</h2>
                </div>
            </div>
        </div>
    );
};

export default Insights;
