

interface HeroProps {
  onButtonClick: () => void;
  imageUrl: string;
}


export const Hero: React.FC<HeroProps> = () => {

  return (
    <section className="md:h-screen flex items-center">
        <div className="max-w-96">
          <div className="card mb-8">
            <h1 className="text-4xl font-bold">TEXTO INICIAL</h1>
          </div>
          <p className="text-white text-lg tracking-wide mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.</p>
        </div>
        
    </section>
  );
};
