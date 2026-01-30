'use client';

import SectionNumber from '../ui/SectionNumber';

export default function Architecture() {
    const layers = [
        {
            label: 'Digital Displays',
            description: 'Devices across different locations',
            position: 'bottom'
        },
        {
            label: 'Content Management',
            description: 'Media and scheduling control',
            position: 'middle'
        },
        {
            label: 'API Layer',
            description: 'RESTful integration endpoints',
            position: 'middle'
        },
        {
            label: 'Distribution Network',
            description: 'Content delivery and caching',
            position: 'middle'
        },
        {
            label: 'Security Layer',
            description: 'Authentication and encryption',
            position: 'middle'
        },
        {
            label: 'AWS Cloud',
            description: 'Flexible and scalable hardware',
            position: 'top'
        },
    ];

    return (
        <section id="architecture" className="section relative overflow-hidden bg-obsidian/10">

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <SectionNumber number="04" label="Technical" />

                    <h2 className="h1 text-pure-white mb-6">
                        Technical Architecture
                    </h2>
                    <p className="body-large text-slate max-w-2xl mx-auto">
                        A robust, layered architecture designed for maximum scalability,
                        security, and performance.
                    </p>
                </div>

                {/* Architecture Diagram */}
                <div className="max-w-4xl mx-auto">
                    {/* VisualMAX Hub */}
                    <div className="relative mb-8">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-signal-blue to-signal-blue" />

                        <div className="relative z-10 w-48 mx-auto bg-signal-blue p-6 text-center">
                            <span className="font-display font-bold text-xl text-pure-white">VisualMAX</span>
                            <span className="block mono text-xs text-white/60 mt-1">PLATFORM HUB</span>
                        </div>
                    </div>

                    {/* Connection Line */}
                    <div className="flex justify-center mb-8">
                        <div className="w-px h-8 bg-signal-blue" />
                    </div>

                    {/* Architecture Layers */}
                    <div className="space-y-3">
                        {layers.map((layer, index) => (
                            <div key={layer.label} className="group relative">
                                {/* Connection Line */}
                                {index < layers.length - 1 && (
                                    <div className="absolute left-1/2 top-full w-px h-3 bg-zinc-700 z-0" />
                                )}

                                <div className="relative z-10 border border-zinc-800 bg-obsidian/80 hover:border-zinc-700 transition-all duration-300 group-hover:bg-zinc-900/50">
                                    <div className="grid grid-cols-12 items-center">
                                        {/* Layer Number */}
                                        <div className="col-span-2 p-4 border-r border-zinc-800">
                                            <span className="mono text-xs text-zinc-500">
                                                LAYER {String(layers.length - index).padStart(2, '0')}
                                            </span>
                                        </div>

                                        {/* Layer Content */}
                                        <div className="col-span-7 p-4 flex items-center gap-4">
                                            <h4 className="text-pure-white font-medium">{layer.label}</h4>
                                            <span className="hidden sm:inline-block h-px flex-1 bg-zinc-800 group-hover:bg-zinc-700 transition-colors" />
                                        </div>

                                        {/* Description */}
                                        <div className="col-span-3 p-4 border-l border-zinc-800">
                                            <span className="text-xs text-slate">{layer.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Flow */}
                    <div className="flex justify-center mt-8">
                        <div className="w-px h-8 bg-zinc-700" />
                    </div>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-4 px-8 py-4 border border-zinc-800 bg-obsidian">
                            <span className="w-3 h-3 border border-signal-blue flex items-center justify-center">
                                <span className="w-1.5 h-1.5 bg-signal-blue" />
                            </span>
                            <span className="mono text-sm text-zinc-400">Multiple Digital Displays</span>
                            <span className="w-3 h-3 border border-signal-blue flex items-center justify-center">
                                <span className="w-1.5 h-1.5 bg-signal-blue" />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Data Flow Indicators */}
                <div className="mt-16 pt-12 border-t border-zinc-800">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <span className="mono text-xs text-signal-blue block mb-2">PROTOCOL</span>
                            <span className="text-pure-white font-medium">HTTPS/WSS</span>
                        </div>
                        <div className="text-center">
                            <span className="mono text-xs text-signal-blue block mb-2">LATENCY</span>
                            <span className="text-pure-white font-medium">&lt;50ms</span>
                        </div>
                        <div className="text-center">
                            <span className="mono text-xs text-signal-blue block mb-2">ENCRYPTION</span>
                            <span className="text-pure-white font-medium">AES-256</span>
                        </div>
                        <div className="text-center">
                            <span className="mono text-xs text-signal-blue block mb-2">API</span>
                            <span className="text-pure-white font-medium">RESTful</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
