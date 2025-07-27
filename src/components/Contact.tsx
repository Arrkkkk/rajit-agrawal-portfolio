import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      value: 'rajitagrawal2005@gmail.com',
      link: 'mailto:rajitagrawal2005@gmail.com'
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      title: 'Phone',
      value: '+91 84509 38936',
      link: 'tel:+918450938936'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Location',
      value: 'Vellore, Tamil Nadu',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Arrkkkk',
      color: 'hover:text-primary'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/rajit-agrawal-639bab28a/',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Code size={24} />,
      name: 'LeetCode',
      url: 'https://leetcode.com/u/RA_Ark/',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always open to new opportunities and conversations.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={contact.title}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-secondary/50 hover:bg-gradient-secondary transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-primary/20 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{contact.title}</h4>
                      <a
                        href={contact.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className={`hover:scale-110 transition-all duration-300 ${social.color}`}
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
                  >
                    <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm currently seeking internship opportunities, freelance projects, 
              and open-source collaborations. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="mailto:rajitagrawal2005@gmail.com">
                  <Mail size={20} className="mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300"
                asChild
              >
                <a href="tel:+918450938936">
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;