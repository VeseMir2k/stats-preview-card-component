import Image from '../../assets/image-header-mobile.jpg';
import { CardDescription } from './CardDescription';
import { CardImage } from './CardImage';
import { CardStats } from './CardStats';
import { CardTitle } from './CardTitle';

const Card = () => {
  const titleText = `Get <span class="text-red-800">insights</span> that help your business grow`;
  const descriptionText =
    'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.';
  return (
    <div>
      <CardImage image={Image} />
      <div>
        <CardTitle text={titleText} />
        <CardDescription>{descriptionText}</CardDescription>
        <CardStats />
      </div>
    </div>
  );
};

export default Card;
