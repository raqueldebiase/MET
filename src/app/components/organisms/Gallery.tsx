// Gallery.tsx
import { ArtGallery } from './ArtGallery';

interface GalleryProps {
  title: string;
  description: string;
  onCardClick: (id: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ title, description, onCardClick }) => {
  return (
    <section className="gallery-section py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-500 mt-4 mb-16">{description}</p>
        </div>
        <ArtGallery onCardClick={onCardClick} />
      </div>
    </section>
  );
};
