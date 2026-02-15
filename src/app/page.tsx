import Link from 'next/link';
import { BookOpen, Target, Dumbbell, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900">
          Master PTE Academic with <span className="text-blue-600">Structure & Strategy</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Your one-stop hub for exam mastery. track your progress, learn the core structures, and practice with high-frequency questions.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/learn" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 px-8">
            Start Learning
          </Link>
          <Link href="/practice" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-slate-100 hover:text-accent-foreground h-11 px-8 text-slate-900">
            Daily Practice
          </Link>
        </div>
      </section>

      {/* Daily Tracker Placeholder */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <h3 className="font-semibold text-blue-900">Daily Streak: Day 1</h3>
            <p className="text-sm text-blue-700">Consistency is key to scoring 79+. Keep it up!</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
            🔥
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/learn" className="block group">
          <Card className="h-full transition-shadow hover:shadow-md group-hover:border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-blue-600">
                <BookOpen className="text-blue-500" />
                The Basics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Master the 20 task types, understand the scoring algorithm, and learn the exam format inside out.
              </p>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                Explore Structure <ArrowRight size={16} className="ml-1" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/strategies" className="block group">
          <Card className="h-full transition-shadow hover:shadow-md group-hover:border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-teal-600">
                <Target className="text-teal-500" />
                Valid Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Access proven templates for Speaking & Writing, time management cheatsheets, and 79+ tips.
              </p>
              <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                Get Templates <ArrowRight size={16} className="ml-1" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/practice" className="block group">
          <Card className="h-full transition-shadow hover:shadow-md group-hover:border-indigo-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-indigo-600">
                <Dumbbell className="text-indigo-500" />
                Daily Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Curated resource lists, high-frequency question banks, and mock test planning.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
                Start Practicing <ArrowRight size={16} className="ml-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
