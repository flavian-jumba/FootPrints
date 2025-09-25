import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Heart, Target } from 'lucide-react';

const Hero = () => {
  return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
      {/* Background with overlay */}
            <div className="absolute inset-0 gradient-hope opacity-75"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/5 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white/10 animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Empowering the next generation,{' '}
            <span className="text-warmth-light">one footprint</span> at a time
          </h1>
          
          {/* Subtitle */}
                    <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light">
            Footprints of Hope empowers Kenya's girls, youth, and women with resources, 
            education, and support for resilient futures.
          </p>

          {/* Call-to-action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 transition-transform transform hover:scale-105">
              See Our Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
                        <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white hover:text-primary text-lg px-8 py-4 transition-all duration-300 ease-in-out"
            >
              Learn About Us
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in-up delay-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Girls Reached</div>
            </div>
            
            <div className="text-center animate-fade-in-up delay-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Women Supported</div>
            </div>
            
            <div className="text-center animate-fade-in-up delay-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-white/80">Core Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;