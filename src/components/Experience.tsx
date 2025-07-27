import { Briefcase, Calendar, MapPin, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Software Testing Intern',
      company: 'AQM Technologies',
      location: 'Capital Market Domain',
      period: 'June 2025 - July 2025',
      description: 'Gained exposure to QMS file coverage, RTM, Practical API testing using Postman.',
      skills: ['QMS', 'RTM', 'API Testing', 'Postman'],
      icon: <Briefcase className="text-primary" size={24} />
    },
    {
      type: 'internship',
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Code (GSSoC 2024)',
      location: 'Remote',
      period: 'Sep 2024 - Nov 2024',
      description: 'Worked on issue tracking, Git workflows, open-source collaboration.',
      skills: ['Git', 'Open Source', 'Collaboration', 'Issue Tracking'],
      icon: <Users className="text-accent" size={24} />
    },
    {
      type: 'internship',
      title: 'Open Source Contributor',
      company: 'Winter of Blockchain 2024',
      location: 'Remote',
      period: 'Sep 2024 - Nov 2024',
      description: 'Contributed to blockchain-related open-source projects.',
      skills: ['Blockchain', 'Open Source', 'Distributed Systems'],
      icon: <Briefcase className="text-primary" size={24} />
    }
  ];

  const volunteer = [
    {
      title: 'Volunteer',
      organization: 'Rotary International',
      period: 'Jan 2019 - Feb 2019',
      description: 'Helped with Rs.20,000 worth of food and essentials distribution during "Joy of Giving - Annapoorna".',
      impact: 'Community Service',
      icon: <Heart className="text-red-500" size={24} />
    },
    {
      title: 'Fundraiser',
      organization: 'Indian Development Foundation (IDF)',
      period: 'Apr 2019 - May 2019',
      description: 'Raised Rs.20,100 to support adolescent hygiene education.',
      impact: 'Social Impact',
      icon: <Heart className="text-red-500" size={24} />
    }
  ];

  const achievements = [
    {
      title: 'Merit Scholarship',
      organization: 'VIT Vellore',
      description: '2 consecutive years',
      icon: <Award className="text-yellow-500" size={24} />
    },
    {
      title: 'Branch Topper',
      organization: 'VIT Vellore',
      description: 'IT (2023-24) and CSE Core (2024-25)',
      icon: <Award className="text-yellow-500" size={24} />
    },
    {
      title: 'Senior Core Member',
      organization: 'ADG VIT (Technical Club)',
      description: 'Sponsorship Domain',
      icon: <Users className="text-blue-500" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey through internships, contributions, and achievements
          </p>
        </div>

        {/* Internships & Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            Internships & Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`glass-card hover:shadow-primary transition-all duration-500 group animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-gradient-secondary group-hover:scale-110 transition-transform duration-300">
                        {exp.icon}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h4>
                          <p className="text-lg text-muted-foreground font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            Volunteer Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteer.map((vol, index) => (
              <Card
                key={index}
                className={`glass-card hover:shadow-accent transition-all duration-500 group animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-accent/20 group-hover:scale-110 transition-transform duration-300">
                      {vol.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
                        {vol.title}
                      </h4>
                      <p className="text-muted-foreground font-semibold mb-2">
                        {vol.organization}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar size={14} />
                        <span>{vol.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {vol.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {vol.impact}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            Awards & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`glass-card hover:shadow-primary transition-all duration-500 group text-center animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground font-semibold mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;