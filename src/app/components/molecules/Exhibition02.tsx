// components/molecules/DutchArtExhibition.tsx


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
      <div className=" w-1/3 backdrop-blur-md bg-white/30 rounded-lg p-8">
        <div className="info-expo mb-8">
          <h2 className='text-4xl text-gray-700 font-light tracking-wider'>Capital Letters</h2>
        </div>
        <p className="text-gray-900 text-1xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.
        </p>
        <div className="flex justify-end">
          <ButtonGoToExpo href="/exhibitions/expo2" />
        </div>
        
      </div>

    </section>
  );
};
