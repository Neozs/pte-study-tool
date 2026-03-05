import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("rounded-xl border shadow-sm bg-white border-slate-200 text-slate-900", className)}>
            {children}
        </div>
    );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
    return <h3 className={cn("font-semibold leading-none tracking-tight text-slate-900", className)}>{children}</h3>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}
