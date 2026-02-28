export default function Hero() {
    const handleBookAudit = () => {
        const ctaSection = document.getElementById('cta');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-background/80" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, oklch(0.78 0.15 185) 0%, transparent 70%)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">
                        AI Automation for D2C Brands
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6 text-balance">
                    Turn Missed Leads Into{' '}
                    <span className="gradient-text">Automated Revenue.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
                    FlowScale AI helps growing brands automate DMs, recover abandoned carts, and increase
                    conversions using intelligent AI-powered workflows.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={handleBookAudit}
                        className="px-7 py-3.5 text-base font-semibold rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 glow-teal-sm tracking-tight"
                    >
                        Book a Free Automation Audit
                    </button>
                    <span className="text-sm text-muted-foreground">
                        No commitment. 15 minutes.
                    </span>
                </div>

                {/* Stats row */}
                <div className="mt-16 pt-10 border-t border-border/50 grid grid-cols-3 gap-6 max-w-lg mx-auto">
                    {[
                        { value: '24/7', label: 'Always on' },
                        { value: '3×', label: 'Faster response' },
                        { value: '30%', label: 'More revenue' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
