import { MessageSquare, Target, RotateCcw, Mail } from 'lucide-react';

const services = [
    {
        icon: MessageSquare,
        title: 'Instagram & WhatsApp DM Automation',
        description: 'Respond to every inquiry instantly, qualify leads, and book calls — all on autopilot.',
    },
    {
        icon: Target,
        title: 'AI Lead Qualification',
        description: 'Automatically score and segment leads so your team focuses only on high-intent buyers.',
    },
    {
        icon: RotateCcw,
        title: 'Abandoned Cart Recovery Flows',
        description: 'Recover lost revenue with smart, personalized follow-up sequences that convert.',
    },
    {
        icon: Mail,
        title: 'Email & CRM Automation',
        description: 'Sync every interaction into your CRM and trigger the right email at the right time.',
    },
];

export default function Solution() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'oklch(0.12 0.005 240)' }}>
            {/* Top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Background accent */}
            <div
                className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, oklch(0.78 0.15 185) 0%, transparent 70%)'
                }}
            />

            <div className="max-w-5xl mx-auto px-6">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Our Services
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4 max-w-xl text-balance">
                    AI Systems That Work{' '}
                    <span className="gradient-text">24/7.</span>
                </h2>

                <p className="text-muted-foreground text-base md:text-lg mb-14 max-w-xl">
                    We build and deploy automation workflows tailored to your brand — so you never miss a lead again.
                </p>

                {/* Service cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {services.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="group relative p-6 rounded-sm border border-border bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at top left, oklch(0.78 0.15 185 / 0.05) 0%, transparent 60%)'
                                }}
                            />

                            {/* Icon */}
                            <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="font-semibold text-foreground text-base leading-snug mb-2">
                                {title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
