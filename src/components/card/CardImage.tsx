interface CardImageProps {
  image: string;
}

export const CardImage = ({ image }: CardImageProps) => (
  <div className='bg-purple'>
    <img className='opacity-75 mix-blend-multiply' src={image} alt='image' />
  </div>
);
