'use client';

interface SectionNumberProps {
    number: string;
    label?: string;
}

export default function SectionNumber({ number, label }: SectionNumberProps) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <span className="section-number">{number}</span>
            {label && (
                <>
                    <span className="w-12 h-px bg-zinc-700" />
                    <span className="caption text-slate">{label}</span>
                </>
            )}
        </div>
    );
}
