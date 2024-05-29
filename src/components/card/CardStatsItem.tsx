interface CardStatItemProps {
  stat: string;
  title: string;
}

export const CardStatsItem = ({ stat, title }: CardStatItemProps) => (
  <div className='text-center text-white'>
    <p className='mb-[2px] text-[24px] font-bold'>{stat}</p>
    <p className='leading-[25px] tracking-[1px] opacity-60'>{title}</p>
  </div>
);
