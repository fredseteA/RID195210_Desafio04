import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "PROJETO 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "PROJETO 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "PROJETO 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "PROJETO 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
