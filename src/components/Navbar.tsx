import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#projetos" className="text-foreground hover:text-muted-foreground transition-colors">
              Projetos
            </a>
            <a href="#tecnologias" className="text-foreground hover:text-muted-foreground transition-colors">
              Tecnologias
            </a>
            <a href="#sobre" className="text-foreground hover:text-muted-foreground transition-colors">
              Sobre mim
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/fredseteA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/fredericol/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
