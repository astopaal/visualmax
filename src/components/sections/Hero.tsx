'use client';

import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function Hero() {
    const metrics = [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '60%', label: 'Cost Reduction' },
        { value: '48h', label: 'Go-Live' },
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-signal-blue/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-signal-blue/10 blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-6 animate-fade-in-up" style={{ opacity: 0 }}>
                            <Badge variant="accent">Enterprise Digital Signage</Badge>

                            <h1 className="display text-pure-white">
                                Command
                                <br />
                                <span className="text-signal-blue">Every Screen.</span>
                            </h1>

                            <p className="body-large text-slate max-w-xl">
                                VisualMAX is a next-generation digital signage platform that enables
                                businesses to manage and synchronize content across thousands of
                                displays from a single, powerful dashboard.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-2"
                            style={{ opacity: 0 }}
                        >
                            <Button variant="primary" href="#demo">
                                Request Demo
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                            <Button variant="secondary" href="#overview">
                                Explore Platform
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div
                            className="pt-8 border-t border-zinc-800 animate-fade-in-up stagger-3"
                            style={{ opacity: 0 }}
                        >
                            <p className="caption text-slate mb-4">Trusted by enterprise leaders</p>
                            <div className="flex items-center gap-8 opacity-40">
                                {/* Placeholder logos - styled as text */}
                                {['BAYDÖNER', 'GEDİZ', 'AYDEM', 'PENTİ', 'İSHAKBEY', 'EKONOMİ ÜNİ.', 'İZDENİZ'].map((name) => (
                                    <span key={name} className="font-display font-bold text-sm text-zinc-400 tracking-wider">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Metrics Panel */}
                    <div className="lg:col-span-5">
                        <div
                            className="relative animate-fade-in-up stagger-4"
                            style={{ opacity: 0 }}
                        >
                            {/* Decorative Lines */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-signal-blue" />
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-signal-blue" />

                            <div className="bg-zinc-900/80 border border-zinc-800 p-8 space-y-6">
                                {/* Header */}
                                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                                    <span className="caption text-signal-blue">Platform Metrics</span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="mono text-xs text-zinc-400">LIVE</span>
                                    </span>
                                </div>

                                {/* Metrics */}
                                <div className="space-y-6">
                                    {metrics.map((metric, index) => (
                                        <div key={metric.label} className="group">
                                            <div className="flex items-end justify-between mb-2">
                                                <span className="font-display text-4xl lg:text-5xl font-bold text-pure-white tracking-tight">
                                                    {metric.value}
                                                </span>
                                                <span className="mono text-xs text-zinc-500">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate">{metric.label}</p>
                                            <div className="mt-2 h-px bg-zinc-800 group-hover:bg-signal-blue transition-colors duration-500" />
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="pt-4 border-t border-zinc-800">
                                    <p className="mono text-xs text-zinc-500">
                                        AWS Cloud Infrastructure • 24/7 Monitoring
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
