import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, BookOpen, MessageSquare, Headphones, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

// Reusable components for the exam structure
const SectionHeader = ({ title, duration, icon: Icon, timeColor }: { title: string, duration: string, icon: any, timeColor: string }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b pb-4">
        <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${timeColor.replace('text-', 'bg-').replace('600', '100')} bg-opacity-50`}>
                <Icon size={24} className={timeColor} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full shadow-inner border border-slate-200">
            <Clock size={16} className="text-slate-600" />
            <span className="text-sm font-semibold text-slate-800">{duration}</span>
        </div>
    </div>
);

const StrategyList = ({ title, strategies }: { title: string, strategies: string[] }) => (
    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mt-6 shadow-sm">
        <h4 className="font-bold text-slate-800 mb-4 items-center flex gap-2">
            <CheckCircle2 className="text-green-500" size={18} /> {title}
        </h4>
        <ul className="space-y-3">
            {strategies.map((strategy, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: strategy }} />
                </li>
            ))}
        </ul>
    </div>
);

const TemplateSection = ({ templates }: { templates: { name: string, content: string[] }[] }) => (
    <div className="mt-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-indigo-500 pl-3">Recommended Templates</h3>
        <div className="grid lg:grid-cols-3 gap-4">
            {templates.map((template, idx) => (
                <Card key={idx} className="bg-white hover:border-indigo-300 transition-colors shadow-sm">
                    <CardHeader className="pb-2 bg-slate-50 rounded-t-lg border-b border-slate-100">
                        <CardTitle className="text-sm text-indigo-800 tracking-wide font-bold uppercase">{template.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-2">
                        {template.content.map((line, i) => (
                            <p key={i} className="text-sm text-slate-600 italic border-l-2 border-slate-200 pl-3 py-1">
                                &quot;{line}&quot;
                            </p>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </div>
        <p className="text-xs text-slate-500 mt-4 italic bg-yellow-50 p-3 rounded border border-yellow-100">
            ⚠️ <strong>Note on Templates:</strong> Pearson&apos;s AI penalizes pure memorization. These are flexible frameworks—you MUST fill them with specific keywords and data from the prompt to score well on content.
        </p>
    </div>
);


export default function ExamStructurePage() {
    return (
        <div className="space-y-12 max-w-5xl mx-auto pb-12">
            {/* Page Header */}
            <div>
                <div className="mb-4">
                    <Link href="/practice" className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-medium transition-colors">
                        &larr; Back to Practice Resources
                    </Link>
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">PTE Exam Structure & Strategies</h1>
                <p className="text-slate-600 mt-4 text-lg max-w-3xl leading-relaxed">
                    A comprehensive, step-by-step breakdown of the Pearson Test of English. Master the format, understand the timing, and apply proven templates to maximize your score.
                </p>
            </div>

            {/* Part 1: Speaking & Writing */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 opacity-50" />
                <SectionHeader
                    title="Part 1: Speaking & Writing"
                    duration="54–67 minutes"
                    icon={MessageSquare}
                    timeColor="text-indigo-600"
                />

                <div className="prose prose-slate max-w-none text-slate-700">
                    <p className="lead text-lg">
                        The longest section of the exam evaluates your productive linguistic capabilities. It begins with an untimed, non-scored "Personal Introduction", followed by tasks that test oral fluency, pronunciation, and written argumentation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <StrategyList
                        title="Speaking Strategies"
                        strategies={[
                            "<strong>Fluency-First:</strong> Prioritize a smooth, natural pace over perfect pronunciation or content. Never stop to self-correct.",
                            "<strong>Avoid the 3-Second Rule:</strong> The AI cuts your microphone if you are silent for 3 seconds. Eliminate long pauses and fillers.",
                            "<strong>Read Aloud Pacing:</strong> 110-130 words per minute. Use 'thought groups' to breathe naturally.",
                            "<strong>Chunking for Repeat Sentence:</strong> Break sentences into phrases (e.g., Subject-Verb-Object) to reduce cognitive load."
                        ]}
                    />
                    <StrategyList
                        title="Writing Strategies"
                        strategies={[
                            "<strong>Prioritize simplicity:</strong> The AI prefers grammatically perfect simple sentences over complex ones with errors.",
                            "<strong>Manage word counts:</strong> For <em>Summarize Written Text</em>, write EXACTLY ONE sentence (35-45 words). For the Essay, 220-260 words.",
                            "<strong>Consistent spelling:</strong> Stick entirely to American or entirely to British spelling—mixing causes penalties.",
                            "<strong>Always proofread:</strong> Leave 2 minutes to check spelling, punctuation, and grammar."
                        ]}
                    />
                </div>

                <div className="mt-12 space-y-12">
                    <TemplateSection
                        templates={[
                            {
                                name: "Universal Image",
                                content: [
                                    "The image illustrates information about [Topic], highlighting the main trends.",
                                    "One important feature is that [Category A] represents the highest peak, at [Value].",
                                    "Conversely, [Category B] shows a contrasting trend at the lowest point of [Value].",
                                    "In conclusion, the image provides a clear overview of the data and patterns."
                                ]
                            },
                            {
                                name: "Process/Flow Chart",
                                content: [
                                    "The flow chart gives the process or life cycle of [Topic].",
                                    "Initially, the process begins with [First Stage].",
                                    "In the next stage, it converts into [Second Stage], and then proceeds to [Third Stage].",
                                    "Finally, the process concludes with [Final Stage], providing a clear overview."
                                ]
                            },
                            {
                                name: "Photographs",
                                content: [
                                    "The photo captures a scene of [General Description].",
                                    "The foreground portrays [Main Objects/People] engaging in [Activity].",
                                    "In the background, one can observe [Additional Details].",
                                    "Overall, the photo lively depicts [General Description]."
                                ]
                            }
                        ]}
                    />
                    <div className="border-t border-slate-100 pt-8">
                        <h4 className="font-bold text-slate-800 mb-4 inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md text-sm uppercase tracking-wide">
                            <FileText size={16} className="text-slate-500" /> Essay Templates (Choose One)
                        </h4>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="bg-white border p-5 rounded-lg shadow-sm">
                                <h5 className="font-bold text-indigo-700 text-sm mb-3">Agree / Disagree</h5>
                                <div className="space-y-2 text-sm text-slate-600">
                                    <p><strong>Intro:</strong> The question of whether [Topic] has sparked debate. I strongly believe that [Position], and this essay will highlight the reasons.</p>
                                    <p><strong>Body 1:</strong> To begin with, [Argument 1] provides support. For example, [Example]. This shows [Explanation].</p>
                                    <p><strong>Body 2:</strong> Moreover, [Argument 2] strengthens this stance. Studies show [Evidence], underscoring [Connection].</p>
                                    <p><strong>Conclusion:</strong> In conclusion, I [Position] because of [Summary of Points].</p>
                                </div>
                            </div>
                            <div className="bg-white border p-5 rounded-lg shadow-sm">
                                <h5 className="font-bold text-indigo-700 text-sm mb-3">Discuss Both Views</h5>
                                <div className="space-y-2 text-sm text-slate-600">
                                    <p><strong>Intro:</strong> Some believe [View 1], while others argue [View 2]. This essay explores both before sharing my opinion.</p>
                                    <p><strong>Body 1:</strong> Supporters of [View 1] argue [Point]. They cite [Example]. This implies [Explanation].</p>
                                    <p><strong>Body 2:</strong> Conversely, advocates of [View 2] claim [Point]. They point to [Evidence]. This highlights [Explanation].</p>
                                    <p><strong>Conclusion:</strong> After weighing both, I believe [Opinion] because [Reason].</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Part 2: Reading */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 opacity-50" />
                <SectionHeader
                    title="Part 2: Reading"
                    duration="29–30 minutes"
                    icon={BookOpen}
                    timeColor="text-emerald-600"
                />

                <div className="prose prose-slate max-w-none text-slate-700">
                    <p className="lead text-lg">
                        This section tests global comprehension and discrete lexical knowledge. It goes beyond vocabulary, focusing heavily on your mastery of grammar, logic, collocations, and contextual nuances across academic texts.
                    </p>
                </div>

                <div className="mt-8">
                    <StrategyList
                        title="Reading Strategies"
                        strategies={[
                            "<strong>Master Collocations:</strong> 'Fill in the Blanks' relies heavily on natural word partnerships (e.g., 'conduct research'). Knowing these is the biggest shortcut to high scores.",
                            "<strong>Logical Reordering:</strong> For 'Reorder Paragraphs', first find the independent Topic Sentence. Then, trace pronouns (he, this), transition words (however), and articles (a → the) to chain the rest.",
                            "<strong>Manage time aggressively:</strong> Skim for main ideas and strictly limit yourself to a maximum of 2 minutes per reading question.",
                            "<strong>Beware negative marking:</strong> In 'Multiple Choice, Multiple Answers', incorrect selections deduct points. If unsure, select just one option to protect your score."
                        ]}
                    />
                </div>
            </section>

            {/* Part 3: Listening */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 opacity-50" />
                <SectionHeader
                    title="Part 3: Listening"
                    duration="30–43 minutes"
                    icon={Headphones}
                    timeColor="text-amber-600"
                />

                <div className="prose prose-slate max-w-none text-slate-700">
                    <p className="lead text-lg">
                        The final section evaluates aural decoding and synthesis across varied academic contexts and accents (British, American, Australian). It culminates in one of the most important tasks of the test: Write From Dictation.
                    </p>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
                    <StrategyList
                        title="Listening Strategies"
                        strategies={[
                            "<strong>Focus on WFD:</strong> Write From Dictation heavily influences both Listening and Writing. Spell carefully and watch for plurals and verb tenses.",
                            "<strong>First-Letter Strategy:</strong> In WFD, write only the first letter of each word on the notepad while listening, then reconstruct the sentence immediately.",
                            "<strong>Educated Guesses:</strong> WFD has no negative marking for extra words. Always write down your best guess for missing words (or variations like 'is/was').",
                            "<strong>Rich Summaries:</strong> For 'Summarize Spoken Text', aim for 50-70 words including 4-5 core keywords from the audio to satisfy the AI."
                        ]}
                    />

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6 lg:mt-0 shadow-sm h-full">
                        <h4 className="font-bold text-slate-800 mb-4 inline-flex items-center gap-2">
                            <Headphones className="text-amber-500" size={18} /> Retell Lecture Templates
                        </h4>
                        <p className="text-sm text-slate-600 mb-4">You must capture 6-8 high-frequency keywords to insert into these structures.</p>

                        <div className="space-y-4">
                            <div className="bg-white border border-slate-200 p-4 rounded text-sm relative">
                                <div className="absolute -left-2 -top-2 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Option 1</div>
                                <p className="text-slate-600 mt-2 italic">
                                    "The lecture was related to <strong>[Topic]</strong>, and mainly talked about <strong>[Main Idea]</strong>. The speaker explained <strong>[Point 1]</strong>, and also mentioned <strong>[Point 2]</strong>. Furthermore, it highlighted <strong>[Point 3]</strong>, which is important because <strong>[Reason]</strong>. Overall, the lecture provided detailed information about <strong>[Topic]</strong>."
                                </p>
                            </div>
                            <div className="bg-white border border-slate-200 p-4 rounded text-sm relative">
                                <div className="absolute -left-2 -top-2 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Option 2 (Cause/Effect)</div>
                                <p className="text-slate-600 mt-2 italic">
                                    "The lecture was about <strong>[Topic]</strong>. The speaker explained that <strong>[Cause]</strong> leads to <strong>[Effect]</strong>, and supported this by mentioning <strong>[Point]</strong>. Moreover, it indicated <strong>[Extra Detail]</strong>. To sum up, the main idea was that <strong>[Topic]</strong> has significant effects."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
