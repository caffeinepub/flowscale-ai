import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="dark min-h-screen bg-background text-foreground font-sans">
            <Navigation />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <HowItWorks />
                <BottomCTA />
            </main>
            <Footer />
        </div>
    );
}
