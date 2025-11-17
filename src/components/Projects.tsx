import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Gerador de Memoriais (Next + TypeScript)",
      description: "Aplicação desenvolvida em Next e TypeScript que permite aos usuários criar memoriais personalizados de forma simples e intuitiva. Cada memorial é armazenado em um banco de dados e enviado para análise por e-mail, possibilitando ao cliente adquirir a versão final do conteúdo. A plataforma também oferece a opção de gerar um QR Code para uma placa metálica, conectando o memorial físico à versão digital.",
      image: "/remember.png",
      link: "https://remember-qr.vercel.app/"
    },
    {
      title: "Dashboard DNC (React + TypeScript)",
      description: "Dashboard interativo desenvolvido com React e TypeScript, criado como parte de um projeto da escola DNC. A aplicação apresenta visualizações organizadas, componentes reutilizáveis e uma interface eficiente para exibir dados de forma clara. Focado em boas práticas de desenvolvimento, o projeto destaca responsividade, arquitetura limpa e uso de estados e hooks modernos do React.",
      image: "/dashboard.png",
      link: "#"
    },
    {
      title: "Biblioteca de Memoriais (Next + TypeScript)",
      description: "Site público criado com Next e TypeScript para exibir os memoriais concluídos e adquiridos pelos usuários. A plataforma funciona como um repositório organizado e acessível, permitindo que qualquer pessoa visualize os tributos publicados. Cada memorial possui um link dedicado e integrado ao banco de dados, garantindo acesso rápido, seguro e permanente ao conteúdo registrado.",
      image: "/memoriais.png",
      link: "https://remember-memoriais.vercel.app/"
    },
    {
      title: "Site de Arquitetura (React + JavaScript)",
      description: "Projeto que simula um portfólio profissional de arquitetura, construído com React e JavaScript. A aplicação apresenta um layout elegante e moderno, organizado para destacar projetos visuais, imagens e descrições. Focado na experiência do usuário, o site demonstra domínio de componentes responsivos, roteamento, tipagem segura e boas práticas de desenvolvimento front-end.",
      image: "/arquitetura.png",
      link: "https://dnc-arq-fred.vercel.app/"
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
