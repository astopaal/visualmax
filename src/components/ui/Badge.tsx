'use client';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'accent';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
    const variants = {
        default: 'bg-zinc-800 text-zinc-300 border-zinc-700',
        accent: 'bg-signal-blue/10 text-signal-blue border-signal-blue/30'
    };

    return (
        <span className={`
      inline-flex items-center px-3 py-1
      font-mono text-xs font-medium uppercase tracking-wider
      border ${variants[variant]}
    `}>
            {children}
        </span>
    );
}
