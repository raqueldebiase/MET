'use client';

import { useState, useEffect, useRef } from "react";
import axios from "axios";


export interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
  objectDate: string;
  isPublicDomain?: boolean;
  artistDisplayName: string;
  dimensions: string;
  country: string;
  repository: string;
  medium: string;
}


export const useArtworkById = (ids: number[]) => {
  const [data, setData] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const hasFetched = useRef(false); // garantir que a requisição seja feita apenas uma vez

  useEffect(() => {
    if (hasFetched.current) return; // Evita a execução se já foi feito o fetch

    const fetchArtworks = async () => {
      setLoading(true);
      setError(null);

      try {
        
        const uniqueIds = Array.from(new Set(ids));

       
        const artworksData = await Promise.all(
          uniqueIds.map(async (id) => {
            try {
              const response = await axios.get(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
              );
              const art = response.data;
              return {
                id: art.objectID,
                title: art.title,
                imageUrl: art.primaryImage,
                objectDate: art.objectDate,
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

        
        const filteredArtworks = artworksData
          .filter((art) => art !== null)
          .filter((art) => art!.imageUrl && art!.imageUrl.startsWith('http'))
          .slice(0, 12);

        setData(filteredArtworks as Artwork[]);
      } catch (error) {
        console.error('Erro ao buscar as obras de arte:', error);
        setError('Erro ao carregar as obras de arte.');
      } finally {
        setLoading(false);
        hasFetched.current = true; 
      }
    };

    fetchArtworks();
  }, [ids]); 

  return { data, loading, error };
};
