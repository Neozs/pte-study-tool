import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PracticePage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Practice Resources</h1>
                <p className="text-slate-600 mt-2">Curated links and plans to get you exam-ready.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {/* Main Content Area */}
                <div className="md:col-span-2 space-y-8">
                    {/* Top Resources */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <ExternalLink size={20} className="text-blue-600" /> Top Platforms
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-2"><CardTitle className="text-base">APEUni</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-xs text-slate-500 mb-3">Best for AI scoring and standard practice questions.</p>
                                    <Link href="https://apeuni.com" target="_blank" className="text-sm text-blue-600 hover:underline">Visit Website &rarr;</Link>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-2"><CardTitle className="text-base">E2Language</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-xs text-slate-500 mb-3">Premium courses and method-based learning.</p>
                                    <Link href="https://e2language.com" target="_blank" className="text-sm text-blue-600 hover:underline">Visit Website &rarr;</Link>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-2"><CardTitle className="text-base">Official Pearson</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-xs text-slate-500 mb-3">The gold standard for scored mock tests.</p>
                                    <Link href="https://pearsonpte.com" target="_blank" className="text-sm text-blue-600 hover:underline">Visit Website &rarr;</Link>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-2"><CardTitle className="text-base">Real PTE</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-xs text-slate-500 mb-3">Good source for recent exam questions.</p>
                                    <Link href="#" className="text-sm text-blue-600 hover:underline">Search Online &rarr;</Link>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Study Plan */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Calendar size={20} className="text-indigo-600" /> 4-Week Study Plan
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-start gap-4 p-4 bg-white border rounded-lg">
                                <div className="font-bold text-indigo-600 px-3 py-1 bg-indigo-50 rounded text-sm whitespace-nowrap">Week 1</div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Familiarization</h4>
                                    <p className="text-sm text-slate-600">Take a diagnostic mock test. Learn the exam format and scoring. Memorize the task types.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white border rounded-lg">
                                <div className="font-bold text-indigo-600 px-3 py-1 bg-indigo-50 rounded text-sm whitespace-nowrap">Week 2</div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Strategy Mastery</h4>
                                    <p className="text-sm text-slate-600">Memorize templates for Describe Image and Essay. Practice individual tasks untimed.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white border rounded-lg">
                                <div className="font-bold text-indigo-600 px-3 py-1 bg-indigo-50 rounded text-sm whitespace-nowrap">Week 3</div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Intensive Practice</h4>
                                    <p className="text-sm text-slate-600">Focus on weak areas (e.g., Reading Fill in Blanks). Do timed practice sessions.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white border rounded-lg">
                                <div className="font-bold text-indigo-600 px-3 py-1 bg-indigo-50 rounded text-sm whitespace-nowrap">Week 4</div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Mock Tests</h4>
                                    <p className="text-sm text-slate-600">Take 2-3 full scored mock tests. Review performance. Rest before exam day.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className="bg-yellow-50 border-yellow-200">
                        <CardHeader><CardTitle className="text-yellow-800">High Frequency</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm text-yellow-800 mb-4">
                                "High Frequency" or "Predicted" questions are real exam questions that repeat often.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500" /> Write from Dictation</li>
                                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500" /> Repeat Sentence</li>
                                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500" /> Describe Image</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900 text-white border-slate-800">
                        <CardHeader><CardTitle className="text-white">Daily Challenge</CardTitle></CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">Today's Task</div>
                                <div className="font-bold text-lg">Describe Image</div>
                            </div>
                            <p className="text-sm text-slate-300 mb-4">
                                Find a bar chart online. Record yourself describing it in 40 seconds using the template.
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2 rounded transition-colors">
                                Mark as Done
                            </button>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
