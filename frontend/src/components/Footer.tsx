import { Zap, Heart } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'flowscale-ai');

    return (
        <footer className="bg-background border-t border-border py-10">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-1.5">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                                <Zap className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                            </div>
                            <span className="text-foreground font-semibold text-sm tracking-tight">
                                FlowScale <span className="text-primary">AI</span>
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Intelligent automation for growing brands.
                        </p>
                    </div>

                    {/* Copyright + attribution */}
                    <div className="flex flex-col items-center md:items-end gap-1.5">
                        <p className="text-xs text-muted-foreground">
                            © {year} FlowScale AI. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            Built with{' '}
                            <Heart className="w-3 h-3 text-primary fill-primary" />{' '}
                            using{' '}
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors duration-150 font-medium"
                            >
                                caffeine.ai
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
