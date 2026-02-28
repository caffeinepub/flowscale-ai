import { useState } from 'react';
import { Calendar, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { useActor } from '@/hooks/useActor';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface FormState {
    name: string;
    email: string;
    businessName: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
}

export default function BottomCTA() {
    const { actor } = useActor();

    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        businessName: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!form.name.trim()) {
            newErrors.name = 'Full name is required.';
        }
        if (!form.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            newErrors.email = 'Please enter a valid email address.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        if (!validate()) return;

        setIsSubmitting(true);
        try {
            if (!actor) throw new Error('Service unavailable. Please try again.');
            await actor.submitContactForm(
                form.name.trim(),
                form.email.trim(),
                form.businessName.trim(),
                form.message.trim()
            );
            setSubmitted(true);
            setForm({ name: '', email: '', businessName: '', message: '' });
        } catch (err) {
            setSubmitError(
                'Something went wrong. Please try again in a moment.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="booking-form"
            className="py-24 md:py-32 relative overflow-hidden"
            style={{ background: 'oklch(0.12 0.005 240)' }}
        >
            {/* Top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse, oklch(0.78 0.15 185 / 0.12) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-2xl mx-auto px-6 relative z-10">
                {/* Icon + Headline */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-primary/30 bg-primary/10 mb-8">
                        <Calendar className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4 text-balance">
                        Let's Automate{' '}
                        <span className="gradient-text">Your Growth.</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Book a free 15-minute strategy call. We'll review your current setup and show you exactly where automation can unlock more revenue.
                    </p>
                </div>

                {/* Form card */}
                <div
                    className="rounded-sm border border-border/60 p-8 md:p-10"
                    style={{ background: 'oklch(0.14 0.006 240 / 0.8)' }}
                >
                    {submitted ? (
                        /* Success state */
                        <div className="flex flex-col items-center text-center py-6 gap-4">
                            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                <CheckCircle className="w-7 h-7 text-primary" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">
                                You're on the list!
                            </h3>
                            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                                Thanks! We'll be in touch within 24 hours to confirm your strategy call.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-2 text-xs text-primary hover:underline underline-offset-4 transition-colors"
                            >
                                Submit another request
                            </button>
                        </div>
                    ) : (
                        /* Form */
                        <form onSubmit={handleSubmit} noValidate className="space-y-5">
                            {/* Row: Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="name"
                                        className="text-sm font-medium text-foreground/80"
                                    >
                                        Full Name <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Jane Smith"
                                        value={form.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className={`bg-background/40 border-border/60 focus-visible:ring-primary/50 placeholder:text-muted-foreground/50 rounded-sm ${
                                            errors.name ? 'border-destructive focus-visible:ring-destructive/50' : ''
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3 shrink-0" />
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="email"
                                        className="text-sm font-medium text-foreground/80"
                                    >
                                        Email Address <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="jane@company.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className={`bg-background/40 border-border/60 focus-visible:ring-primary/50 placeholder:text-muted-foreground/50 rounded-sm ${
                                            errors.email ? 'border-destructive focus-visible:ring-destructive/50' : ''
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3 shrink-0" />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Business Name */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="businessName"
                                    className="text-sm font-medium text-foreground/80"
                                >
                                    Business Name
                                </Label>
                                <Input
                                    id="businessName"
                                    name="businessName"
                                    type="text"
                                    placeholder="Acme Corp"
                                    value={form.businessName}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="bg-background/40 border-border/60 focus-visible:ring-primary/50 placeholder:text-muted-foreground/50 rounded-sm"
                                />
                            </div>

                            {/* What to automate */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="message"
                                    className="text-sm font-medium text-foreground/80"
                                >
                                    What do you want to automate?
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="e.g. DM follow-ups, cart recovery emails, lead qualification..."
                                    value={form.message}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    rows={4}
                                    className="bg-background/40 border-border/60 focus-visible:ring-primary/50 placeholder:text-muted-foreground/50 rounded-sm resize-none"
                                />
                            </div>

                            {/* Submission error */}
                            {submitError && (
                                <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-sm px-4 py-3">
                                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                    <span>{submitError}</span>
                                </div>
                            )}

                            {/* Submit */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 text-base font-semibold rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 glow-teal tracking-tight"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Booking your call…
                                    </>
                                ) : (
                                    'Book My Free Strategy Call'
                                )}
                            </Button>

                            <p className="text-center text-xs text-muted-foreground">
                                No sales pressure. Just a clear plan for your business.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
