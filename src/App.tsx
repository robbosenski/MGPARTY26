import { TickerBanner } from './components/TickerBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignupForm } from './components/SignupForm';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <TickerBanner />
      <Navbar />
      <Hero onSignupClick={scrollToSignup} />
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/background/MG26 Background-P_DAY_PURPLE.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative">
          <About onJoinClick={scrollToSignup} />
          <SignupForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}
