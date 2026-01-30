'use client';

import SectionNumber from '../ui/SectionNumber';

export default function Security() {
    const securityFeatures = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            ),
            title: 'Role-Based Access Management',
            description: 'Content control with customized authorization for user groups. Each department or branch can independently manage its own content.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Advanced Analytics',
            description: 'Content performance, screen health, and view statistics. Comprehensive dashboards for data-driven decision-making.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            title: 'Complete Audit Logs',
            description: 'Full logging and traceability of all system activities. Maintain compliance with detailed activity records.'
        },
    ];

    const awsFeatures = [
        { label: '99.9% Uptime', description: 'Uninterrupted service delivery' },
        { label: 'Auto-Scaling', description: 'Automatic capacity expansion' },
        { label: 'E2E Encryption', description: 'Data security at every layer' },
        { label: 'Multi-Region', description: 'Disaster recovery & backup' },
        { label: 'CI/CD Pipeline', description: 'Continuous deployment' },
        { label: '24/7 Monitoring', description: 'Real-time system alerts' },
    ];

    return (
        <section id="security" className="section relative overflow-hidden bg-zinc-900/10">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-signal-blue/5 to-transparent pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Enterprise Security */}
                    <div>
                        <SectionNumber number="03" label="Security" />

                        <h2 className="h1 text-pure-white mb-8">
                            Enterprise Security
                            <br />
                            <span className="text-signal-blue">& Control.</span>
                        </h2>

                        <div className="space-y-8">
                            {securityFeatures.map((feature, index) => (
                                <div key={index} className="group">
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 border border-zinc-800 flex items-center justify-center text-signal-blue group-hover:border-signal-blue transition-colors duration-300">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="h3 text-pure-white mb-2">{feature.title}</h3>
                                            <p className="text-slate text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - AWS Infrastructure */}
                    <div className="lg:pt-16">
                        <div className="border border-zinc-800 bg-zinc-900/50 p-8 lg:p-10">
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
                                <div>
                                    <span className="caption text-signal-blue block mb-2">Infrastructure</span>
                                    <h3 className="h3 text-pure-white">AWS Cloud Security</h3>
                                </div>
                                <div className="w-16 h-16 border border-zinc-700 flex items-center justify-center">
                                    <span className="font-display font-bold text-xl text-pure-white">AWS</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {awsFeatures.map((feature, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-start gap-3 mb-2">
                                            <div className="w-1.5 h-1.5 bg-signal-blue mt-2 flex-shrink-0" />
                                            <div>
                                                <span className="text-pure-white font-medium text-sm">{feature.label}</span>
                                                <p className="text-zinc-500 text-xs mt-0.5">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Status Bar */}
                            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="mono text-xs text-zinc-400">All Systems Operational</span>
                                </div>
                                <a href="#" className="mono text-xs text-signal-blue hover:underline">
                                    View Status Page →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
