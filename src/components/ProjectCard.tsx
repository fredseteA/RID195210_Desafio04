interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-card-foreground text-center">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-gradient-primary text-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-center text-sm"
      >
        Clique aqui
      </a>
    </div>
  );
};

export default ProjectCard;
