import { render, screen, fireEvent } from '@testing-library/react';
import { ArtCard } from '../molecules/ArtCard';
import { ArtworkByHighlight } from '@/app/hooks/useArtworkByHighlight';

const mockArtwork: ArtworkByHighlight = {
  id: 1,  // Adicionando a propriedade id
  imageUrl: 'http://example.com/image.jpg',
  title: 'Starry Night',
  objectDate: '1889',
  artistDisplayName: 'Vincent van Gogh',
  dimensions: '73.7 cm × 92.1 cm',
  repository: 'Museum of Modern Art',  // Adicionando a propriedade repository
  medium: 'Oil on canvas',
  geographyType: 'Europe', // Opcional, mas é uma boa prática incluí-lo
  linkResource: 'https://www.metmuseum.org/art/collection/search/437202',
  city: 'New York',
};

describe('ArtCard', () => {
  it('renders artwork title and image when showImage is true', () => {
    render(<ArtCard artwork={mockArtwork} showImage={true} />);
    
    const titleElement = screen.getByText(/starry night/i);
    const imageElement = screen.getByRole('img', { name: /starry night/i }) as HTMLImageElement;

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();

    // Verifica se a src contém a URL codificada
    expect(imageElement.src).toContain(encodeURIComponent('http://example.com/image.jpg'));
  });

  it('renders fallback image when imageUrl is not provided', () => {
    const artworkWithoutImage = { ...mockArtwork, imageUrl: '' };
    
    render(<ArtCard artwork={artworkWithoutImage} showImage={true} />);
    const fallbackImageElement = screen.getByRole('img', { name: /starry night/i }) as HTMLImageElement;

    // Verifica se a src contém a URL do fallback codificada
    expect(fallbackImageElement.src).toContain(encodeURIComponent('/fallback-image.jpg'));
  });
  
  it('renders link to MET website if linkResource is provided', () => {
    render(<ArtCard artwork={mockArtwork} showImage={true} />);
    
    // Clica no botão para mostrar os detalhes
    fireEvent.click(screen.getByText(/more details/i));

    const linkElement = screen.getByRole('link', { name: /view on met website/i });
    
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockArtwork.linkResource);
  });
});