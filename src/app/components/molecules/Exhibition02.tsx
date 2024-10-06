// components/molecules/DutchArtExhibition.tsx


import { ButtonGoToExpo } from '../atoms/ButtonGoToExpo';

export const Exhibition02: React.FC = () => {
  
  return (
    <section
      className="
      h-screen
      md:h-screen 
      text-primary
      bg-top 
      bg-no-repeat 
      bg-manuscript-exhibition 
      bg-cover
      flex 
      items-end 
      justify-end 
      p-4 md:p-24 
      bg-[length:120%] 
      md:bg-[30%_top]
      md:bg-cover 
      bg-top
      bg-[20%_50%]
      
"
    >
      {/* Container do conteúdo com largura responsiva */}
      <div className="w-full md:w-1/3 backdrop-blur-md bg-white/30 p-3 flex flex-col gap-4 rounded-lg shadow-md">
        {/* Informações da exposição */}
        <div className="info-expo mb-4 md:mb-8">
          <h2 id="exhibition-title" className="text-2xl md:text-4xl mb-2 font-light tracking-wider">Cover Letters</h2>
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
