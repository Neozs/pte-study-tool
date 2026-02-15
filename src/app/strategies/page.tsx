import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Zap, FileText } from 'lucide-react';

export default function StrategiesPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Advanced Strategies & Templates</h1>
                <p className="text-slate-600 mt-2">Proven templates and tactics for scoring 79+.</p>
            </div>

            {/* Top Strategies */}
            <section className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-teal-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-teal-700 flex items-center gap-2"><Zap size={20} /> Fluency First</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-slate-700">In <strong>Speaking</strong>, oral fluency (smooth pace) often outweighs content. Do not self-correct. Keep speaking.</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-blue-700 flex items-center gap-2"><FileText size={20} /> Keywords are King</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-slate-700">In <strong>Listening/Reading</strong>, focus on nouns and verbs. Capture keywords for summary tasks.</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-purple-700 flex items-center gap-2"><Clock size={20} /> Strict Timing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-slate-700">Stick to limits. <strong>Describe Image:</strong> 40s max. <strong>Essay:</strong> 20m strict. Never run over.</p>
                    </CardContent>
                </Card>
            </section>

            {/* Templates Section */}
            <h2 className="text-2xl font-bold text-slate-900 mt-8">Templates Library</h2>
            <div className="grid md:grid-cols-2 gap-8">

                {/* Describe Image Template */}
                <Card className="bg-slate-50">
                    <CardHeader>
                        <CardTitle>Describe Image (Speaking)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-white p-4 rounded border text-sm text-slate-800 font-mono leading-relaxed">
                            <p className="mb-2"><span className="text-blue-600 font-bold">Intro:</span> "The image provided is a [chart type] that illustrates information about [topic]."</p>
                            <p className="mb-2"><span className="text-blue-600 font-bold">High:</span> "From the image, it is clear that [Category A] has the highest figure, which is [Value]."</p>
                            <p className="mb-2"><span className="text-blue-600 font-bold">Low:</span> "On the contrary, [Category B] has the lowest figure, which is [Value]."</p>
                            <p className="mb-2"><span className="text-blue-600 font-bold">Conclusion:</span> "Overall, the image gives accurate information about [topic]."</p>
                        </div>
                        <p className="text-xs text-slate-500">Tip: Speak for 30-35 seconds. Don't stop too early.</p>
                    </CardContent>
                </Card>

                {/* Retell Lecture Template */}
                <Card className="bg-slate-50">
                    <CardHeader>
                        <CardTitle>Retell Lecture (Speaking)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-white p-4 rounded border text-sm text-slate-800 font-mono leading-relaxed">
                            <p className="mb-2">"The speaker was discussing <span className="text-teal-600">[Main Topic]</span>."</p>
                            <p className="mb-2">"He/She mentioned that <span className="text-teal-600">[Key Point 1]</span>."</p>
                            <p className="mb-2">"He/She also highlighted <span className="text-teal-600">[Key Point 2]</span> and <span className="text-teal-600">[Key Point 3]</span>."</p>
                            <p className="mb-2">"Overall, the lecture was very informative about <span className="text-teal-600">[Main Topic]</span>."</p>
                        </div>
                        <p className="text-xs text-slate-500">Tip: Capture 3-4 keywords/phrases to fill the blanks.</p>
                    </CardContent>
                </Card>

                {/* Essay Structure */}
                <Card className="bg-slate-50 md:col-span-2">
                    <CardHeader>
                        <CardTitle>Essay Structure (Writing)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid sm:grid-cols-4 gap-4 text-center">
                            <div className="bg-white p-3 rounded border">
                                <div className="font-bold text-slate-900 border-b pb-1 mb-1">Intro</div>
                                <div className="text-xs text-slate-500">Paraphrase Topic + Thesis</div>
                            </div>
                            <div className="bg-white p-3 rounded border">
                                <div className="font-bold text-slate-900 border-b pb-1 mb-1">Body 1</div>
                                <div className="text-xs text-slate-500">Argument 1 + Example</div>
                            </div>
                            <div className="bg-white p-3 rounded border">
                                <div className="font-bold text-slate-900 border-b pb-1 mb-1">Body 2</div>
                                <div className="text-xs text-slate-500">Argument 2 + Example</div>
                            </div>
                            <div className="bg-white p-3 rounded border">
                                <div className="font-bold text-slate-900 border-b pb-1 mb-1">Conclusion</div>
                                <div className="text-xs text-slate-500">Summary + Restate Thesis</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 text-center">Target 200-300 words. Use connectors like 'Furthermore', 'Consequently'.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
