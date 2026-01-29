'use client';

import SectionNumber from '../ui/SectionNumber';

export default function Features() {
    const features = [
        {
            number: '01',
            title: 'Advanced Campaign Management',
            description: 'Time-based content scheduling and automated campaign cycles. Create, schedule, and deploy content with precision timing across your entire network.',
            capabilities: ['Scheduling', 'Automation', 'Templates']
        },
        {
            number: '02',
            title: 'Multi-Screen Control',
            description: 'Manage and synchronize thousands of screens from a single platform. Real-time monitoring and control of your entire display network.',
            capabilities: ['Sync', 'Monitor', 'Control']
        },
        {
            number: '03',
            title: 'Instant Updates',
            description: 'Distribute content to all locations within seconds. Push updates globally with zero downtime and instant propagation.',
            capabilities: ['Real-time', 'Global', 'Zero Downtime']
        },
        {
            number: '04',
            title: 'Software Videowall',
            description: 'Videowall support for devices without loop-in/loop-out capability. Transform standard displays into synchronized videowall systems.',
            capabilities: ['Sync', 'Offline', 'Legacy Support']
        },
    ];

    return (
        <section id="features" className="section bg-zinc-900 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="container relative z-10">
                <div className="mb-16">
                    <SectionNumber number="02" label="Core Features" />

                    <div className="grid lg:grid-cols-2 gap-8 items-end">
                        <h2 className="h1 text-pure-white">
                            Built for
                            <br />
                            <span className="text-signal-blue">Enterprise Scale.</span>
                        </h2>
                        <p className="body-large text-slate lg:max-w-md lg:ml-auto">
                            Every feature designed for reliability, security, and seamless
                            integration with your existing infrastructure.
                        </p>
                    </div>
                </div>

                {/* Features List */}
                <div className="space-y-0">
                    {features.map((feature, index) => (
                        <div
                            key={feature.number}
                            className="group border-t border-zinc-800 py-10 lg:py-12"
                        >
                            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                                {/* Number */}
                                <div className="lg:col-span-1">
                                    <span className="mono text-sm text-signal-blue">{feature.number}</span>
                                </div>

                                {/* Title */}
                                <div className="lg:col-span-4">
                                    <h3 className="h3 text-pure-white group-hover:text-signal-blue transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="lg:col-span-5">
                                    <p className="text-slate leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Capabilities */}
                                <div className="lg:col-span-2 flex flex-wrap lg:flex-col gap-2 lg:items-end">
                                    {feature.capabilities.map((cap) => (
                                        <span
                                            key={cap}
                                            className="mono text-xs text-zinc-500 border border-zinc-700 px-2 py-1"
                                        >
                                            {cap}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Line */}
                            <div className="mt-10 lg:mt-12 h-px bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-signal-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Border */}
                <div className="border-t border-zinc-800" />
            </div>
        </section>
    );
}
