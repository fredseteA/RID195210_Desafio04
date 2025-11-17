const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
