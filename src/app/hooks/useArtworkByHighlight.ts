'use client';

import { useState, useEffect } from "react";
import axios from 'axios';


export interface ArtworkByHighlight {
  id: number;  // Necessário
  title: string;
  imageUrl: string;
  objectDate: string;
  isPublicDomain?: boolean;  // Opcional
  artistDisplayName: string;
  dimensions: string;
  repository: string;  // Necessário
  medium: string;
  geographyType?: string;  // Opcional
  linkResource?: string;  // Opcional
  city: string;
  country: string;
}

// Função para burcar elementos aleatórios
const getRandomElements = <T,>(array: T[], count: number): T[] => {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Hook para buscar obras destacadas
export const useArtworkByHighlight = () => {
  const [artworks, setArtworks] = useState<ArtworkByHighlight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      let validArtworks: ArtworkByHighlight[] = [];
      let attempts = 0;

      try {
        // Buscar IDs de várias obras
        const searchResponse = await axios.get(
          'https://collectionapi.metmuseum.org/public/collection/v1/search?q=paintings&hasImages=true'
        );
        const allObjectIds: number[] = searchResponse.data.objectIDs;

        while (validArtworks.length < 6 && attempts < 5) {
          
          const randomObjectIds = getRandomElements(allObjectIds, 50);

          const artworksData = await Promise.all(
            randomObjectIds.map(async (id: number) => {
              try {
                const response = await axios.get(
                  `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
                );
                const data = response.data;
                return {
                  id: data.objectID,
                  title: data.title,
                  imageUrl: data.primaryImage,
                  objectDate: data.objectDate,
                  isPublicDomain: data.isPublicDomain,
                  artistDisplayName: data.artistDisplayName,
                  dimensions: data.dimensions,
                  repository: data.repository,
                  medium: data.medium,
                  geographyType: data.geographyType,
                  linkResource: data.linkResource,
                  city: data.city,
                  country: data.country
                } as ArtworkByHighlight;
              } catch (error) {
                console.error(`Error fetching details for ID ${id}:`, error);
                return null; // Retorne null se houver erro
              }
            })
          );

          
          const filteredArtworks = artworksData
            .filter((art) => art !== null)
            .filter((art) => art!.imageUrl && art!.imageUrl.startsWith('http'));

          validArtworks = [...validArtworks, ...filteredArtworks];
          validArtworks = validArtworks.slice(0, 6); 
          attempts++;
        }

       
        setArtworks(validArtworks as ArtworkByHighlight[]);
      } catch (error) {
        console.error('Erro ao buscar as obras de arte:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchArtworks();
  }, []);

 
  return { artworks, loading };
};
