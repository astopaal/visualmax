'use client';

import { useState, useEffect, useRef } from 'react';
import Button from './Button';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'demo'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Close on outside click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: '',
                interest: 'demo'
            });
            onClose();
        }, 2500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" />

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 animate-slideUp"
                style={{
                    animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                {/* Decorative corners */}
                <div className="absolute -top-px -left-px w-8 h-8 border-l-2 border-t-2 border-signal-blue" />
                <div className="absolute -top-px -right-px w-8 h-8 border-r-2 border-t-2 border-signal-blue" />
                <div className="absolute -bottom-px -left-px w-8 h-8 border-l-2 border-b-2 border-signal-blue" />
                <div className="absolute -bottom-px -right-px w-8 h-8 border-r-2 border-b-2 border-signal-blue" />

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                    <div>
                        <span className="caption text-signal-blue block mb-1">Contact Us</span>
                        <h3 className="font-display text-xl font-bold text-pure-white">Request a Demo</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-pure-white hover:bg-zinc-800 transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                {isSubmitted ? (
                    <div className="p-12 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-signal-blue/20 flex items-center justify-center animate-pulse">
                            <svg className="w-8 h-8 text-signal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h4 className="font-display text-xl font-bold text-pure-white mb-2">
                            Message Sent!
                        </h4>
                        <p className="text-slate">
                            Thank you for your interest. Our team will contact you shortly.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        {/* Interest Selection */}
                        <div>
                            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                                Interest
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { value: 'demo', label: 'Demo' },
                                    { value: 'pricing', label: 'Pricing' },
                                    { value: 'support', label: 'Support' }
                                ].map(option => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, interest: option.value }))}
                                        className={`py-2 px-4 text-sm font-medium transition-all ${formData.interest === option.value
                                                ? 'bg-signal-blue text-pure-white'
                                                : 'bg-zinc-800 text-zinc-400 hover:text-pure-white hover:bg-zinc-700'
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Name & Company */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-800/50 border border-zinc-700 px-4 py-3 text-pure-white placeholder-zinc-500 focus:border-signal-blue focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-800/50 border border-zinc-700 px-4 py-3 text-pure-white placeholder-zinc-500 focus:border-signal-blue focus:outline-none transition-colors"
                                    placeholder="Acme Inc."
                                />
                            </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-800/50 border border-zinc-700 px-4 py-3 text-pure-white placeholder-zinc-500 focus:border-signal-blue focus:outline-none transition-colors"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-800/50 border border-zinc-700 px-4 py-3 text-pure-white placeholder-zinc-500 focus:border-signal-blue focus:outline-none transition-colors"
                                    placeholder="+90 555 123 4567"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-zinc-800/50 border border-zinc-700 px-4 py-3 text-pure-white placeholder-zinc-500 focus:border-signal-blue focus:outline-none transition-colors resize-none"
                                placeholder="Tell us about your needs..."
                            />
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-signal-blue text-pure-white py-4 font-medium hover:bg-signal-blue/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}

                {/* Footer info */}
                {!isSubmitted && (
                    <div className="px-6 pb-6 pt-0">
                        <p className="text-xs text-zinc-500 text-center">
                            By submitting this form, you agree to our privacy policy.
                            We'll respond within 24 hours.
                        </p>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px) scale(0.98);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
