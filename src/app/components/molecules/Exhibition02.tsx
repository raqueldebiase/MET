// components/molecules/DutchArtExhibition.tsx

import { useRouter } from 'next/router'; // Importar useRouter
import { ButtonGoToExpo } from '../atoms/ButtonGoToExpo';

export const Exhibition02: React.FC = () => {
  
  return (
    <section
      className="
      h-screen 
      text-gray-100 
      bg-top 
      bg-no-repeat 
      bg-manuscript-exhibition 
      bg-cover
      flex 
      flex-wrap 
      items-end
      justify-end
      p-24
      "
    >
      <div className="max-w-96">
        <div className="info-expo mb-8">
          <h2 className='text-4xl font-bold'>MANUSCRITOS MEDIEVAIS</h2>
        </div>
        <p className="text-white text-1xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.
        </p>
        <div className="text-end">
          <ButtonGoToExpo href="/dutch-artworks" />
        </div>
        
      </div>

    </section>
  );
};
