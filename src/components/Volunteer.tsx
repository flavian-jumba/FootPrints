import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Briefcase, GraduationCap, ArrowRight, Mail, Phone } from 'lucide-react';

const Volunteer = () => {
  const opportunities = [
    {
      icon: Heart,
      title: 'Mental Health Support Volunteer',
      description: 'Help facilitate Nhanga sessions and provide peer support to community members.',
      commitment: 'Part-time',
      location: 'Busia County',
      skills: ['Active Listening', 'Empathy', 'Communication'],
      gradient: 'gradient-hope'
    },
    {
      icon: GraduationCap,
      title: 'Education Mentor',
      description: 'Support teenage mothers and young women in their educational journey.',
      commitment: 'Flexible',
      location: 'Remote/On-site',
      skills: ['Teaching', 'Mentoring', 'Subject Expertise'],
      gradient: 'gradient-warmth'
    },
    {
      icon: Briefcase,
      title: 'Business Development Coach',
      description: 'Guide women and youth in developing their entrepreneurship skills.',
      commitment: 'Weekly',
      location: 'Western Kenya',
      skills: ['Business Planning', 'Financial Literacy', 'Marketing'],
      gradient: 'gradient-earth'
    },
    {
      icon: Users,
      title: 'Community Mobilization Coordinator',
      description: 'Organize and lead community awareness campaigns and health initiatives.',
      commitment: 'Part-time',
      location: 'Multiple Locations',
      skills: ['Leadership', 'Project Management', 'Public Speaking'],
      gradient: 'gradient-hope'
    }
  ];

  const careers = [
    {
      title: 'Program Coordinator',
      department: 'Programs',
      type: 'Full-time',
      location: 'Busia, Kenya'
    },
    {
      title: 'Mental Health Counselor',
      department: 'Health & Wellness',
      type: 'Part-time',
      location: 'Western Kenya'
    },
    {
      title: 'Communications Specialist',
      department: 'Marketing & Communications',
      type: 'Full-time',
      location: 'Remote/Hybrid'
    }
  ];

  return (
    <section id="volunteer" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be part of creating lasting change in communities across Kenya. Whether you want to volunteer 
            your time or build a career with purpose, we have opportunities for you.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
            Volunteer Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card 
                key={opportunity.title} 
                className="hover-lift animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`${opportunity.gradient} p-6 text-center`}>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <opportunity.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{opportunity.title}</h4>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{opportunity.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Commitment:</span>
                        <span className="text-sm font-medium">{opportunity.commitment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Location:</span>
                        <span className="text-sm font-medium">{opportunity.location}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full group">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-8">Career Opportunities</h3>
            <div className="space-y-6">
              {careers.map((career, index) => (
                <Card 
                  key={career.title} 
                  className="hover-lift animate-slide-in-right"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{career.title}</h4>
                        <p className="text-sm text-muted-foreground">{career.department}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {career.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{career.location}</p>
                    <Button variant="outline" size="sm" className="group">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button size="lg" variant="outline">
                View All Open Positions
              </Button>
            </div>
          </div>

          {/* Contact & Application Info */}
          <div className="animate-slide-in-right">
            <Card className="gradient-hope text-white overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Ready to Make a Difference?</h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Join our team of passionate individuals working to create positive change in communities 
                  across Kenya. We welcome applications from people of all backgrounds who share our vision.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white/80" />
                    <span className="text-white/90">careers@foh-foundation.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-white/80" />
                    <span className="text-white/90">+254 XXX XXX XXX</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Send Resume
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;