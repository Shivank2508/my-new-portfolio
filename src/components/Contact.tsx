import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tyagishivank1212@gmail.com",
      link: "mailto:tyagishivank1212@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+918923212675",
      link: "tel:+918923212675"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chandigarh",
      link: "https://maps.app.goo.gl/bndB83iSSQaskbKw8"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Shivank2508",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shivank-tyagi-a75ba91a0/",
      color: "hover:text-blue-accent"
    },
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thanks for reaching out. I’ll get back to you soon.",

      color: "#ffffff",
      confirmButtonText: "Okay",
      customClass: {
        popup: 'swal2-dark-popup',
        confirmButton: 'swal2-gradient-button'
      },
    });


    // Optional: Clear form or do any logic here
    console.log("Form submitted");
  };


  return (
    <section id="contact" className="py-20 px-6 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
                Whether you have a project in mind or just want to chat about frontend
                development, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.link === "#" ? (
                      <p className="text-muted-foreground">{info.value}</p>
                    ) : (
                      <a
                        href={info.link}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 transform`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-bg border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter Your First Name"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter Your Last Name"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Let's work together!"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello..."
                    className="bg-background/50 border-border focus:border-primary min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 glow-effect"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;