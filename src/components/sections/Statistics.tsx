'use client';

import SectionNumber from '../ui/SectionNumber';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Statistics() {
    const stats = [
        {
            value: 60,
            suffix: '%',
            label: 'Reduction in Operational Costs',
            description: 'Savings on manual content updates and printing costs'
        },
        {
            value: 6,
            suffix: 'x',
            label: 'Faster Content Updates',
            description: 'Faster deployment compared to traditional methods'
        },
        {
            value: 40,
            suffix: '%',
            label: 'Increase in Customer Engagement',
            description: 'Higher engagement rates with dynamic content'
        },
    ];

    const supportStats = [
        { value: '15', unit: 'min', label: 'Average Response Time' },
        { value: '81', unit: 'cities', label: 'Nationwide Coverage' },
        { value: '24/7', unit: '', label: 'Technical Support' },
    ];

    return (
        <section id="statistics" className="section bg-obsidian relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800" />
            <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-signal-blue/50 to-transparent" />

            <div className="container relative z-10">
                <div className="mb-20">
                    <SectionNumber number="05" label="Impact" />

                    <h2 className="h1 text-pure-white">
                        Business Impact
                        <br />
                        <span className="text-signal-blue">& ROI.</span>
                    </h2>
                </div>

                {/* Main Statistics */}
                <div className="grid lg:grid-cols-3 gap-0 border border-zinc-800">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`
                p-10 lg:p-12 relative group
                ${index !== 0 ? 'border-t lg:border-t-0 lg:border-l border-zinc-800' : ''}
              `}
                        >
                            {/* Number Badge */}
                            <span className="absolute top-6 right-6 mono text-xs text-zinc-600">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <div className="space-y-4">
                                <div className="font-display text-6xl lg:text-7xl font-bold text-pure-white tracking-tight">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>

                                <h3 className="h3 text-pure-white">{stat.label}</h3>

                                <p className="text-sm text-slate">{stat.description}</p>
                            </div>

                            {/* Hover Accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-signal-blue transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                {/* Support & Reliability */}
                <div className="mt-20 pt-16 border-t border-zinc-800">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="caption text-signal-blue block mb-4">Support & Reliability</span>
                            <h3 className="h2 text-pure-white mb-6">
                                24/7 Expert Support,
                                <br />
                                Nationwide Reach.
                            </h3>
                            <p className="text-slate leading-relaxed mb-8">
                                Our expert team is always available with an average response time of 15 minutes.
                                On-site installation and configuration services available in all provinces across Turkey.
                            </p>

                            {/* Features List */}
                            <div className="space-y-3">
                                {[
                                    'On-site installation across Turkey',
                                    'Monthly software updates',
                                    'Dedicated account manager',
                                    'Priority technical support'
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-signal-blue" />
                                        <span className="text-sm text-zinc-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Support Stats */}
                        <div className="grid grid-cols-3 gap-0">
                            {supportStats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`
                    p-6 text-center border border-zinc-800
                    ${index === 0 ? 'border-r-0' : ''}
                    ${index === 2 ? 'border-l-0' : ''}
                  `}
                                >
                                    <div className="font-display text-3xl lg:text-4xl font-bold text-pure-white mb-1">
                                        {stat.value}
                                        {stat.unit && <span className="text-lg text-zinc-500 ml-1">{stat.unit}</span>}
                                    </div>
                                    <span className="text-xs text-slate">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
