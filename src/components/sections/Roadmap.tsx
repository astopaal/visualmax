'use client';

import SectionNumber from '../ui/SectionNumber';

export default function Roadmap() {
    const roadmapItems = [
        {
            status: 'current',
            quarter: 'NOW',
            title: 'Enterprise Platform',
            description: 'Full-featured digital signage management with AWS infrastructure, real-time sync, and enterprise security.',
            features: ['Multi-screen control', 'Campaign management', 'Analytics dashboard']
        },
        {
            status: 'upcoming',
            quarter: 'Q2 2026',
            title: 'AI-Based Content Optimization',
            description: 'Intelligent assistant that analyzes content performance using machine learning and provides automated recommendations.',
            features: ['Performance analysis', 'Auto-recommendations', 'Dynamic targeting']
        },
        {
            status: 'upcoming',
            quarter: 'Q3 2026',
            title: 'Predictive Analytics',
            description: 'Models that forecast campaign performance in advance. Data science-driven insights for ROI optimization.',
            features: ['Performance forecasting', 'Strategic insights', 'ROI optimization']
        },
        {
            status: 'planned',
            quarter: 'Q4 2026',
            title: 'CRM & Marketing Integration',
            description: 'Seamless integration with Salesforce, HubSpot, and other marketing tools. Reflect customer data on your digital signage.',
            features: ['Salesforce', 'HubSpot', 'Marketing automation']
        },
    ];

    return (
        <section id="roadmap" className="section bg-zinc-900 relative overflow-hidden">
            {/* Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 mb-16">
                    <div className="lg:col-span-6">
                        <SectionNumber number="06" label="Roadmap" />

                        <h2 className="h1 text-pure-white">
                            Future
                            <br />
                            <span className="text-signal-blue">Roadmap.</span>
                        </h2>
                    </div>
                    <div className="lg:col-span-6 lg:flex lg:items-end">
                        <p className="body-large text-slate">
                            Continuous innovation to keep you ahead. Here's what we're building next.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Desktop */}
                    <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-zinc-800" />

                    <div className="space-y-8">
                        {roadmapItems.map((item, index) => (
                            <div key={item.quarter} className="relative group">
                                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                                    {/* Timeline Marker */}
                                    <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                                        <div className={`
                      relative z-10 px-3 py-1.5 mono text-xs font-medium
                      ${item.status === 'current'
                                                ? 'bg-signal-blue text-pure-white'
                                                : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                                            }
                    `}>
                                            {item.quarter}
                                        </div>
                                        {/* Connector Dot */}
                                        <div className={`
                      hidden lg:block absolute left-[120px] top-1/2 -translate-y-1/2 w-3 h-3 -ml-1.5
                      ${item.status === 'current' ? 'bg-signal-blue' : 'bg-zinc-700'}
                    `} />
                                    </div>

                                    {/* Content */}
                                    <div className="lg:col-span-10">
                                        <div className={`
                      p-6 lg:p-8 border transition-all duration-300
                      ${item.status === 'current'
                                                ? 'border-signal-blue/50 bg-signal-blue/5'
                                                : 'border-zinc-800 hover:border-zinc-700'
                                            }
                    `}>
                                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                <h3 className="h3 text-pure-white">{item.title}</h3>
                                                <span className={`
                          mono text-xs px-2 py-1
                          ${item.status === 'current'
                                                        ? 'text-signal-blue border border-signal-blue/30'
                                                        : item.status === 'upcoming'
                                                            ? 'text-zinc-400 border border-zinc-700'
                                                            : 'text-zinc-500 border border-zinc-800'
                                                    }
                        `}>
                                                    {item.status === 'current' ? 'ACTIVE' : item.status === 'upcoming' ? 'IN DEVELOPMENT' : 'PLANNED'}
                                                </span>
                                            </div>

                                            <p className="text-slate mb-6">{item.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {item.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="mono text-xs text-zinc-500 bg-zinc-800/50 px-3 py-1"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
