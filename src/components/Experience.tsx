import { Calendar, MapPin, ExternalLink, Code, Zap, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    title: "React.js Developer",
    company: "Innovative Incentives & Rewards Pvt Ltd",
    location: "Noida, India",
    duration: "July 2023 - Present",
    type: "Full-time",
    description: "Developed and maintained responsive React applications. Integrated REST APIs using React Query and improved UI performance with Redux.",
    technologies: ["React.js", "Redux", "React Query", "JavaScript", "REST API", "Bootstrap"],
    achievements: [
      "Enhanced app performance and scalability",
      "Integrated React Query for efficient API data handling",
      "Collaborated with designers for pixel-perfect UI",
      "Participated in agile development and code reviews"
    ],
    icon: Code
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Insphere Solutions Pvt. Ltd.",
    location: "Gurgaon, India",
    duration: "March 2022 - June 2023",
    type: "Full-time",
    description: "Migrated legacy systems to React. Built reusable components and optimized frontend workflows.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API", "Tailwind CSS"],
    achievements: [
      "Led migration of legacy app to modern React stack",
      "Improved frontend maintainability with reusable components",
      "Worked closely with backend team for seamless API integration"
    ],
    icon: Zap
  }
];


const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="terminal-window max-w-md mx-auto mb-8">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-terminal-green text-xs ml-2">~/career-journey</span>
              </div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-terminal-green">
                $ cat experience.log
              </div>
              <div className="text-muted-foreground mt-2">
                Loading professional timeline...
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through code, innovation, and continuous learning in the tech industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-primary opacity-30 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative fade-in-up card-hover ${index % 2 === 0 ? 'md:ml-20' : 'md:ml-20'
                  }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block glow-effect"></div>

                <Card className="card-bg border-primary/20 neon-border">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                          <exp.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl gradient-text mb-1">
                            {exp.title}
                          </CardTitle>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">{exp.company}</span>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-accent/10 border-accent/30 text-accent hover:bg-accent/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="code-block p-6 max-w-md mx-auto">
            <div className="font-mono text-sm">
              <div className="text-code-blue">
                <span className="text-neon-purple">const</span> nextOpportunity =
              </div>
              <div className="text-primary ml-4">
                "Ready for new challenges!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;