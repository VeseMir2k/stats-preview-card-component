interface CardDescriptionProps {
  children: string;
}

export const CardDescription = ({ children }: CardDescriptionProps) => (
  <p className='mb-[40px] mt-[16px] text-[15px] leading-[25px] opacity-75 xl:mb-[72px] xl:mt-[25px]'>
    {children}
  </p>
);
