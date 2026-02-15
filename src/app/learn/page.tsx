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
                    <CardTitle>Scoring Insight</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-700 mb-4">
                        PTE Scoring is integrated. This means tasks often contribute to multiple skills at once. For example,
                        <span className="font-semibold"> Read Aloud</span> contributes points to both <span className="text-blue-600 font-medium">Reading</span> and <span className="text-blue-600 font-medium">Speaking</span>.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-500 mb-2">Communicative Skills</h4>
                            <p className="text-sm text-slate-900 bg-white p-2 rounded border">Listening, Reading, Speaking, Writing (10-90 scale)</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-500 mb-2">Enabling Skills</h4>
                            <p className="text-sm text-slate-900 bg-white p-2 rounded border">Grammar, Fluency, Pronunciation, Spelling, Vocabulary, Discourse</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
