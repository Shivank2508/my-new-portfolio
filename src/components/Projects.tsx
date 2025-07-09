import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Zap, Layers, Terminal } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bhashni",
      description: " Developed the official website for Bhashni, a government initiative aimed at facilitating language exchange and promoting linguistic diversity.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: ["React.js", "TypeScript", "Bootstrap", "Redux"],
      liveUrl: "https://bhashini.gov.in/bhashadaan/en/home",
      githubUrl: null,
      featured: true
    },
    {
      title: "Soul Of Braj",
      description: "Developed the website for Soul of Braj Federation to highlight their non-profit initiatives and boost community engagement",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      technologies: ["React.js", "Firebase", "Material-UI", "Context API"],
      liveUrl: "https://www.sobf.in/",
      githubUrl: null,
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard showing current conditions and forecasts with beautiful animations and charts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      technologies: ["React.js", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A creative portfolio website showcasing modern design principles and smooth animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "Styled Components"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/social-dashboard",
      featured: false
    },
    {
      title: "Learning Platform",
      description: "An online learning platform with course management, progress tracking, and interactive content.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/learning-platform",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in frontend development
            and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="card-bg border-border card-hover overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <Badge variant="outline" className="border-primary text-primary">
                    Featured
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  {project.githubUrl &&
                    < Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={project.title} className="card-bg border-border card-hover overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
