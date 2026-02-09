'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import ContactModal from '../ui/ContactModal';

export default function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="demo" className="section relative overflow-hidden bg-zinc-900/10">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.15),transparent_70%)]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800" />

                {/* Corner Accents */}
                <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-signal-blue/30" />
                <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-signal-blue/30" />

                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Pre-heading */}
                        <span className="caption text-signal-blue block mb-6">Get Started</span>

                        {/* Main Heading */}
                        <h2 className="display text-pure-white mb-8">
                            Ready to Transform
                            <br />
                            Your Displays?
                        </h2>

                        {/* Description */}
                        <p className="body-large text-slate max-w-2xl mx-auto mb-12">
                            Accelerate your digital transformation with VisualMAX.
                            Contact us for detailed information and a demo of our enterprise solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                                Request a Demo
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                            <a
                                href="https://www.techmax.com.tr/contact.html"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="btn-secondary"
                            >
                                Contact Sales
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-0 max-w-xl mx-auto border border-zinc-800">
                            <div className="p-6 border-r border-zinc-800">
                                <div className="font-display text-2xl font-bold text-pure-white mb-1">48h</div>
                                <span className="text-xs text-slate">Go-Live</span>
                            </div>
                            <div className="p-6 border-r border-zinc-800">
                                <div className="font-display text-2xl font-bold text-pure-white mb-1">99.9%</div>
                                <span className="text-xs text-slate">Uptime</span>
                            </div>
                            <div className="p-6">
                                <div className="font-display text-2xl font-bold text-pure-white mb-1">24/7</div>
                                <span className="text-xs text-slate">Support</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-16 pt-12 border-t border-zinc-800">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                                <a
                                    href="mailto:visualmax@techmax.com.tr"
                                    className="flex items-center gap-3 text-zinc-400 hover:text-pure-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="mono text-sm">visualmax@techmax.com.tr</span>
                                </a>
                                <a
                                    href="tel:+902327001111"
                                    className="flex items-center gap-3 text-zinc-400 hover:text-pure-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="mono text-sm">+90 (232) 700 1111</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

