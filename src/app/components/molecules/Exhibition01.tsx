// components/molecules/DutchArtExhibition.tsx

import { ButtonGoToExpo } from '../atoms/ButtonGoToExpo';

export const Exhibition01: React.FC = () => {
  return (
    <section
      className="
        h-screen 
        text-gray-100 
        bg-center 
        bg-no-repeat 
        bg-dutch-exhibition 
        bg-cover
        flex 
        flex-wrap 
        items-end
        justify-end
        p-24
      "
    >
      <div className=" w-1/3 backdrop-blur-md bg-white/30 rounded-lg p-8">
        <div className="info-expo mb-8">
          <h2 className='text-4xl font-light tracking-wider'>The Annunciations</h2>
        </div>
        <p className="text-gray-900 text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.
        </p>
        <div className="flex justify-end">
          <ButtonGoToExpo href="/exhibitions/expo1" />
        </div>
      </div>
    </section>
  );
};
