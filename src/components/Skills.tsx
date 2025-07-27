import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'Java', 'C++', 'C', 'JavaScript'],
      color: 'primary'
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      color: 'accent'
    },
    {
      title: 'Data Science & ML',
      icon: '📊',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'Scikit-learn'],
      color: 'primary'
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'MySQL', 'Postman API', 'Docker'],
      color: 'accent'
    },
    {
      title: 'Cloud & APIs',
      icon: '☁️',
      skills: ['Gemini API', 'IBM WatsonX', 'AWS', 'REST APIs'],
      color: 'primary'
    },
    {
      title: 'Languages',
      icon: '🗣️',
      skills: ['English (Fluent)', 'Hindi (Native)', 'German (A1)'],
      color: 'accent'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`glass-card hover:shadow-${category.color} transition-all duration-500 group cursor-pointer transform hover:scale-105 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`transform transition-all duration-300 ${
                        hoveredCategory === category.title
                          ? 'translate-x-2 opacity-100'
                          : 'opacity-80'
                      }`}
                      style={{ 
                        transitionDelay: hoveredCategory === category.title 
                          ? `${skillIndex * 50}ms` 
                          : '0ms' 
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className={`w-full justify-center py-2 hover:bg-${category.color}/20 hover:text-${category.color} transition-all duration-300`}
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6">
              I'm always expanding my skill set through online courses, certifications, and hands-on projects.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-gradient-primary/10 border border-primary/20">
                <h4 className="font-semibold mb-2">Current Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced Machine Learning, Cloud Computing, and Modern Web Frameworks
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-accent/10 border border-accent/20">
                <h4 className="font-semibold mb-2">Next Learning Goals</h4>
                <p className="text-sm text-muted-foreground">
                  DevOps, Microservices Architecture, and Advanced AI/ML Techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;