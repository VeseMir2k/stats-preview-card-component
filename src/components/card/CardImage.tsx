interface CardImageProps {
  image: string;
  imageLarge: string;
}

export const CardImage = ({ image, imageLarge }: CardImageProps) => (
  <div className='bg-purple xl:w-[50%]'>
    <picture>
      <source media='(min-width:1280px)' srcSet={imageLarge} />
      <img className='w-full opacity-75 mix-blend-multiply xl:size-full' src={image} alt='image' />
    </picture>
  </div>
);
