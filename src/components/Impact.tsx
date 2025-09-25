import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, GraduationCap, Calendar, TrendingDown } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    {
      icon: Users,
      number: '1000+',
      label: 'Girls Reached',
      description: 'Through our Menstrual Hygiene Management Project, in collaboration with the MasterCard Foundation, we\'ve empowered thousands of girls in Busia County.',
      gradient: 'gradient-hope'
    },
    {
      icon: Heart,
      number: '500+',
      label: 'Women Supported',
      description: 'Our outreach has provided vital support including counseling, resources, and empowerment programs to widows, single mothers, and those affected by domestic violence.',
      gradient: 'gradient-warmth'
    },
    {
      icon: GraduationCap,
      number: '300+',
      label: 'Youth Equipped',
      description: 'With Global Youth Mobilization support, we distributed computers and solar panels to schools, equipping youth with essential digital skills.',
      gradient: 'gradient-earth'
    },
    {
      icon: Users,
      number: '2000+',
      label: 'Students Engaged',
      description: 'Conducted awareness drives on reproductive health, HIV/AIDS prevention, and career development across several communities.',
      gradient: 'gradient-hope'
    },
    {
      icon: Calendar,
      number: '16',
      label: 'Days of Activism',
      description: 'Through GIMAC and She Leads program, we\'ve organized campaigns against gender-based violence, fostering advocacy for young women.',
      gradient: 'gradient-warmth'
    },
    {
      icon: TrendingDown,
      number: '40%',
      label: 'Reduction in Absences',
      description: 'By providing reusable sanitary pads, we\'ve significantly reduced school absenteeism among girls in rural areas.',
      gradient: 'gradient-earth'
    }
  ];

  return (
    <section id="impact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our impact is driven by measurable change and transformative growth across communities. 
            Here are some of the key statistics showcasing the reach and success of our initiatives.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className={`${stat.gradient} p-6 text-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 font-semibold text-lg">{stat.label}</div>
                </div>
                
                {/* Description */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Help Us Reach Even More Lives
            </h3>
            <p className="text-muted-foreground">
              Together, we can expand our impact and create lasting change in more communities across Kenya.
            </p>
          </div>
          <div className="inline-flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-[#d91e98] hover:bg-[#b81b82] text-white">
              Make a Donation
            </Button>
            <Button size="lg" variant="outline">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;