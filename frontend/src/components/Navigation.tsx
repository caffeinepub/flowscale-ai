import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBookCall = () => {
        const ctaSection = document.getElementById('booking-form');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" strokeWidth={2.5} />
                    </div>
                    <span className="text-foreground font-semibold text-base tracking-tight">
                        FlowScale <span className="text-primary">AI</span>
                    </span>
                </div>

                {/* CTA Button */}
                <button
                    onClick={handleBookCall}
                    className="px-4 py-2 text-sm font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 tracking-tight"
                >
                    Book a Call
                </button>
            </div>
        </header>
    );
}
