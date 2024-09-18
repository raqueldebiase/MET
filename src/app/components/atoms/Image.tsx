import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

export const CustomImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-64">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
};
