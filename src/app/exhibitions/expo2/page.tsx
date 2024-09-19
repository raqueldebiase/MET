import AnnunciationExpo from "@/app/components/organisms/AnnunciationExpo";

const Expo2Page = () => {
  const exhibition = {
    title: 'Capital Letters: the right way to begin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.',
  };

  return (
    <section>
      <div className="relative h-screen bg-expo-1 bg-cover bg-no-repeat bg-top">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30"></div>
        <div className="relative h-full z-10 p-24 flex items-center justify-end text-gray-100">
          <div className="max-w-lg text-right">
            <h1 className="text-4xl font-bold">{exhibition.title}</h1>
            <p className="mt-4">{exhibition.description}</p>
          </div>
        </div>
      </div>

      <div className="intro container mx-auto py-24 flex px-4 gap-24">
        <div className="intro-txt mb-8 w-2/3">
          <h2 className="text-3xl font-bold mb-8">Introduction</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper.
          </p>
        </div>
        
        <div className="mt-8 salmo w-1/3">
          <p className="text-gray-300  italic">
            26 In the sixth month, the angel Gabriel was sent from God to a city in Galilee called Nazareth,
            27 to a virgin betrothed to a man of the house of David, whose name was Joseph; the virgins name was Mary.
            28 And coming to her, the angel said, Rejoice, highly favored one! The Lord is with you. 29 But when she saw him, she was greatly troubled at his words and wondered what kind of greeting this might be.
            30 Then the angel said to her, Do not be afraid, Mary, for you have found favor with God.
          </p>
        </div>
      </div>
      <AnnunciationExpo />
    </section>
  );
};

export default Expo2Page;
