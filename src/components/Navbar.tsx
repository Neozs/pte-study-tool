import Link from 'next/link';
import { BookOpen, Target, Dumbbell } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="flex h-16 items-center px-4 container mx-auto">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700 mr-8">
                    <span className="bg-blue-600 text-white p-1 rounded">PTE</span>
                    <span>StudyTool</span>
                </Link>
                <div className="flex items-center space-x-4 lg:space-x-6 mx-6">
                    <Link href="/learn" className="text-sm font-medium transition-colors hover:text-blue-600 text-slate-600 flex items-center gap-1">
                        <BookOpen size={16} />
                        Learn
                    </Link>
                    <Link href="/strategies" className="text-sm font-medium transition-colors hover:text-blue-600 text-slate-600 flex items-center gap-1">
                        <Target size={16} />
                        Strategies
                    </Link>
                    <Link href="/practice" className="text-sm font-medium transition-colors hover:text-blue-600 text-slate-600 flex items-center gap-1">
                        <Dumbbell size={16} />
                        Practice
                    </Link>
                </div>
            </div>
        </nav>
    );
}
