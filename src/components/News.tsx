import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: 'MasterCard Foundation Partnership Expands Our Reach',
      excerpt: 'New collaboration brings menstrual hygiene management program to 2,000+ girls across Busia County.',
      date: '2024-03-15',
      category: 'Partnership',
      readTime: '3 min read',
      image: '📰',
      gradient: 'gradient-hope'
    },
    {
      title: 'Mental Health Workshop Series Launches',
      excerpt: 'Our new Nhanga Sessions create safe spaces for healing and growth in rural communities.',
      date: '2024-03-10',
      category: 'Program Launch',
      readTime: '4 min read',
      image: '🧠',
      gradient: 'gradient-warmth'
    },
    {
      title: '16 Days of Activism Against Gender-Based Violence',
      excerpt: 'Community mobilization efforts reach new heights in advocating for women\'s rights and safety.',
      date: '2024-02-28',
      category: 'Advocacy',
      readTime: '5 min read',
      image: '✊🏿',
      gradient: 'gradient-earth'
    },
    {
      title: 'Digital Skills Training for Rural Youth',
      excerpt: 'Computer and solar panel distribution empowers young people with 21st-century skills.',
      date: '2024-02-20',
      category: 'Education',
      readTime: '3 min read',
      image: '💻',
      gradient: 'gradient-hope'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Community Health Fair',
      date: '2024-04-15',
      location: 'Busia Community Center',
      type: 'Health & Wellness'
    },
    {
      title: 'Women\'s Entrepreneurship Workshop',
      date: '2024-04-22',
      location: 'Western Kenya',
      type: 'Business Development'
    },
    {
      title: 'Youth Leadership Summit',
      date: '2024-05-10',
      location: 'Multiple Locations',
      type: 'Leadership Training'
    }
  ];

  return (
    <section id="news" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news from our programs and upcoming events 
            where you can get involved in our mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-up">Latest News</h3>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <Card 
                  key={item.title} 
                  className="hover-lift animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="md:flex">
                    {/* Image placeholder */}
                    <div className={`md:w-1/3 ${item.gradient} p-8 flex items-center justify-center`}>
                      <div className="text-6xl">{item.image}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {item.category}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{item.excerpt}</p>
                        
                        <Button variant="outline" className="group">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={event.title} 
                  className="hover-lift animate-scale-in"
                  style={{ animationDelay: `${(index + newsItems.length) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg gradient-hope flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{event.location}</p>
                        <p className="text-sm text-muted-foreground mb-2">{event.type}</p>
                        <p className="text-sm font-medium text-primary">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-8 gradient-warmth text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-4">Stay Connected</h4>
                <p className="text-white/90 mb-6 text-sm">
                  Subscribe to our newsletter for updates on programs, events, and impact stories.
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 w-full">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;