import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import BackButton from '../atoms/BackButton';
import { ButtonExpand } from '../atoms/ButtonExpand'; // Importe o botão de expandir

interface Artwork {
  title: string;
  artistDisplayName: string;
  objectDate: string;
  city: string;
  country: string;
  medium: string;
  dimensions: string;
  repository: string;
  isPublicDomain?: boolean;
  imageUrl: string;
}

interface ArtworkDetailsProps {
  artwork: Artwork;
  onBack: () => void;
}

const ArtworkDetails: React.FC<ArtworkDetailsProps> = ({ artwork, onBack }) => {
  const [isMobile, setIsMobile] = useState(false);
  const fallbackImageUrl = '/fallback-image.jpg'; // Caso a imagem falhe

  // Função para detectar se está no mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verifica o tamanho da tela inicialmente
    handleResize();

    // Adiciona um event listener para verificar o tamanho da tela em tempo real
    window.addEventListener('resize', handleResize);

    // Remove o event listener na limpeza do efeito
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pt-16 md:h-screen flex justify-center items-center bg-primary">
      <section className="px-8 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Imagem centralizada com ajuste de altura */}
        <div className="w-full md:w-2/3 md:flex md:justify-center">
          <div className="max-h-full max-w-full overflow-hidden">
            {isMobile ? (
              // Exibir o botão de expandir no mobile
              <>
                <img
                  src={artwork.imageUrl || fallbackImageUrl}
                  alt={artwork.title}
                  className="rounded-sm max-h-full object-contain"
                />
                <div className="mt-4 text-center md:text-left">
                  <ButtonExpand imageUrl={artwork.imageUrl || fallbackImageUrl} /> {/* Botão para expandir */}
                </div>
              </>
            ) : (
              // Exibir o InnerImageZoom no desktop
              <InnerImageZoom
                src={artwork.imageUrl}
                zoomType="click"
                zoomScale={2}
                zoomSrc={artwork.imageUrl}
                fadeDuration={150}
                className="rounded-sm max-h-full object-contain"
              />
            )}
          </div>
        </div>

        {/* Detalhes da obra */}
        <div className="w-full md:w-1/3 space-y-4 md:text-end md:text-left">
          <h3 className="text-xl md:text-3xl text-white font-bold">{artwork.title}</h3>
          
          <p className="text-xl text-gray-300">
            <span className="font-semibold">Artist:</span> {artwork.artistDisplayName || 'Unknown Artist'}
          </p>

          <nav>
            <ul className="text-md text-gray-400 space-y-1">
              <li><span className="font-semibold">Date:</span> {artwork.objectDate || 'N/A'}</li>
              <li><span className="font-semibold">City:</span> {artwork.city || 'N/A'}</li>
              <li><span className="font-semibold">Country:</span> {artwork.country || 'N/A'}</li>
              <li><span className="font-semibold">Medium:</span> {artwork.medium || 'N/A'}</li>
              <li><span className="font-semibold">Dimensions:</span> {artwork.dimensions || 'N/A'}</li>
              <li><span className="font-semibold">Collection:</span> {artwork.repository || 'N/A'}</li>
              <li><span className="font-semibold">Public Domain:</span> {artwork.isPublicDomain ? 'Yes' : 'No'}</li>
            </ul>
          </nav>
          
          <div className='pt-12'>
            <BackButton onClick={onBack} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtworkDetails;
