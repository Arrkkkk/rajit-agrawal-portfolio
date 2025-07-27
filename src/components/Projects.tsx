import { useState } from 'react';
import { ExternalLink, Github, Lightbulb, DollarSign, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Multi AI Chatbot',
      description: 'A web application integrating multiple APIs for multi-AI interactions via a single interface. Built with modern web technologies and streamlined user experience.',
      icon: <Lightbulb className="text-primary" size={32} />,
      technologies: ['Python', 'Streamlit', 'Multiple APIs', 'Web Integration'],
      features: [
        'Multiple AI model integration',
        'Unified chat interface',
        'Real-time responses',
        'API management system'
      ],
      github: 'https://github.com/Arrkkkk/Multi-AI-Chatbot',
      demo: 'https://multi-ai-chatbot-axtech.streamlit.app/'
    },
    {
      title: 'Personal Finance Tip Generator',
      description: 'AI-based personalized budgeting advice system using Gemini API. Provides intelligent financial recommendations based on user data and spending patterns.',
      icon: <DollarSign className="text-accent" size={32} />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
      features: [
        'Personalized financial advice',
        'Budget optimization',
        'Expense tracking insights',
        'AI-powered recommendations'
      ],
      github: 'https://github.com/Arrkkkk/Personal-Finance-Tip-Generator-by-Axtech',
      demo: '#'
    },
    {
      title: 'GameHub',
      description: 'A desktop application featuring four classic mini-games with GUI support using Tkinter. Engaging gaming experience with modern interface design.',
      icon: <Gamepad2 className="text-primary" size={32} />,
      technologies: ['Python', 'Tkinter', 'GUI Development', 'Game Logic'],
      features: [
        'Four classic games',
        'Modern GUI interface',
        'Score tracking system',
        'User-friendly design'
      ],
      github: 'https://github.com/Arrkkkk/GameHub-by-Axtech',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my development journey through innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass-card transition-all duration-500 group cursor-pointer transform hover:scale-105 animate-slide-up ${
                hoveredProject === index ? 'shadow-glow-primary' : 'hover:shadow-primary'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-secondary group-hover:animate-glow transition-all duration-300">
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={feature}
                        className={`text-xs text-muted-foreground flex items-center gap-2 transition-all duration-300 ${
                          hoveredProject === index 
                            ? 'translate-x-2 opacity-100' 
                            : 'opacity-70'
                        }`}
                        style={{ 
                          transitionDelay: hoveredProject === index 
                            ? `${featureIndex * 50}ms` 
                            : '0ms' 
                        }}
                      >
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                  </Button>
                  {project.title === 'Multi AI Chatbot' && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and contributing to open-source. 
              Check out my GitHub for the latest updates!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/Arrkkkk?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;