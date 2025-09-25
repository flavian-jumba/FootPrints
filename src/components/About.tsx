import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Users, Check, Zap, Award, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Leading with empathy in all our initiatives.',
    },
    {
      icon: Star,
      title: 'Integrity',
      description: 'Maintaining highest ethical standards.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborating for shared success.',
    },
    {
      icon: Check,
      title: 'Accountability',
      description: 'Taking responsibility for our actions.',
    },
    {
      icon: Zap,
      title: 'Discipline',
      description: 'Maintaining consistency in our work.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for highest quality always.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Us - Footprints of Hope Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming lives and communities through compassionate action and empowerment
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Who We Are
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2019 in Busia, Kenya, Footprints of Hope Foundation is a community-based 
              organization focused on empowering girls, youth, and women. We address key social issues 
              including menstrual hygiene, sexual and reproductive health, children's rights, 
              socio-economic empowerment, and mental health through compassionate and action-driven programs.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full gradient-hope flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Founded in 2019</p>
                <p className="text-muted-foreground">Busia, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-video rounded-2xl gradient-hope p-1">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <Users className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="hover-lift animate-fade-in-up">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full gradient-hope flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a community where every girl, youth, and woman can achieve their potential 
                and contribute positively, free from discrimination and socioeconomic barriers.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in-up delay-200">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full gradient-warmth flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We aim to empower the girl child and teenage mothers in rural Kenya through education, 
                mental health support, and socioeconomic programs that foster independence and dignity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full gradient-earth flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;