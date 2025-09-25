import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Grace Wanjiku',
      role: 'Program Beneficiary',
      location: 'Busia County',
      quote: 'Footprints of Hope gave me a second chance at education. After becoming a teenage mother, I thought my dreams were over. Now I\'m completing my studies and learning valuable life skills.',
      rating: 5,
      image: '👩🏿‍🎓'
    },
    {
      name: 'Mary Atieno',
      role: 'Small Business Owner',
      location: 'Western Kenya',
      quote: 'The business development program transformed my life. I went from struggling to support my family to running a successful tailoring business that employs three other women.',
      rating: 5,
      image: '👩🏿‍💼'
    },
    {
      name: 'Faith Achieng',
      role: 'Community Leader',
      location: 'Busia County',
      quote: 'The mental health support sessions created a safe space where I could heal and grow. Now I help facilitate sessions for other women facing similar challenges.',
      rating: 5,
      image: '👩🏿‍⚕️'
    },
    {
      name: 'Sarah Nekesa',
      role: 'Student',
      location: 'Rural Kenya',
      quote: 'Thanks to the menstrual hygiene program, I no longer miss school during my period. The reusable pads and health education have been life-changing.',
      rating: 5,
      image: '👩🏿‍🎓'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stories of Hope
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from the amazing women and girls whose lives have been transformed 
            through our programs and community support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="hover-lift animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full gradient-hope opacity-10 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warmth fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground italic text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-hope flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Be Part of More Success Stories
            </h3>
            <p className="text-muted-foreground mb-8">
              Your support helps create more transformative stories like these. Join us in empowering 
              the next generation of leaders and change-makers.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-donate">
                Support Our Mission
              </Button>
              <Button size="lg" variant="outline">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;