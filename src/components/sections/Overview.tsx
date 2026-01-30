'use client';

import SectionNumber from '../ui/SectionNumber';

export default function Overview() {
    return (
        <section id="overview" className="section relative bg-obsidian/10">
            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800" />

            <div className="container">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column - Section Header */}
                    <div className="lg:col-span-5">
                        <SectionNumber number="01" label="Overview" />

                        <h2 className="h1 text-pure-white mb-6">
                            Digital Signage,
                            <br />
                            <span className="text-signal-blue">Reimagined.</span>
                        </h2>

                        <p className="body-large text-slate leading-relaxed">
                            VisualMAX is a professional solution that enables businesses to manage
                            their digital content from a centralized platform and display it
                            simultaneously across multiple screens and locations.
                        </p>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-7 lg:pt-16">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* AWS Infrastructure */}
                            <div className="group p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 border border-signal-blue flex items-center justify-center">
                                        <svg className="w-6 h-6 text-signal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    </div>
                                    <span className="mono text-xs text-zinc-600">AWS</span>
                                </div>
                                <h3 className="h3 text-pure-white mb-3">Cloud Infrastructure</h3>
                                <p className="text-sm text-slate leading-relaxed">
                                    Enterprise-grade AWS infrastructure with 99.9% uptime SLA,
                                    auto-scaling, and multi-region redundancy.
                                </p>
                            </div>

                            {/* Real-time Updates */}
                            <div className="group p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 border border-signal-blue flex items-center justify-center">
                                        <svg className="w-6 h-6 text-signal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="mono text-xs text-zinc-600">INSTANT</span>
                                </div>
                                <h3 className="h3 text-pure-white mb-3">Real-time Updates</h3>
                                <p className="text-sm text-slate leading-relaxed">
                                    Distribute content to all locations within seconds.
                                    Remote management with instant synchronization.
                                </p>
                            </div>

                            {/* Brand Consistency */}
                            <div className="group p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 border border-signal-blue flex items-center justify-center">
                                        <svg className="w-6 h-6 text-signal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <span className="mono text-xs text-zinc-600">SECURE</span>
                                </div>
                                <h3 className="h3 text-pure-white mb-3">Brand Consistency</h3>
                                <p className="text-sm text-slate leading-relaxed">
                                    Maintain brand consistency across all locations.
                                    Centralized control with localized customization.
                                </p>
                            </div>

                            {/* Efficiency */}
                            <div className="group p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 border border-signal-blue flex items-center justify-center">
                                        <svg className="w-6 h-6 text-signal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <span className="mono text-xs text-zinc-600">+60%</span>
                                </div>
                                <h3 className="h3 text-pure-white mb-3">Accelerated Workflow</h3>
                                <p className="text-sm text-slate leading-relaxed">
                                    Enterprise customers accelerate their content management
                                    processes by up to 60% with VisualMAX.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Statement */}
                <div className="mt-20 pt-12 border-t border-zinc-800">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <p className="h3 text-zinc-400 font-normal leading-relaxed">
                                Our system runs on <span className="text-pure-white font-semibold">AWS cloud infrastructure</span>,
                                maximizing operational efficiency with <span className="text-pure-white font-semibold">real-time updates</span> and
                                <span className="text-pure-white font-semibold"> remote management</span> capabilities.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex justify-end">
                            <div className="flex items-center gap-4">
                                <span className="caption text-slate">Powered by</span>
                                <span className="font-display font-bold text-pure-white">AWS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
