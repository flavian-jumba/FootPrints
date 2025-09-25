import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Heart, Users, GraduationCap, Briefcase, Shield } from 'lucide-react';

const SDGSection = () => {
  const sdgs = [
    {
      number: 1,
      title: 'No Poverty',
      icon: Users,
      description: 'Through our socio-economic empowerment programs, we help women and youth build sustainable livelihoods.',
      color: 'from-red-500 to-red-600'
    },
    {
      number: 3,
      title: 'Good Health and Well-being',
      icon: Heart,
      description: 'Our mental health programs and healthcare support ensure community wellness and resilience.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: 4,
      title: 'Quality Education',
      icon: GraduationCap,
      description: 'Educational scholarships and support help teenage mothers continue their schooling and skills development.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 5,
      title: 'Gender Equality',
      icon: Shield,
      description: 'We champion women\'s rights and fight against gender-based violence through advocacy and support.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: 8,
      title: 'Decent Work and Economic Growth',
      icon: Briefcase,
      description: 'Business development training and financial literacy programs promote sustainable economic opportunities.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 10,
      title: 'Reduced Inequalities',
      icon: Target,
      description: 'Community mobilization efforts address social barriers and promote inclusive development.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="sdg" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            SDGs We Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Footprints of Hope Foundation, we align our programs with the United Nations 
            Sustainable Development Goals (SDGs) to create a meaningful and measurable impact 
            on the communities we serve.
          </p>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgs.map((sdg, index) => (
            <Card 
              key={sdg.number} 
              className="overflow-hidden hover-lift animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* SDG Number Header */}
                <div className={`bg-gradient-to-r ${sdg.color} p-6 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <sdg.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">SDG {sdg.number}</div>
                    <div className="text-white/90 font-semibold">{sdg.title}</div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{sdg.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="gradient-hope rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Working Together for Global Goals
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our commitment to the SDGs ensures that every initiative creates lasting positive change 
              that aligns with global efforts toward a more sustainable and equitable world.
            </p>
                        <Button size="lg" className="bg-[#d91e98] hover:bg-[#b81b82] text-white">
              Learn More About Our Alignment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;