'use client';

import SectionNumber from '../ui/SectionNumber';

export default function Videowall() {
    return (
        <section className="section bg-obsidian relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal-blue/5 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Content */}
                    <div>
                        <SectionNumber number="—" label="Feature Highlight" />

                        <h2 className="h1 text-pure-white mb-6">
                            Offline Software
                            <br />
                            <span className="text-signal-blue">Videowall.</span>
                        </h2>

                        <p className="body-large text-slate mb-8">
                            VisualMAX provides full functionality even in environments without an
                            internet connection. Transform standard devices into professional
                            videowall systems.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Local Synchronization',
                                    description: 'Real-time device synchronization over the local network'
                                },
                                {
                                    title: 'Legacy Device Support',
                                    description: 'Integrate displays without loop-in/loop-out into a videowall system'
                                },
                                {
                                    title: 'Offline Operation',
                                    description: 'Content synchronization without internet dependency'
                                },
                            ].map((item, index) => (
                                <div key={item.title} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-signal-blue transition-colors">
                                        <span className="mono text-xs text-signal-blue">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-pure-white font-medium mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Videowall Visualization */}
                    <div className="relative">
                        <div className="aspect-[4/3] relative">
                            {/* Videowall Grid */}
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-zinc-900 border border-zinc-800 relative overflow-hidden group hover:border-signal-blue/50 transition-colors"
                                    >
                                        {/* Screen Content Simulation */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-signal-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* Screen Label */}
                                        <div className="absolute bottom-2 left-2">
                                            <span className="mono text-[10px] text-zinc-600">
                                                SCREEN {String(i + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        {/* Sync Indicator */}
                                        <div className="absolute top-2 right-2 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-signal-blue" />
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-signal-blue" />
                        </div>

                        {/* Status Bar */}
                        <div className="mt-6 flex items-center justify-between p-4 border border-zinc-800 bg-zinc-900/50">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="mono text-xs text-zinc-400">6 Screens Synchronized</span>
                            </div>
                            <span className="mono text-xs text-zinc-600">SYNC: 16ms</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
