import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Full Stack Developer',
    'AI/ML Enthusiast', 
    'Open Source Contributor',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-gradient-accent opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 rounded-full bg-gradient-primary opacity-30 animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Rajit Agrawal</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
              I'm a{' '}
              <span className="text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Computer Science student at VIT Vellore with a passion for building 
              innovative solutions and contributing to open-source projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 transition-all duration-300"
              onClick={() => scrollToNext()}
            >
              View My Work
            </Button>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform duration-300 hover:bg-primary/20"
                asChild
              >
                <a href="mailto:rajitagrawal2005@gmail.com">
                  <Mail size={24} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform duration-300 hover:bg-primary/20"
                asChild
              >
                <a href="https://www.linkedin.com/in/rajit-agrawal-639bab28a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform duration-300 hover:bg-primary/20"
                asChild
              >
                <a href="https://github.com/Arrkkkk" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform duration-300 hover:bg-primary/20"
                asChild
              >
                <a href="tel:+918450938936">
                  <Phone size={24} />
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToNext}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ChevronDown size={32} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;