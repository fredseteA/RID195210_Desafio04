import { Github, Linkedin, Globe } from "lucide-react";

const AboutMe = () => {
  const timeline = [
    {
      year: "2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      year: "2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      year: "2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      year: "2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-foreground mb-16">
          Sobre mim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.year}
                </h3>
                <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <p className="text-foreground mb-1">Meu contato:</p>
              <p className="text-foreground font-medium">12 988888888</p>
            </div>
            <div>
              <p className="text-foreground mb-1">Email:</p>
              <p className="text-foreground font-medium">xxx@xyz.com</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://yourwebsite.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
