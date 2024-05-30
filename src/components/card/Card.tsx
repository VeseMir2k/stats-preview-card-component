import ImageLarge from '../../assets/image-header-desktop.jpg';
import Image from '../../assets/image-header-mobile.jpg';
import { CardDescription } from './CardDescription';
import { CardImage } from './CardImage';
import { CardStats } from './CardStats';
import { CardTitle } from './CardTitle';

const Card = () => {
  const titleText = `Get <span class="text-purple">insights</span> that help your business grow`;

  const descriptionText =
    'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.';

  return (
    <div className='bg-bgSecondary flex flex-col overflow-hidden rounded-[8px] text-center text-white xl:w-[1110px] xl:flex-row-reverse xl:text-left'>
      <CardImage image={Image} imageLarge={ImageLarge} />
      <div className='p-[32px] pt-[40px] xl:w-[50%] xl:p-[70px] xl:pr-[100px]'>
        <CardTitle text={titleText} />
        <CardDescription>{descriptionText}</CardDescription>
        <CardStats />
      </div>
    </div>
  );
};

export default Card;
