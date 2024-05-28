interface CardStatItemProps {
  stat: string;
  title: string;
}

export const CardStatsItem = ({ stat, title }: CardStatItemProps) => (
  <div>
    <p>{stat}</p>
    <p>{title}</p>
  </div>
);
