import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Results from './components/Results';
import Solutions from './components/Solutions';
import TrustSignals from './components/TrustSignals';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-primary">
      <Navigation />
      <Hero />
      <Results />
      <Solutions />
      <TrustSignals />
      <Industries />
      <Testimonials />
      <SuccessStories />
      <Footer />
    </div>
  );
}
