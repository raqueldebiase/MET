// src/app/hooks/useArtworkByAccessionNumber.ts

'use client';

import { useState, useEffect } from "react";
import axios from "axios";

// Interface para definir o tipo da obra de arte
interface Artwork {
  accessionNumber: string;
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

// Hook para buscar detalhes das obras usando números de acesso
export const useArtworkByAccessionNumber = (accessionNumbers: string[]) => {
  const [data, setData] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      setError(null);

      try {
        const artworksData = await Promise.all(
          accessionNumbers.map(async (accessionNumber) => {
            try {
              // Buscar o objectID usando o accessionNumber
              const searchResponse = await axios.get(
                `https://collectionapi.metmuseum.org/public/collection/v1/search?accessionNumber=${accessionNumber}`
              );
              
              const objectID = searchResponse.data.objectIDs?.[0]; // Pegue o primeiro objectID encontrado

              if (!objectID) {
                return null; // Se não encontrar o objectID, retornar null
              }

              // Buscar detalhes da obra usando o objectID
              const detailsResponse = await axios.get(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
              );

              const art = detailsResponse.data;
              return {
                accessionNumber: art.accessionNumber,
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
              console.error(`Erro ao buscar detalhes para o número de acesso ${accessionNumber}:`, error);
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

    if (accessionNumbers.length > 0) {
      fetchArtworks();
    }
  }, [accessionNumbers]);

  return { data, loading, error };
};