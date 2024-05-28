interface CardImageProps {
  image: string;
}

export const CardImage = ({ image }: CardImageProps) => <img src={image} alt='image' />;
