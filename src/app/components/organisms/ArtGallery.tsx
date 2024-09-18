import { useState, useEffect } from 'react';
import { ArtCard } from '../molecules/ArtCard';
import axios from 'axios';

interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
  date?: string;
  isHighlight?: boolean;
}

interface ArtGalleryProps {
  onCardClick: (id: number) => void;
}

const getRandomElements = <T,>(array: T[], count: number): T[] => {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const ArtGallery: React.FC<ArtGalleryProps> = ({ onCardClick }) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      let validArtworks: Artwork[] = [];
      let attempts = 0;

      try {
        // Buscar IDs de várias obras
        const searchResponse = await axios.get(
          'https://collectionapi.metmuseum.org/public/collection/v1/search?q=paintings&hasImages=true'
        );
        const allObjectIds: number[] = searchResponse.data.objectIDs;

        while (validArtworks.length < 6 && attempts < 5) {
          // Buscar 50 IDs aleatórios para tentar garantir 6 válidos
          const randomObjectIds = getRandomElements(allObjectIds, 50); 
          console.log('Random Object IDs:', randomObjectIds);

          const artworksData = await Promise.all(
            randomObjectIds.map(async (id: number) => {
              try {
                const response = await axios.get(
                  `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
                );
                const data = response.data;
                console.log(`Data for ID ${id}:`, data);
                return {
                  id: data.objectID,
                  title: data.title,
                  imageUrl: data.primaryImage,
                  date: data.objectDate,
                  isHighlight: data.isHighlight,
                };
              } catch (error) {
                console.error(`Error fetching details for ID ${id}:`, error);
                return null; // Retorne null se houver erro
              }
            })
          );

          // Filtrar para incluir apenas as obras destacadas com URLs de imagem válidas
          const filteredArtworks = artworksData
            .filter((art) => art !== null)
            .filter((art) => art!.isHighlight) 
            .filter((art) => art!.imageUrl && art!.imageUrl.startsWith('http'));

          validArtworks = [...validArtworks, ...filteredArtworks];
          validArtworks = validArtworks.slice(0, 6); // Certifique-se de que temos no máximo 6
          attempts++;
        }

        // Atualizar o estado com as 6 obras válidas
        setArtworks(validArtworks as Artwork[]);
      } catch (error) {
        console.error('Erro ao buscar as obras de arte:', error);
      } finally {
        setLoading(false); // Atualiza o estado de carregamento
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        artworks.map((art) => (
          <ArtCard
            key={art.id}
            imageUrl={art.imageUrl}
            title={art.title}
            date={art.date}
            onButtonClick={() => onCardClick(art.id)}
          />
        ))
      )}
    </div>
  );
};
