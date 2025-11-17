const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Oi! Eu sou o Frederico Luna
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Pode me chamar de Fred.

Sempre fui aquele cara curioso por tecnologia, desmontando tudo pra entender como funcionava (e às vezes montando de volta também 😅). Com o tempo, essa curiosidade virou caminho: comecei no Técnico em Informática, estudei bastante, dei aulas de informática e hoje sigo firme na graduação de Engenharia de Software pela UTFPR.

Minha transição do Suporte Técnico para o Desenvolvimento foi natural: descobri no front-end a chance de transformar ideias em interfaces vivas e no back-end a lógica que dá alma aos sistemas. Hoje trabalho com Suporte Técnico e Desenvolvimento em Java e estou mergulhando cada vez mais no universo da programação para fortalecer minha lógica e visão de arquitetura.

Aqui neste portfólio você vai encontrar alguns dos meus projetos — cada um carregando um pedaço da minha jornada, da curiosidade inicial até o código mais polido. Fique à vontade para explorar; a casa é sua. 🚀💻
          </p>
          <button className="px-8 py-3 bg-gradient-primary text-foreground font-medium rounded-full hover:opacity-90 transition-opacity">
            Saber mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
