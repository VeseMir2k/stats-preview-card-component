import Image from '../../assets/image-header-mobile.jpg';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';

const Card = () => {
  const titleText = `Get <span class="text-red-800">insights</span> that help your business grow`;
  return (
    <div>
      <CardImage image={Image} />
      <CardTitle text={titleText} />
    </div>
  );
};

export default Card;
