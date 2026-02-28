import { MessageCircleOff, ShoppingCart, Clock, UserX } from 'lucide-react';

const problems = [
    {
        icon: MessageCircleOff,
        text: 'Unanswered Instagram & WhatsApp DMs',
        detail: 'Every unanswered message is a lost sale.',
    },
    {
        icon: ShoppingCart,
        text: 'No abandoned cart recovery',
        detail: 'Customers leave without a nudge to return.',
    },
    {
        icon: Clock,
        text: 'Manual follow-ups eating time',
        detail: 'Your team is stuck doing repetitive tasks.',
    },
    {
        icon: UserX,
        text: 'Leads slipping through the cracks',
        detail: 'No system means no consistency.',
    },
];

export default function Problem() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Subtle top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-5xl mx-auto px-6">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        The Problem
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4 max-w-2xl text-balance">
                    Most Brands Lose{' '}
                    <span className="gradient-text">20–30% Revenue</span>{' '}
                    From Slow Responses.
                </h2>

                <p className="text-muted-foreground text-base md:text-lg mb-14 max-w-xl">
                    Speed is the new competitive advantage. If you're not responding instantly, your competitors are.
                </p>

                {/* Problem cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {problems.map(({ icon: Icon, text, detail }) => (
                        <div
                            key={text}
                            className="group flex items-start gap-4 p-5 rounded-sm border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all duration-200"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-destructive/10 border border-destructive/20 flex items-center justify-center mt-0.5">
                                <Icon className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground text-sm leading-snug mb-1">
                                    {text}
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
