import { Search, TrendingDown, Cpu, BarChart2 } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Audit your current funnel',
        description: 'We map every touchpoint where leads enter and exit your business.',
    },
    {
        number: '02',
        icon: TrendingDown,
        title: 'Identify revenue leaks',
        description: 'Pinpoint exactly where and why you\'re losing potential customers.',
    },
    {
        number: '03',
        icon: Cpu,
        title: 'Implement AI workflows',
        description: 'We build and deploy custom automation tailored to your stack.',
    },
    {
        number: '04',
        icon: BarChart2,
        title: 'Optimize for higher conversions',
        description: 'Continuous monitoring and refinement to maximize your ROI.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Background grid */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        How It Works
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4 max-w-xl text-balance">
                    From Audit to{' '}
                    <span className="gradient-text">Automation</span>{' '}
                    in Days.
                </h2>

                <p className="text-muted-foreground text-base md:text-lg mb-16 max-w-xl">
                    A simple, proven process to get your AI systems live fast.
                </p>

                {/* Steps — horizontal on desktop, vertical on mobile */}
                <div className="relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-[2.75rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                        {steps.map(({ number, icon: Icon, title, description }, index) => (
                            <div key={number} className="relative flex flex-col items-start md:items-center">
                                {/* Mobile connector line */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden absolute left-[1.375rem] top-[3.5rem] bottom-[-2rem] w-px bg-gradient-to-b from-primary/40 to-transparent" />
                                )}

                                {/* Step indicator */}
                                <div className="relative flex-shrink-0 w-11 h-11 rounded-sm border border-primary/40 bg-primary/10 flex items-center justify-center mb-4 z-10">
                                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    {/* Step number badge */}
                                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center leading-none">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:text-center pl-0 md:pl-0">
                                    <div className="text-[10px] font-bold tracking-widest text-primary/60 uppercase mb-1">
                                        Step {number}
                                    </div>
                                    <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
