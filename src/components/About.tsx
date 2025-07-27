import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm constantly learning and building
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science and Engineering student at VIT Vellore with a strong academic record (CGPA: 9.81). 
                My passion lies in full-stack development, artificial intelligence, and open-source contributions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through various internships and projects, I've gained hands-on experience in modern technologies 
                and collaborated with teams to build impactful solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card hover:shadow-primary transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Education</h4>
                    <p className="text-muted-foreground">B.Tech CSE, VIT Vellore</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} />
                      <span>2023 - 2027</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-accent transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-accent group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">CGPA</h4>
                    <p className="text-muted-foreground">9.81 / 10.0</p>
                    <p className="text-sm text-muted-foreground mt-1">Merit Scholarship Recipient</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-primary transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">Vellore, Tamil Nadu</p>
                    <p className="text-sm text-muted-foreground mt-1">Open to remote opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">What Drives Me</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Constantly exploring new technologies and pushing boundaries
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Contributing to open-source and working with diverse teams
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="font-semibold mb-2">Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Always eager to learn and share knowledge with others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;