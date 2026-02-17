import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LearnPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">PTE Core Structure & Scoring</h1>
                <p className="text-slate-600 mt-2">Everything you need to know about the exam format and how to score high.</p>
            </div>

            {/* Overview Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Exam Overview</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">~2 Hours</div>
                        <div className="text-sm text-slate-500">Total Duration</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">3 Parts</div>
                        <div className="text-sm text-slate-500">Speaking/Writing, Reading, Listening</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">20 Tasks</div>
                        <div className="text-sm text-slate-500">Distinct Question Types</div>
                    </div>
                </CardContent>
            </Card>

            {/* Tabs / Sections */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Part 1 */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-blue-700 border-b pb-2">Part 1: Speaking & Writing</h2>
                    <p className="text-sm text-slate-500 italic">54 - 67 Minutes</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Read Aloud</span> (Reading, Speaking)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Repeat Sentence</span> (Listening, Speaking)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Describe Image</span> (Speaking)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Re-tell Lecture</span> (Listening, Speaking)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Answer Short Question</span> (Listening, Speaking)</li>
                        <li><hr className="my-2" /></li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Summarize Written Text</span> (Reading, Writing)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Write Essay</span> (Writing)</li>
                    </ul>
                </div>

                {/* Part 2 */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-teal-700 border-b pb-2">Part 2: Reading</h2>
                    <p className="text-sm text-slate-500 italic">29 - 30 Minutes</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Fill in the Blanks (R&W)</span> (Reading, Writing)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Multiple Choice, Multiple</span> (Reading)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Re-order Paragraphs</span> (Reading)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Fill in the Blanks (Drag/Drop)</span> (Reading)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Multiple Choice, Single</span> (Reading)</li>
                    </ul>
                </div>

                {/* Part 3 */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-indigo-700 border-b pb-2">Part 3: Listening</h2>
                    <p className="text-sm text-slate-500 italic">30 - 43 Minutes</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Summarize Spoken Text</span> (Listening, Writing)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Multiple Choice, Multiple</span> (Listening)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Fill in the Blanks</span> (Listening, Writing)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Highlight Correct Summary</span> (Listening, Reading)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Multiple Choice, Single</span> (Listening)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Select Missing Word</span> (Listening)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Highlight Incorrect Words</span> (Listening, Reading)</li>
                        <li className="flex items-start gap-2"><span className="font-medium text-slate-900">Write from Dictation</span> (Listening, Writing)</li>
                    </ul>
                </div>
            </div>

            <Card className="bg-slate-50 border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="p-1.5 bg-blue-100 text-blue-700 rounded-md">🇦🇺</span>
                        Australian Visa Requirements (2025 Updates)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-slate-700 text-sm">
                        Requirements updated <strong>August 7, 2025</strong>. Ensure your scores meet these minimums for visa eligibility.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 className="font-bold text-slate-900 border-b pb-1">Student Visa (500)</h4>
                            <div className="flex justify-between text-sm">
                                <span>Minimum Overall</span>
                                <span className="font-bold text-blue-700">47</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>With 10 wks ELICOS</span>
                                <span className="font-bold text-blue-700">36</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-bold text-slate-900 border-b pb-1">Migration Points (189/190/491)</h4>
                            <div className="flex justify-between text-sm">
                                <span>Superior (20 pts)</span>
                                <span className="font-bold text-green-700">79+</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Proficient (10 pts)</span>
                                <span className="font-bold text-teal-700">65+</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded border border-slate-200">
                        <h4 className="font-semibold text-sm mb-2">Competent English (Minimum for PR)</h4>
                        <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div className="p-1 bg-slate-50 rounded">L: 47</div>
                            <div className="p-1 bg-slate-50 rounded">R: 48</div>
                            <div className="p-1 bg-slate-50 rounded">W: 51</div>
                            <div className="p-1 bg-slate-50 rounded">S: 54</div>
                        </div>
                        <p className="mt-2 text-[10px] text-slate-500 italic">*Skills-specific scores apply for certain visa sub-classes.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
