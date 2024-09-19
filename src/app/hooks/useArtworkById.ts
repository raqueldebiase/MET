'use client';

import { useState, useEffect, useRef } from "react";
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

// Hook para buscar obras de arte com base na lista de IDs
export const useArtworkById = (ids: number[]) => {
  const [data, setData] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false); 

  useEffect(() => {
    if (hasFetched.current) return;
    const fetchArtworks = async () => {
      if (ids.length === 0) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Buscar detalhes das obras usando os IDs
        const artworksData = await Promise.all(
          Array.from(new Set(ids)) // Garantir que os IDs sejam únicos
            .map(async (id) => {
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
          .filter((art) => art!.imageUrl && art!.imageUrl.startsWith('http'))
          .slice(0, 10); // Limitar a 10 obras

        setData(filteredArtworks as Artwork[]);
      } catch (error) {
        console.error('Erro ao buscar as obras de arte:', error);
        setError('Erro ao carregar as obras de arte.');
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [ids]);

  return { data, loading, error };
};
