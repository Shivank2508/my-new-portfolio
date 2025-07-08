import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful interfaces with attention to user experience and accessibility."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and performance across all devices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using modern development workflows and tools."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with expertise in React.js and Next.js. 
            I love creating digital experiences that are not only visually appealing but also 
            highly functional and user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With several years of experience in frontend development, I've had the opportunity 
              to work on diverse projects ranging from small business websites to large-scale 
              web applications. My expertise lies in modern JavaScript frameworks, particularly 
              React.js and Next.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest technologies and 
              best practices in web development. I believe in writing clean, maintainable code 
              and creating user experiences that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-bg border-border card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center">Quick Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;