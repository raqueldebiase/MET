'use client';

import { useState } from 'react'; 
import CapitalLetters from "@/app/components/organisms/CapitalLetters";
import { ButtonDetails } from "@/app/components/atoms/ButtonDetails";
import Image from "next/image";

const Expo2Page = () => {
  const exhibition = {
    title: 'Capital Letters: the right way to begin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.',
  };

  const imageUrl = "/img/bg/img-destak-expo2.jpg";

  const [showDetails, setShowDetails] = useState(false);
  const handleDetailsToggle = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <section>
      <div className="relative h-screen bg-expo-2 bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative h-full z-10 md:p-24 flex items-end md:items-center justify-end text-gray-100 ">
          <div className="max-w-lg text-left md:text-right backdrop-blur-md bg-white/20 rounded-sm p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold">{exhibition.title}</h1>
            <p className="mt-4">{exhibition.description}</p>
          </div>
        </div>
      </div>

      <div className="intro container mx-auto p-4 py-24">
        <h2 className="text-3xl md:font-bold mb-8">Introduction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primeira Coluna (Imagem) */}
          <div className="col-span-1 order-2 md:order-1"> 
            <Image
              src={imageUrl}
              alt="Exhibition Image"
              width={600}
              height={400}
              layout="intrinsic"
              quality={100}
              className="w-full h-auto rounded-sm"
            />
          </div>

          {/* Segunda Coluna (Texto e Botão) */}
          
            <div className="col-span-1 flex flex-col gap-8 order-1 md:order-2">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.
              </p>
            </div>
            
            {/* Botão e Informações Adicionais */}
            <div className="order-3 md:order-3"> 
              {showDetails && (  /* Renderizar somente quando showDetails for true */
                <div className="flex-1 flex items-end mb-4 text-gray-400">
                  <p>
                    The Annunciation<br />
                    Artist: Hans Memling<br />
                    Year: ca. 1465–70<br />
                    Medium: Oil on wood<br />
                    Dimensions: 73 1/4 x 45 1/4 in. (186.1 x 114.9 cm)<br />
                    Metropolitan Museum of Art, New York, NY
                  </p>
                </div>
              )}
              <ButtonDetails onClick={handleDetailsToggle} label={showDetails ? 'Less Details' : 'More Details'} />
            </div>
          
        </div>
      </div>
      <CapitalLetters />
    </section>
  );
};

export default Expo2Page;
