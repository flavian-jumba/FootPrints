import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import SDGSection from '@/components/SDGSection';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Volunteer from '@/components/Volunteer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <SDGSection />
        <Testimonials />
        <News />
        <Volunteer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
