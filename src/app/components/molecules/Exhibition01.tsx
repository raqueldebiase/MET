// components/molecules/DutchArtExhibition.tsx

import { ButtonGoToExpo } from '../atoms/ButtonGoToExpo';

export const Exhibition01: React.FC = () => {
  return (
    <section
      className="
        h-screen 
        md:h-screen 
        text-gray-100 
        bg-no-repeat 
        bg-dutch-exhibition 
        bg-cover 
        flex 
        items-end 
        justify-end 
        p-4 md:p-24 
        bg-[length:150%] 
        md:bg-cover 
        bg-[20%_50%]
        md:bg-center
      "
      aria-labelledby="exhibition-title"
    >
      {/* Container do conteúdo com largura responsiva */}
      <div className="w-full md:w-1/3 backdrop-blur-md bg-white/30 p-3 flex flex-col gap-4 rounded-lg shadow-md">
        {/* Informações da exposição */}
        <div className="info-expo mb-4 md:mb-8">
          <h2 id="exhibition-title" className="text-2xl md:text-4xl mb-2 font-light tracking-wider">The Annunciations</h2>
          <p className="text-gray-900 text-sm md:text-lg md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. 
            Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.
          </p>
        </div>
        {/* Botão da Exposição */}
        <div className="flex justify-end ">
          <ButtonGoToExpo href="/exhibitions/expo1" />
        </div>
      </div>
    </section>
  );
};
