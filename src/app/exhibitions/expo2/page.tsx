import CapitalLetters from "@/app/components/organisms/CapitalLetters";
import Image from "next/image";

const Expo2Page = () => {
  const exhibition = {
    title: 'Capital Letters: the right way to begin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.',
  };

  const imageUrl = "/img/bg/img-destak-expo2.jpg";

  return (
    <section>
      <div className="relative h-screen bg-expo-2 bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative h-full z-10 p-24 flex items-end justify-end text-gray-100">
          <div className="max-w-lg text-right backdrop-blur-md bg-white/20 rounded-lg p-8">
            <h1 className="text-4xl font-bold">{exhibition.title}</h1>
            <p className="mt-4">{exhibition.description}</p>
          </div>
        </div>
      </div>

      <div className="intro container mx-auto py-24">
        <h2 className="text-3xl font-bold mb-8">Introduction</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Primeira Coluna */}
          <div className="col-span-1">
            <Image
              src={imageUrl}
              alt="Exhibition Image"
              width={600}
              height={400}
              layout="intrinsic"
              quality={100}
              className="w-full h-auto rounded-sm mb-4"
            />
          </div>

          {/* Segunda Coluna */}
          <div className="col-span-1 flex flex-col gap-8">
            <div className="flex-1">
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper.
              </p>
            </div>
            <div className="flex-1 flex items-end ">
              <p>
                              The Annunciation
                Artist: Hans Memling

                Year: ca. 1465–70

                Medium: Oil on wood

                Dimensions: 73 1/4 x 45 1/4 in. (186.1 x 114.9 cm)

                Metropolitan Museum of Art, New York, NY
              </p>
            </div>
          </div>
        </div>
      </div>
      <CapitalLetters />
    </section>
  );
};

export default Expo2Page;
