
import { ButtonDetails } from "../atoms/ButtonDetails";
import { ButtonExpand } from '../atoms/ButtonExpand';

interface HeroProps {
  onButtonClick: () => void;
  imageUrl: string;
}


export const Hero: React.FC<HeroProps> = ({imageUrl, onButtonClick}) => {
  const fallbackImageUrl = '/fallback-image.jpg';
  return (
    <section className="h-screen flex items-center">
        <div className="max-w-96">
          <div className="card mb-8">
            <h1 className="text-4xl font-bold">TEXTO INICIAL</h1>
            <h2>ARTISTA</h2>
            <h3>ANO</h3>
          </div>
          <p className="text-white text-2xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.</p>
          <ButtonDetails onClick={onButtonClick} />
          <ButtonExpand imageUrl={imageUrl || fallbackImageUrl} />
        </div>
        
    </section>
  );
};
