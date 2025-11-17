import { Github, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Meu contato:</p>
              <p className="text-lg font-semibold text-foreground">12 988888888</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email:</p>
              <p className="text-lg font-semibold text-foreground">xxx@xyz.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Globe size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
