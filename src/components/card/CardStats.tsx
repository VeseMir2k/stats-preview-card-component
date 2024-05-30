import { CardStatsItem } from './CardStatsItem';

export const CardStats = () => (
  <div className='flex flex-col gap-[24px] xl:flex-row xl:gap-[60px]'>
    <CardStatsItem stat='10k+' title='Companies' />
    <CardStatsItem stat='314' title='Templates' />
    <CardStatsItem stat='12M+' title='Queries' />
  </div>
);
