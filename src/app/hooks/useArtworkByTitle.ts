'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
  date?: string;
  isHighlight?: boolean;
}

export const useArtworkByTitle = (title: string) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true); // Inicia o carregamento
      setError(null); // Reseta o erro

      try {
        // Buscar IDs de obras com o título específico
        const searchResponse = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(title)}&hasImages=true`
        );
        const objectIds: number[] = searchResponse.data.objectIDs || [];

        if (objectIds.length === 0) {
          // Nenhuma obra encontrada com o título especificado
          setArtworks([]);
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
              const data = response.data;
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

        // Filtrar para incluir apenas as obras com URLs de imagem válidas
        const filteredArtworks = artworksData
          .filter((art) => art !== null)
          .filter((art) => art!.imageUrl && art!.imageUrl.startsWith('http'));

        setArtworks(filteredArtworks as Artwork[]);
      } catch (error) {
        console.error('Erro ao buscar as obras de arte:', error);
        setError('Erro ao carregar as obras de arte.');
      } finally {
        setLoading(false); // Atualiza o estado de carregamento
      }
    };

    if (title) {
      fetchArtworks();
    }
  }, [title]);

  return { artworks, loading, error };
};
