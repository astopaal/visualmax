'use client';

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
    icon?: ReactNode;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    icon,
    className = ''
}: ButtonProps) {
    const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    if (href) {
        return (
            <a href={href} className={`${baseClass} ${className}`}>
                {children}
                {icon && <span className="ml-2">{icon}</span>}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseClass} ${className}`}>
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}
