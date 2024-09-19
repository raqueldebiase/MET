'use client';

import { useState, useEffect } from "react";
import axios from "axios";

// Interface para definir o tipo da obra de arte
interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
  accessionYear: string;
  isPublicDomain?: boolean;
  artistDisplayName: string;
  dimensions: string;
  country: string;
  repository: string;
  medium: string;
}

// Hook para buscar obras de arte com base no título
export const useArtworkByTitle = (title: string) => {
  const [data, setData] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      setError(null);

      try {
        // Buscar IDs de obras com o título específico
        const searchResponse = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?q=annunciation&hasImages=true`
        );        
        const objectIds: number[] = searchResponse.data.objectIDs || [];

        if (objectIds.length === 0) {
          // Nenhuma obra encontrada com o título especificado
          setData([]);
          setLoading(false);
          return;
        }

        // Buscar detalhes das obras usando os IDs
        const artworksData = await Promise.all(
          objectIds.map(async (id: number) => {
            try {
              const response = await axios.get(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
              );
              const art = response.data;
              return {
                id: art.objectID,
                title: art.title,
                imageUrl: art.primaryImage,
                accessionYear: art.accessionYear,
                isPublicDomain: art.isPublicDomain,
                artistDisplayName: art.artistDisplayName,
                dimensions: art.dimensions,
                country: art.country,
                repository: art.repository,
                medium: art.medium,
              };
            } catch (error) {
              console.error(`Erro ao buscar detalhes para o ID ${id}:`, error);
              return null;
            }
          })
        );

        // Filtrar apenas as obras válidas com URLs de imagem
        const filteredArtworks = artworksData
          .filter((art) => art !== null)
          .filter((art) => art!.imageUrl && art!.imageUrl.startsWith('http'));

        setData(filteredArtworks as Artwork[]);
      } catch (error) {
        console.error('Erro ao buscar as obras de arte:', error);
        setError('Erro ao carregar as obras de arte.');
      } finally {
        setLoading(false);
      }
    };

    // Executa a busca apenas se um título for fornecido
    if (title) {
      fetchArtworks();
    }
  }, [title]);

  return { data, loading, error };
};
