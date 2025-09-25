import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Brain, Users2, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Teenage Mother Support Program',
      description: 'Providing resources, education, and support for young mothers to help them continue their education, learn valuable life skills, and become self-sufficient.',
      features: [
        'Educational Empowerment: Comprehensive scholarships and academic support',
        'Holistic Support: Access to healthcare services, counseling, and nutritional guidance',
        'Skills Development: Practical life skills and vocational training',
        'Mentorship: One-on-one guidance from experienced mentors'
      ],
      gradient: 'gradient-hope'
    },
    {
      icon: Briefcase,
      title: 'Socio-Economic Empowerment for Youth and Women',
      description: 'Empowering women and youth through comprehensive business development strategies, skill training, and access to financial resources for sustainable economic independence.',
      features: [
        'Business Development: Strategic planning and entrepreneurship training',
        'Financial Literacy: Money management and investment education',
        'Market Access: Connecting entrepreneurs with market opportunities',
        'Resource Network: Access to funding and business support services'
      ],
      gradient: 'gradient-warmth'
    },
    {
      icon: Brain,
      title: 'Nhanga Session for Mental Health',
      description: 'Creating safe and supportive spaces for individuals facing emotional challenges, offering professional counseling and mental wellness resources.',
      features: [
        'Professional Counseling: One-on-one therapeutic support',
        'Group Sessions: Peer support and shared healing experiences',
        'Wellness Education: Mental health awareness and coping strategies',
        'Crisis Support: 24/7 emergency mental health assistance'
      ],
      gradient: 'gradient-earth'
    },
    {
      icon: Users2,
      title: 'Community Mobilization',
      description: 'Uniting communities through collective action initiatives focused on health education, social awareness, and sustainable development.',
      features: [
        'Health Education: Community-wide health awareness programs',
        'Social Initiatives: Collaborative community improvement projects',
        'Leadership Development: Training community advocates and leaders',
        'Resource Networking: Connecting communities with support services'
      ],
      gradient: 'gradient-hope'
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive initiatives designed to create lasting positive impact in communities across Kenya
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-8 lg:gap-12">
          {programs.map((program, index) => (
            <Card 
              key={program.title} 
              className={`overflow-hidden hover-lift animate-fade-in-up ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon & Title Section */}
                <div className={`lg:w-1/3 p-8 ${program.gradient} flex flex-col justify-center items-center text-center lg:text-left`}>
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-white/90 leading-relaxed">{program.description}</p>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3">
                  <CardContent className="p-8">
                    <div className="space-y-4 mb-8">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-donate">
              Support Our Programs
            </Button>
            <Button size="lg" variant="outline">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;